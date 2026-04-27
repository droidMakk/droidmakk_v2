# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.15.1 create --template minimal --types jsdoc --add tailwindcss="plugins:none" --install pnpm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Quality and releases

Use conventional commits so semantic-release can decide the next version:

```sh
feat: add portfolio filtering
fix: correct contact form validation
```

Commit with commitlint enforcement:

```sh
pnpm commit
```

This stages local changes and opens a Commitizen prompt. The generated message is still validated by the Husky `commit-msg` hook before Git accepts the commit.

Local checks:

```sh
pnpm validate
```

Husky runs `lint-staged` before commits and `commitlint` for commit messages. On every push or merge to `main`, GitHub Actions runs SvelteKit validation and `semantic-release`, then updates `CHANGELOG.md`, `package.json`, `pnpm-lock.yaml`, and creates a GitHub release. Breaking changes release majors, `feat` releases minors, and other conventional commit types release patches.
