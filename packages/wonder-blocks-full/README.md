# @osati-ai/wonder-blocks-full

The complete Wonder Blocks design system package - includes all components, utilities, and styles in a single convenient package.

## Overview

`@osati-ai/wonder-blocks-full` is an umbrella package that aggregates all Wonder Blocks components and utilities. Instead of installing multiple individual packages, you can install this single package and get access to the entire Wonder Blocks ecosystem.

This package is privately published to GitHub Packages, ensuring secure distribution while maintaining full compatibility with public Khan Academy packages.

## Installation

### Prerequisites

This package is distributed via GitHub Packages. You'll need:
1. A GitHub account with access to this repository
2. A GitHub Personal Access Token with `read:packages` scope

### Setup GitHub Packages Registry

Create or update your `.npmrc` file in your project root. You can use the template provided:

```bash
# Copy the template
cp node_modules/@osati-ai/wonder-blocks-full/.npmrc.template .npmrc

# Or create manually:
# .npmrc
@osati-ai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Set your GitHub token as an environment variable:

```bash
# Linux/macOS
export GITHUB_TOKEN=your_github_token_here

# Windows
set GITHUB_TOKEN=your_github_token_here
```

### Install the Package

```bash
npm install @osati-ai/wonder-blocks-full react react-dom aphrodite
# or
pnpm add @osati-ai/wonder-blocks-full react react-dom aphrodite
# or
yarn add @osati-ai/wonder-blocks-full react react-dom aphrodite
```

### Import CSS Styles

To use Wonder Blocks components with their default styling, import the complete CSS bundle:

```typescript
// Import all Wonder Blocks CSS variables and styles
import "@osati-ai/wonder-blocks-full/styles.css";
```

This imports all CSS variables needed for theming, including colors, typography, spacing, and component-specific styles.

## Quick Start

### Option 1: Import from the main entry point (most common components)

```typescript
import { Button, Text, View, Modal } from "@osati-ai/wonder-blocks-full";

function MyComponent() {
    return (
        <View>
            <Text>Hello Wonder Blocks!</Text>
            <Button onClick={() => console.log("clicked")}>
                Click me
            </Button>
        </View>
    );
}
```

### Option 2: Import from original packages (recommended for tree-shaking)

```typescript
import { Button } from "@khanacademy/wonder-blocks-button";
import { Text, View } from "@khanacademy/wonder-blocks-core";
import { Modal } from "@khanacademy/wonder-blocks-modal";
import { Dropdown } from "@khanacademy/wonder-blocks-dropdown";
```

### Option 3: Import namespaced exports

```typescript
import { Modal, Accordion, Badge } from "@osati-ai/wonder-blocks-full";

