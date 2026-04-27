<script>
	import { onMount } from 'svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import TopNav from '$lib/components/TopNav.svelte';
	import { MoonStar, Sun } from 'lucide-svelte';

	let { children } = $props();
	let theme = $state('light');

	/** @param {'light' | 'dark'} nextTheme */
	function applyTheme(nextTheme) {
		theme = nextTheme;
		document.documentElement.dataset.theme = nextTheme;
		localStorage.setItem('theme', nextTheme);
	}

	function toggleTheme() {
		applyTheme(theme === 'light' ? 'dark' : 'light');
	}

	onMount(() => {
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark') {
			applyTheme(stored);
			return;
		}

		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		applyTheme(prefersDark ? 'dark' : 'light');
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="app-shell">
	<div class="brand-title" aria-label="Site title">DROIDMAKK</div>

	<header class="app-header">
		<TopNav />
		<button
			type="button"
			class="theme-toggle"
			onclick={toggleTheme}
			aria-label={theme === 'light'
				? 'Switch to dark mode'
				: 'Switch to light mode'}
			title={theme === 'light' ? 'Dark mode' : 'Light mode'}
		>
			{#if theme === 'light'}
				<MoonStar size={18} strokeWidth={2} aria-hidden="true" />
			{:else}
				<Sun size={18} strokeWidth={2} aria-hidden="true" />
			{/if}
		</button>
	</header>

	<main class="page-content">
		{@render children()}
	</main>
</div>

<style>
	.app-shell {
		position: relative;
		min-height: 100vh;
	}

	.brand-title {
		position: fixed;
		top: max(0.8rem, env(safe-area-inset-top));
		left: 50%;
		transform: translateX(-50%);
		z-index: 12;
		padding: 0.28rem 0.64rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--text-primary);
		background: color-mix(in srgb, var(--ui-surface) 78%, transparent);
		border: 1px solid
			color-mix(in srgb, var(--accent-yellow) 34%, var(--ui-border));
		backdrop-filter: blur(8px);
	}

	.app-header {
		position: fixed;
		left: 50%;
		bottom: max(0.8rem, env(safe-area-inset-bottom));
		transform: translateX(-50%);
		z-index: 20;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		width: min(96vw, 650px);
		padding: 0 0.35rem;
		backdrop-filter: blur(8px);
	}

	.page-content {
		position: relative;
		z-index: 1;
		padding-top: clamp(2.4rem, 4.8vw, 3.2rem);
		padding-bottom: clamp(5.2rem, 10vw, 6.4rem);
	}

	.theme-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.45rem;
		height: 2.45rem;
		border-radius: 999px;
		border: 1px solid var(--ui-border);
		background: color-mix(in srgb, var(--ui-surface) 88%, transparent);
		color: var(--text-primary);
		cursor: pointer;
		transition:
			transform 120ms ease,
			background 160ms ease;
	}

	.theme-toggle:hover {
		background: color-mix(
			in srgb,
			var(--accent-yellow) 22%,
			var(--ui-surface) 78%
		);
	}

	.theme-toggle:active {
		transform: scale(0.96);
	}

	.theme-toggle:focus-visible {
		outline: 2px solid var(--accent-yellow);
		outline-offset: 2px;
	}

	@media (max-width: 520px) {
		.app-header {
			gap: 0.86rem;
		}

		.theme-toggle {
			width: 2.9rem;
			height: 2.9rem;
		}

		.theme-toggle :global(svg) {
			width: 1.3rem;
			height: 1.3rem;
		}
	}
</style>
