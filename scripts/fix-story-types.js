#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Find and fix story files with implicit 'any' types
const storyFiles = [
    '__docs__/components/state-sheet.tsx',
    '__docs__/wonder-blocks-badge/badge-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-banner/banner-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-button/activity-button-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-button/button-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-cell/compact-cell-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-cell/detail-cell-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-dropdown/action-item-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-dropdown/multi-select-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-dropdown/option-item-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-dropdown/single-select-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-form/checkbox-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-form/labeled-text-field.stories.tsx',
    '__docs__/wonder-blocks-form/radio-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-form/text-area-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-form/text-field-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-form/text-field.stories.tsx',
    '__docs__/wonder-blocks-icon-button/activity-icon-button-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-icon-button/conversation-icon-button-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-icon-button/icon-button-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-labeled-field/labeled-field.stories.tsx',
    '__docs__/wonder-blocks-link/link-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-pill/pill-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-search-field/search-field-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-switch/switch-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-tabs/navigation-tab-item-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-tabs/navigation-tabs-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-tabs/tab-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-tabs/tabs-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-typography/body-text-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-typography/body-text.stories.tsx',
    '__docs__/wonder-blocks-typography/heading-testing-snapshots.stories.tsx',
    '__docs__/wonder-blocks-typography/heading.stories.tsx',
];

storyFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix implicit any in function parameters for stories
        content = content.replace(/\(args\)\s*=>/g, '(args: any) =>');
        content = content.replace(/\(({[^}]+})\)\s*=>/g, '($1: any) =>');
        content = content.replace(/Parameter '(\w+)' implicitly/g, 'Parameter \'$1: any\' explicitly');
        
        // Fix specific patterns
        content = content.replace(/\(value\)\s*=>/g, '(value: any) =>');
        content = content.replace(/\(newValue\)\s*=>/g, '(newValue: any) =>');
        
        // Fix destructured parameters
        content = content.replace(/\({props}\)\s*=>/g, '({props}: any) =>');
        content = content.replace(/\({props, name}\)\s*=>/g, '({props, name}: any) =>');
        content = content.replace(/\({props, className}\)\s*=>/g, '({props, className}: any) =>');
        content = content.replace(/\({props, className, name}\)\s*=>/g, '({props, className, name}: any) =>');
        content = content.replace(/\({className, stateName}\)\s*=>/g, '({className, stateName}: any) =>');
        
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${file}`);
    }
});

console.log('\nFixed story file types');