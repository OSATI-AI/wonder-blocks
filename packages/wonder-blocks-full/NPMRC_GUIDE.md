# .npmrc Configuration Guide

This guide explains the different `.npmrc` files and configurations for GitHub Packages.

## For Publishers/Maintainers

### Setup (Repository already configured)
1. The repository includes `.npmrc` files for publishing
2. Set your GitHub token: `export GITHUB_TOKEN=your_token_here`
3. Run: `npm publish` (from package directory)

### Repository Files
- **`.npmrc`** (root): Global GitHub Packages configuration
- **`packages/wonder-blocks-full/.npmrc`**: Package-specific settings

## For Consumers

### Quick Setup
```bash
# Copy template to your project
cp node_modules/@osati-ai/wonder-blocks-full/.npmrc.template .npmrc

# Set your token
export GITHUB_TOKEN=your_github_token

# Install
npm install @osati-ai/wonder-blocks-full
```

### Manual Setup
Create `.npmrc` in your project root:
```
@osati-ai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Token Requirements

### For Publishers
- **Scope**: `write:packages`
- **Access**: Repository write access required

### For Consumers
- **Scope**: `read:packages`
- **Access**: Repository read access required

## Mixed Registry Benefits

✅ **Private packages** (`@osati-ai/*`): GitHub Packages
✅ **Public packages** (`@osati-ai/*`): npmjs.org (default)
✅ **No conflicts**: Scoped configuration ensures proper routing

## Troubleshooting

### Common Issues
1. **403 Forbidden**: Check token has correct scope and repository access
2. **404 Not Found**: Verify package name and registry configuration
3. **ENOTFOUND**: Check network access to GitHub Packages

### Verification
```bash
# Test registry configuration
npm config get @osati-ai:registry
# Should return: https://npm.pkg.github.com

# Test authentication
npm whoami --registry=https://npm.pkg.github.com
# Should return your GitHub username
```
