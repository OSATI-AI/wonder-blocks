export interface DefinitionNode {
    readonly kind: string;
}
export type VariableDefinitionNode = {
    readonly kind: "VariableDefinition";
};
export interface OperationDefinitionNode extends DefinitionNode {
    readonly kind: "OperationDefinition";
    readonly operation: string;
    readonly variableDefinitions: ReadonlyArray<VariableDefinitionNode>;
    readonly name?: {
        readonly kind: unknown;
        readonly value: string;
    };
}
export type DocumentNode = {
    readonly kind: "Document";
    readonly definitions: ReadonlyArray<DefinitionNode>;
};
