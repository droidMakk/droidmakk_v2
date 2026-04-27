export default {
	extends: ['@commitlint/config-conventional'],
	prompt: {
		alias: {
			fd: 'docs: fix typos',
			rl: 'chore(release): publish release'
		},
		messages: {
			type: 'Select the type of change that you are committing:',
			scope: 'Select the scope of this change:',
			subject: 'Write a short, imperative description:',
			body: 'Provide a longer description, if needed:',
			breaking: 'List any breaking changes, if applicable:',
			footerPrefixesSelect: 'Select linked issue type, if any:',
			footer: 'Reference issues, if any:'
		},
		types: [
			{ value: 'feat', name: 'feat:     A new feature' },
			{ value: 'fix', name: 'fix:      A bug fix' },
			{ value: 'docs', name: 'docs:     Documentation only changes' },
			{ value: 'style', name: 'style:    Formatting or style-only changes' },
			{
				value: 'refactor',
				name: 'refactor: Code change that neither fixes a bug nor adds a feature'
			},
			{ value: 'perf', name: 'perf:     Performance improvement' },
			{ value: 'test', name: 'test:     Add or update tests' },
			{ value: 'build', name: 'build:    Build system or dependency changes' },
			{ value: 'ci', name: 'ci:       CI configuration changes' },
			{ value: 'chore', name: 'chore:    Maintenance changes' },
			{ value: 'revert', name: 'revert:   Revert a previous commit' }
		],
		scopes: [
			{ value: 'app', name: 'app: SvelteKit app shell' },
			{ value: 'routes', name: 'routes: SvelteKit routes/pages' },
			{ value: 'components', name: 'components: shared Svelte components' },
			{ value: 'styles', name: 'styles: CSS/Tailwind styling' },
			{ value: 'assets', name: 'assets: static files and media' },
			{ value: 'config', name: 'config: project configuration' },
			{ value: 'deps', name: 'deps: dependency changes' },
			{ value: 'release', name: 'release: release automation' }
		],
		allowCustomScopes: true,
		allowEmptyScopes: true,
		allowBreakingChanges: ['feat', 'fix', 'refactor', 'perf'],
		enableMultipleScopes: false,
		scopeEnumSeparator: ','
	}
};
