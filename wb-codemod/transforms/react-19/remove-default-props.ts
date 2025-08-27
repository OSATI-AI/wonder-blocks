import {
    FileInfo,
    API,
    JSCodeshift,
    Collection,
    FunctionDeclaration,
    ObjectExpression,
    Property,
    Identifier,
    AssignmentExpression,
    MemberExpression,
} from 'jscodeshift';

export default function transformer(fileInfo: FileInfo, api: API) {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    // Track changes to return appropriate result
    let hasChanges = false;

    // Find all defaultProps assignments
    const defaultPropsAssignments = root.find(j.AssignmentExpression, {
        left: {
            type: 'MemberExpression',
            property: {
                name: 'defaultProps',
            },
        },
    });

    defaultPropsAssignments.forEach((path) => {
        const assignment = path.node as AssignmentExpression;
        const componentName = ((assignment.left as MemberExpression).object as Identifier).name;
        const defaults = assignment.right as ObjectExpression;

        // Find the function declaration for this component
        const componentFunctions = root.find(j.FunctionDeclaration, {
            id: {name: componentName},
        });

        // Also check for exported functions
        if (componentFunctions.length === 0) {
            const exportedComponents = root
                .find(j.ExportDefaultDeclaration)
                .filter(path => {
                    const declaration = path.value.declaration;
                    return j.FunctionDeclaration.check(declaration) &&
                           declaration.id &&
                           declaration.id.name === componentName;
                });

            if (exportedComponents.length > 0) {
                updateFunctionWithDefaults(j, exportedComponents.at(0).get('declaration'), defaults);
                hasChanges = true;
            }
        } else {
            updateFunctionWithDefaults(j, componentFunctions.at(0), defaults);
            hasChanges = true;
        }

        // Also check for arrow functions assigned to const
        const arrowFunctions = root
            .find(j.VariableDeclarator, {
                id: {name: componentName},
            })
            .filter(path => {
                return j.ArrowFunctionExpression.check(path.value.init);
            });

        if (arrowFunctions.length > 0) {
            const funcPath = arrowFunctions.at(0);
            const arrowFunc = funcPath.value.init;
            if (j.ArrowFunctionExpression.check(arrowFunc) && arrowFunc.params.length > 0) {
                updateArrowFunctionWithDefaults(j, funcPath, defaults);
                hasChanges = true;
            }
        }

        // Remove the defaultProps assignment
        j(path).remove();
        hasChanges = true;
    });

    return hasChanges ? root.toSource() : null;
}

function updateFunctionWithDefaults(
    j: JSCodeshift,
    funcPath: any,
    defaults: ObjectExpression
) {
    const func = funcPath.value;
    const params = func.params;

    if (params.length > 0) {
        const firstParam = params[0];
        
        // If it's already destructured, extend it
        if (j.ObjectPattern.check(firstParam)) {
            addDefaultsToObjectPattern(j, firstParam, defaults);
        } else if (j.Identifier.check(firstParam)) {
            // Convert props parameter to destructured parameter with defaults
            const newParam = createDestructuredParam(j, firstParam.name, defaults, funcPath);
            params[0] = newParam;
        }
    }
}

function updateArrowFunctionWithDefaults(
    j: JSCodeshift,
    funcPath: any,
    defaults: ObjectExpression
) {
    const arrowFunc = funcPath.value.init;
    const params = arrowFunc.params;

    if (params.length > 0) {
        const firstParam = params[0];
        
        if (j.ObjectPattern.check(firstParam)) {
            addDefaultsToObjectPattern(j, firstParam, defaults);
        } else if (j.Identifier.check(firstParam)) {
            const newParam = createDestructuredParam(j, firstParam.name, defaults, funcPath);
            params[0] = newParam;
        }
    }
}

function addDefaultsToObjectPattern(
    j: JSCodeshift,
    objectPattern: any,
    defaults: ObjectExpression
) {
    // Add default values to existing destructured properties
    defaults.properties?.forEach((defaultProp) => {
        if (j.Property.check(defaultProp) && j.Identifier.check(defaultProp.key)) {
            const propName = defaultProp.key.name;
            
            // Find if this property already exists in the pattern
            const existingProp = objectPattern.properties.find((prop: any) => {
                return j.Property.check(prop) && 
                       j.Identifier.check(prop.key) && 
                       prop.key.name === propName;
            });

            if (existingProp) {
                // Add default value to existing property
                if (j.Identifier.check(existingProp.value)) {
                    existingProp.value = j.assignmentPattern(
                        existingProp.value,
                        defaultProp.value
                    );
                }
            } else {
                // Add new property with default
                objectPattern.properties.push(
                    j.property('init', j.identifier(propName), 
                        j.assignmentPattern(j.identifier(propName), defaultProp.value)
                    )
                );
            }
        }
    });
}

function createDestructuredParam(
    j: JSCodeshift,
    propsParamName: string,
    defaults: ObjectExpression,
    funcPath: any
): any {
    // Analyze the function body to find prop usage
    const usedProps = new Set<string>();
    
    // Find all member expressions like props.something
    j(funcPath)
        .find(j.MemberExpression, {
            object: {name: propsParamName}
        })
        .forEach(path => {
            if (j.Identifier.check(path.value.property)) {
                usedProps.add(path.value.property.name);
            }
        });

    const properties: any[] = [];

    // Add properties with defaults from defaultProps
    defaults.properties?.forEach((defaultProp) => {
        if (j.Property.check(defaultProp) && j.Identifier.check(defaultProp.key)) {
            const propName = defaultProp.key.name;
            properties.push(
                j.property('init', j.identifier(propName), 
                    j.assignmentPattern(j.identifier(propName), defaultProp.value)
                )
            );
            usedProps.delete(propName); // Remove from used props since we handled it
        }
    });

    // Add remaining used properties without defaults
    usedProps.forEach(propName => {
        properties.push(
            j.property.from({
                kind: 'init',
                key: j.identifier(propName),
                value: j.identifier(propName),
                shorthand: true,
            })
        );
    });

    return j.objectPattern(properties);
}