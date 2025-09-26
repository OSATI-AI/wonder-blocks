/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-commonjs */
import fs from "fs";
import path from "path";
import {nodeExternals} from "rollup-plugin-node-externals";
import swc from "@rollup/plugin-swc";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";

const createConfig = (pkgName) => {
    const packageJsonPath = path.join("packages", pkgName, "package.json");
    if (!fs.existsSync(packageJsonPath)) {
        return null;
    }

    const extensions = [".js", ".jsx", ".ts", ".tsx"];

    const isBarrel = pkgName === "wonder-blocks-full";

    // For the barrel package, alias all internal Wonder Blocks packages to
    // their local source entrypoints so they get bundled into the barrel.
    // This ensures consumers only depend on the barrel and preserves singletons.
    const wbAliasEntries = isBarrel
        ? fs
              .readdirSync("packages")
              .filter(
                  (dir) =>
                      dir.startsWith("wonder-blocks-") &&
                      dir !== "wonder-blocks-full",
              )
              .map((dir) => ({
                  find: `@osati-ai/${dir}`,
                  replacement: path.resolve(
                      process.cwd(),
                      "packages",
                      dir,
                      "src",
                      "index.ts",
                  ),
              }))
        : [];

    return {
        output: [
            {
                file: `packages/${pkgName}/dist/es/index.js`,
                format: "esm",
            },
            // TODO(FEI-5030): Stop building CJS modules
            {
                file: `packages/${pkgName}/dist/index.js`,
                format: "cjs",
            },
        ],
        input: `packages/${pkgName}/src/index.ts`,
        plugins: [
            // Alias must run before node resolution to rewrite package imports
            // to local source files for bundling (barrel package only).
            ...(isBarrel
                ? [
                      alias({
                          entries: wbAliasEntries,
                      }),
                  ]
                : []),
            swc({
                swc: {
                    swcrc: true,
                    minify: true,
                    // We do _not_ specify "env" here (a la @babel/preset-env)
                    // because our TypeScript compiler "target" is set to ES2021
                    // which is compatible with all of Khan Academy's supported
                    // browsers _and_ will protect us against using APIs that
                    // aren't supported in this browser list).
                    // "env": {...}
                },
                exclude: "node_modules/**",
            }),
            resolve({
                browser: true,
                extensions,
            }),
            nodeExternals({
                packagePath: `packages/${pkgName}/package.json`,
            }),
        ],
    };
};

export default fs.readdirSync("packages").map(createConfig).filter(Boolean);
