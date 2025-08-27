#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix ref type strictness in TypeScript files
function fixRefTypes(content) {
    // Fix RefObject<T | null> to RefObject<T>
    content = content.replace(
        /RefObject<([^>]+)\s*\|\s*null>/g,
        'RefObject<$1>'
    );
    
    // Fix React.RefObject<T | null> to React.RefObject<T>
    content = content.replace(
        /React\.RefObject<([^>]+)\s*\|\s*null>/g,
        'React.RefObject<$1>'
    );
    
    // Fix createRef() calls to properly type them
    content = content.replace(
        /const\s+(\w+):\s*React\.RefObject<([^>]+)>\s*=\s*React\.createRef\(\)/g,
        'const $1 = React.createRef<$2>()'
    );
    
    // Fix useRef() calls to properly type them
    content = content.replace(
        /const\s+(\w+):\s*RefObject<([^>]+)>\s*=\s*useRef\(null\)/g,
        'const $1 = useRef<$2>(null)'
    );
    
    return content;
}

// Process all TypeScript and TSX files
const patterns = [
    'packages/**/*.tsx',
    'packages/**/*.ts',
    '__docs__/**/*.tsx',
    '__docs__/**/*.ts',
    'consistency-tests/**/*.tsx',
    'consistency-tests/**/*.ts'
];

let filesFixed = 0;

patterns.forEach(pattern => {
    const files = glob.sync(pattern, { ignore: ['**/node_modules/**', '**/dist/**'] });
    
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const fixed = fixRefTypes(content);
        
        if (content !== fixed) {
            fs.writeFileSync(file, fixed);
            filesFixed++;
            console.log(`Fixed: ${file}`);
        }
    });
});

console.log(`\nTotal files fixed: ${filesFixed}`);