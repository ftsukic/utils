# Repository Guidelines

## Project Structure & Module Organization

This is a TypeScript utility package. Source modules live in `src/`, usually one file per exported function, for example `src/blobToBase64.ts`; grouped functionality can use subdirectories such as `src/storage/`. The public barrel file is `src/index.ts` and is maintained through generator scripts, so update exports with `npm run entry`. Tests live in `test/` and follow the utility name, for example `test/parseQuery.test.ts`. Generated API docs are in `docs/`; build outputs are `es/` and `lib/`.

## Build, Test, and Development Commands

- `npm run gen`: scaffold a new utility module with Plop templates.
- `npm run del`: remove a generated utility module.
- `npm run entry`: regenerate `src/index.ts` exports.
- `npm run lint`: run ESLint with auto-fix over `src/**/*.{js,ts}`.
- `npm test`: run the Jest test suite with `ts-jest` in `jsdom`.
- `npm run coverage`: run Jest and write coverage to `coverage/`.
- `npm run docs`: regenerate Markdown API docs from `src/index.ts`.
- `npm run build`: clean `es/` and `lib/`, then bundle with `tsup`.
- `npm run build:tsc`: regenerate exports, then emit ESM and CJS builds via `tsc`.

## Coding Style & Naming Conventions

Use TypeScript ESM and keep utilities small, focused, and named after their exported function. File names use camelCase (`formatDate.ts`, `isEmpty.ts`) and directory `index.ts` files for grouped exports. Formatting is controlled by EditorConfig and Prettier: UTF-8, LF, two-space indentation, no semicolons, single quotes, and trailing commas where valid. ESLint uses `@typescript-eslint/recommended`; unused variables are errors unless prefixed with `_`, and `any` is allowed when appropriate.

## Testing Guidelines

Add or update a Jest test for behavior changes, especially parsing, formatting, validation, and edge cases. Place tests in `test/` using `<module>.test.ts`. Prefer direct imports from `src/<module>` or the public entry point. Run `npm test` before submitting; use `npm run coverage` for shared helpers or bug-prone logic.

## Commit & Pull Request Guidelines

Commitlint enforces Conventional Commits, so use messages such as `feat: add currency formatter`, `fix: handle empty query strings`, or `chore: update docs`. Release commits use version tags like `v0.1.34`. Pull requests should describe the change, list tests run, link related issues, and mention generated updates such as `src/index.ts` or `docs/`.

## Agent-Specific Notes

Do not hand-edit generated build output in `es/` or `lib/`. Keep changes scoped, preserve existing Chinese documentation/comments where present, and run the smallest relevant validation command after edits.
