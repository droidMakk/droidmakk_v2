<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import {
		Home,
		Code2,
		BriefcaseBusiness,
		GraduationCap,
		MessageCircle
	} from 'lucide-svelte';

	/** @type {Array<{ label: string; href: import('$app/types').RouteId; icon: any }>} */
	const navItems = [
		{ label: 'Home', href: '/', icon: Home },
		{ label: 'I Build', href: '/build', icon: Code2 },
		{ label: 'Works', href: '/works', icon: BriefcaseBusiness },
		{ label: 'Career', href: '/career', icon: GraduationCap },
		{ label: 'Say hello', href: '/contact', icon: MessageCircle }
	];

	let { className = '' } = $props();
</script>

<nav class={`top-nav ${className}`} aria-label="Primary navigation">
	{#each navItems as item (item.href)}
		{@const Icon = item.icon}
		{@const isActive = page.url.pathname === item.href}
		<a
			href={resolve(item.href)}
			class:active={isActive}
			class="nav-link"
			aria-current={isActive ? 'page' : undefined}
		>
			<Icon size={17} strokeWidth={2.1} aria-hidden="true" />
			<span class:active-label={isActive}>{item.label}</span>
		</a>
	{/each}
</nav>

<style>
	.top-nav {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		width: fit-content;
		max-width: 95vw;
		padding: 0.42rem;
		border: 1px solid var(--ui-border);
		border-radius: 999px;
		background: color-mix(in srgb, var(--ui-surface) 88%, transparent);
		box-shadow: 0 18px 45px
			color-mix(in srgb, var(--accent-yellow) 10%, transparent);
		backdrop-filter: blur(16px);
		overflow: hidden;
	}

	.nav-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		padding: 0.58rem 0.5rem;
		border-radius: 999px;
		color: var(--text-secondary);
		font-size: 0.74rem;
		line-height: 1;
		font-weight: 600;
		text-decoration: none;
		white-space: nowrap;
		transition:
			background 180ms ease,
			color 180ms ease,
			padding 220ms ease,
			gap 220ms ease;
	}

	.nav-link span {
		max-width: 0;
		opacity: 0;
		overflow: hidden;
		transform: translateX(-0.16rem);
		transition:
			max-width 220ms ease,
			opacity 180ms ease,
			transform 220ms ease;
	}

	.nav-link span.active-label {
		max-width: 6rem;
		opacity: 1;
		transform: translateX(0);
	}

	.nav-link:hover {
		background: color-mix(in srgb, var(--ui-muted) 75%, transparent);
		color: var(--text-primary);
	}

	.nav-link.active {
		background: color-mix(
			in srgb,
			var(--accent-yellow) 32%,
			var(--ui-surface) 68%
		);
		color: var(--text-primary);
		padding: 0.58rem 0.84rem;
		gap: 0.4rem;
	}

	@media (min-width: 768px) {
		.nav-link {
			padding: 0.62rem 0.56rem;
			font-size: 0.8rem;
		}

		.nav-link.active {
			padding: 0.62rem 0.82rem;
		}
	}

	@media (max-width: 520px) {
		.top-nav {
			padding: 0.46rem;
			gap: 0.28rem;
		}

		.nav-link {
			padding: 0.66rem 0.42rem;
			font-size: 0.76rem;
		}

		.nav-link :global(svg) {
			width: 1.12rem;
			height: 1.12rem;
		}

		.nav-link.active {
			padding: 0.66rem 0.72rem;
			gap: 0.34rem;
		}

		.nav-link span.active-label {
			max-width: 5.6rem;
		}
	}
</style>