function MyComponent() {
    return (
        <div>
            <Modal.ModalDialog>
                <Modal.ModalBody>Content here</Modal.ModalBody>
            </Modal.ModalDialog>
            <Accordion.AccordionSection header="Section 1">
                Content here
            </Accordion.AccordionSection>
            <Badge.Badge>New</Badge.Badge>
        </div>
    );
}
```

## Available Components

All Wonder Blocks components are available either as direct exports or as namespaced exports from the main package. For optimal tree-shaking, you can also import directly from the individual packages:

### Core Components
- **@khanacademy/wonder-blocks-core** - Core utilities, components (View, Text, etc.)
- **@khanacademy/wonder-blocks-button** - Button components
- **@khanacademy/wonder-blocks-clickable** - Clickable wrapper component
- **@khanacademy/wonder-blocks-icon** - Icon components
- **@khanacademy/wonder-blocks-icon-button** - Icon button components
- **@khanacademy/wonder-blocks-link** - Link components
- **@khanacademy/wonder-blocks-typography** - Typography components

### Layout & Structure
- **@khanacademy/wonder-blocks-layout** - Layout utilities (Row, Column, etc.)
- **@khanacademy/wonder-blocks-grid** - Grid system components

### Form Components
- **@khanacademy/wonder-blocks-form** - Form components (TextInput, etc.)
- **@khanacademy/wonder-blocks-labeled-field** - Labeled field wrapper
- **@khanacademy/wonder-blocks-search-field** - Search input component
- **@khanacademy/wonder-blocks-switch** - Switch/toggle component
- **@khanacademy/wonder-blocks-birthday-picker** - Birthday picker component

### Navigation & Information
- **@khanacademy/wonder-blocks-breadcrumbs** - Breadcrumb navigation
- **@khanacademy/wonder-blocks-tabs** - Tab components
- **@khanacademy/wonder-blocks-dropdown** - Dropdown components
- **@khanacademy/wonder-blocks-modal** - Modal components
- **@khanacademy/wonder-blocks-popover** - Popover components
- **@khanacademy/wonder-blocks-tooltip** - Tooltip components

### Display Components
- **@khanacademy/wonder-blocks-badge** - Badge components
- **@khanacademy/wonder-blocks-banner** - Banner components
- **@khanacademy/wonder-blocks-pill** - Pill components
- **@khanacademy/wonder-blocks-cell** - Cell/list item components
- **@khanacademy/wonder-blocks-accordion** - Accordion/collapsible components
- **@khanacademy/wonder-blocks-progress-spinner** - Loading spinner
- **@khanacademy/wonder-blocks-toolbar** - Toolbar components

### Utilities & Styling
- **@khanacademy/wonder-blocks-styles** - Styling utilities
- **@khanacademy/wonder-blocks-tokens** - Design tokens
- **@khanacademy/wonder-blocks-theming** - Theming utilities
- **@khanacademy/wonder-blocks-timing** - Timing/animation utilities
- **@khanacademy/wonder-blocks-data** - Data management utilities
- **@khanacademy/wonder-blocks-announcer** - Accessibility announcer

### Testing
- **@khanacademy/wonder-blocks-testing** - Testing utilities
- **@khanacademy/wonder-blocks-testing-core** - Core testing utilities

## Examples

### Basic Button Usage

```typescript
import { Button } from "@khanacademy/wonder-blocks-full";

function MyComponent() {
    return (
        <Button
            onClick={() => console.log("Primary action")}
            kind="primary"
        >
            Primary Button
        </Button>
    );
}
```

### Modal Example

```typescript
import { Modal, Button } from "@osati-ai/wonder-blocks-full";

function MyModalExample() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                Open Modal
            </Button>
            {isOpen && (
                <Modal.ModalDialog onClose={() => setIsOpen(false)}>
                    <Modal.ModalHeader title="Example Modal" />
                    <Modal.ModalBody>
                        Modal content goes here
                    </Modal.ModalBody>
                    <Modal.ModalFooter>
                        <Button onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </Modal.ModalFooter>
                </Modal.ModalDialog>
            )}
        </>
    );
}
```

### Form Example

```typescript
import { Form, LabeledField, Button } from "@osati-ai/wonder-blocks-full";

function MyForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    return (
        <form>
            <LabeledField label="Name">
                <Form.TextField
                    value={name}
                    onChange={setName}
                    placeholder="Enter your name"
                />
            </LabeledField>
            <LabeledField label="Email">
                <Form.TextField
                    value={email}
                    onChange={setEmail}
                    type="email"
                    placeholder="Enter your email"
                />
            </LabeledField>
            <Button type="submit" kind="primary">
                Submit
            </Button>
        </form>
    );
}
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` ^19.0.0
- `react-dom` ^19.0.0
- `aphrodite` ^1.2.5

Optional peer dependencies (required only if using router-related components):
- `react-router` ^6.26.0
- `react-router-dom` ^6.26.0
- `react-router-dom-v5-compat` ^6.30.0

## Tree Shaking

This package is fully tree-shakeable. When you import specific components from subpackages, bundlers like Webpack, Rollup, or Vite will only include the code you actually use.

For optimal bundle size:
- ✅ Use subpackage imports: `import { Button } from "@khanacademy/wonder-blocks-full/button"`
- ❌ Avoid importing everything: `import * as WB from "@khanacademy/wonder-blocks-full"`

## TypeScript Support

All packages include full TypeScript definitions. No need to install additional `@types/*` packages.

```typescript
import type { ButtonProps } from "@khanacademy/wonder-blocks-full/button";
import type { TextProps } from "@khanacademy/wonder-blocks-full/core";
```

## Migration from Individual Packages

If you're currently using individual Wonder Blocks packages, you can migrate gradually:

### Before
```typescript
import { Button } from "@khanacademy/wonder-blocks-button";
import { Text } from "@khanacademy/wonder-blocks-core";
import { Modal } from "@khanacademy/wonder-blocks-modal";
```

### After
```typescript
import { Button, Text, Modal } from "@osati-ai/wonder-blocks-full";
// OR use individual packages for better tree-shaking
import { Button } from "@khanacademy/wonder-blocks-button";
import { Text } from "@khanacademy/wonder-blocks-core";
import { Modal } from "@khanacademy/wonder-blocks-modal";
```

The API remains exactly the same - you get the choice of convenience vs. optimal tree-shaking.

## Individual Package Documentation

For detailed documentation of each component and its API, refer to the individual package documentation:

- [wonder-blocks-core](https://github.com/Khan/wonder-blocks/tree/main/packages/wonder-blocks-core)
- [wonder-blocks-button](https://github.com/Khan/wonder-blocks/tree/main/packages/wonder-blocks-button)
- [wonder-blocks-modal](https://github.com/Khan/wonder-blocks/tree/main/packages/wonder-blocks-modal)
- And more...

## Publishing to GitHub Packages

For maintainers who need to publish this package:

### Prerequisites

1. Ensure you have write access to this repository
2. Create a GitHub Personal Access Token with `write:packages` scope
3. The repository already includes the necessary `.npmrc` configuration

**Note**: The `.npmrc` files are already configured in this repository. They use the `${GITHUB_TOKEN}` environment variable, so no tokens are stored in the code.

### Publishing Steps

```bash
# 1. Build the package
pnpm build

# 2. Navigate to the package directory
cd packages/wonder-blocks-full

# 3. Publish to GitHub Packages
npm publish
```

### Verification

After publishing, consumers can verify the installation:

```bash
# Should list the published version
npm view @osati-ai/wonder-blocks-full

# Test installation in a new project
npm install @osati-ai/wonder-blocks-full
```

## NPM Configuration Files

This repository includes several `.npmrc` files for different purposes:

### Repository Files
- **`.npmrc`** (root): Publishing configuration for maintainers
- **`packages/wonder-blocks-full/.npmrc`**: Package-specific configuration
- **`packages/wonder-blocks-full/.npmrc.template`**: Template for consumers

### Mixed Registry Configuration

This setup allows consumers to use both private and public packages:

- **Private packages** (`@osati-ai/*`): From GitHub Packages
- **Public packages** (`@khanacademy/*`): From npmjs.org

Example consumer `.npmrc`:
```bash
# Private packages from GitHub
@osati-ai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}

# Public packages use default registry (npmjs.org)
# No additional configuration needed
```

### Security Notes
- ✅ No actual tokens are stored in the repository
- ✅ All `.npmrc` files use environment variables (`${GITHUB_TOKEN}`)
- ✅ Safe to commit to version control

## Privacy Guarantee

- ✅ **Repository privacy**: Publishing does NOT make your repository public
- ✅ **Package access**: Only users with repository access can install the package
- ✅ **Mixed registries**: Public `@khanacademy/*` packages still work from npmjs
- ✅ **Authentication required**: Consumers need GitHub token with `read:packages` scope

## Contributing

This package is part of the Wonder Blocks monorepo. For contributing guidelines, please see the main [Wonder Blocks repository](https://github.com/Khan/wonder-blocks).

## License

MIT
