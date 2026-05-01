<script>
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import './layout.css';
	import TopNav from '$lib/components/TopNav.svelte';
	import droidmakkLogo from '$lib/assets/droidmakk-logo.svg';
	import { MoonStar, Sun } from 'lucide-svelte';

	const siteUrl = 'https://droidmakkv2.web.app';
	const siteName = 'Droidmakk';
	const defaultDescription =
		'Portfolio of Afroze Khan, a principal front-end developer and full-stack mobile engineering lead building healthcare, connected-device, sustainability, commerce, and platform products.';
	const defaultKeywords =
		'Afroze Khan, Droidmakk, Principal Front-End Developer, Full-Stack Developer, React, Next.js, React Native, Node.js, Svelte, AWS, Azure, Firebase, healthcare software, mobile apps';
	const ogImageUrl = `${siteUrl}/assets/img/profile-hero.png`;

	/** @type {Record<string, { title: string; description: string }>} */
	const routeSeo = {
		'/': {
			title: 'Afroze Khan | Principal Front-End Developer',
			description: defaultDescription
		},
		'/ship': {
			title: 'How It Is Shipped | Droidmakk',
			description:
				'The delivery process behind Droidmakk projects, from product discovery and architecture to implementation, testing, and launch support.'
		},
		'/works': {
			title: 'Selected Work | Afroze Khan',
			description:
				'Selected shipped work by Afroze Khan across carbon tracking, field operations, mobile commerce, marketplace discovery, and energy monitoring products.'
		},
		'/career': {
			title: 'Career Experience | Afroze Khan',
			description:
				'Career experience of Afroze Khan across Sleepiz AG, Droidmakk, Crewscale, Crayond, and Paripoorna, covering front-end leadership, mobile, full-stack, and cloud delivery.'
		},
		'/contact': {
			title: 'Contact | Afroze Khan',
			description:
				'Contact Afroze Khan for front-end, full-stack, mobile, and product engineering collaboration.'
		}
	};

	let { children } = $props();
	let theme = $state('light');
	let seo = $derived(routeSeo[page.url.pathname] ?? routeSeo['/']);
	let canonicalUrl = $derived(
		`${siteUrl}${page.url.pathname === '/' ? '/' : page.url.pathname}`
	);

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
		} else {
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			applyTheme(prefersDark ? 'dark' : 'light');
		}

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		);

		let ticking = false;

		const syncParallax = () => {
			ticking = false;
			const scrollY = window.scrollY || window.pageYOffset || 0;
			document.documentElement.style.setProperty(
				'--bg-parallax-y',
				`${Math.round(scrollY * -0.16)}px`
			);
			document.documentElement.style.setProperty(
				'--bg-parallax-y-slow',
				`${Math.round(scrollY * -0.08)}px`
			);
		};

		const onScroll = () => {
			if (prefersReducedMotion.matches) {
				return;
			}

			if (!ticking) {
				ticking = true;
				window.requestAnimationFrame(syncParallax);
			}
		};

		const resetParallax = () => {
			document.documentElement.style.setProperty('--bg-parallax-y', '0px');
			document.documentElement.style.setProperty(
				'--bg-parallax-y-slow',
				'0px'
			);
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		if (prefersReducedMotion.matches) {
			resetParallax();
		} else {
			syncParallax();
		}

		return () => {
			window.removeEventListener('scroll', onScroll);
			resetParallax();
		};
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={defaultKeywords} />
	<meta name="author" content="Afroze Khan" />
	<meta name="creator" content="Afroze Khan" />
	<meta name="publisher" content="Droidmakk" />
	<meta name="robots" content="index, follow" />
	<meta name="color-scheme" content="light dark" />
	<meta name="theme-color" content="#fdbd53" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#121418" media="(prefers-color-scheme: dark)" />
	<meta name="msapplication-TileColor" content="#fdbd53" />
	<meta name="apple-mobile-web-app-title" content={siteName} />
	<meta name="application-name" content={siteName} />
	<link rel="canonical" href={canonicalUrl} />
	<link rel="manifest" href="/manifest.json" />
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/assets/img/icons/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="/assets/img/icons/favicon-16x16.png"
	/>
	<link rel="apple-touch-icon" href="/assets/img/icons/apple-icon-180x180.png" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:alt" content="Afroze Khan portfolio hero portrait" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={ogImageUrl} />
</svelte:head>

<div class="app-shell">
	<a
		href={resolve('/')}
		class="mobile-top-brand"
		aria-label="Droidmakk home"
		class:active={page.url.pathname === '/'}
	>
		<img src={droidmakkLogo} alt="Droidmakk logo" />
	</a>

	<header class="app-header">
		<TopNav />
		<button
			type="button"
			class="theme-toggle"
			class:light-mode={theme === 'dark'}
			class:dark-mode={theme === 'light'}
			class:moon-icon={theme === 'light'}
			class:sun-icon={theme === 'dark'}
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

	<main class="page-content" class:home-page={page.url.pathname === '/'}>
		{@render children()}
	</main>
</div>

<style>
	.app-shell {
		position: relative;
		min-height: 100vh;
	}

	.app-header {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 20;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.8rem max(0.75rem, env(safe-area-inset-left))
			max(0.8rem, env(safe-area-inset-bottom))
			max(0.75rem, env(safe-area-inset-right));
		background: color-mix(in srgb, var(--ui-bg) 42%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.mobile-top-brand {
		display: none;
	}

	.page-content {
		position: relative;
		z-index: 1;
		padding-top: clamp(1.4rem, 2.8vw, 2rem);
		padding-bottom: clamp(5.2rem, 10vw, 6.4rem);
	}

	.page-content.home-page {
		padding-top: clamp(2.4rem, 4.8vw, 3.2rem);
	}

	.theme-toggle {
		position: relative;
		overflow: hidden;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.45rem;
		height: 2.45rem;
		border-radius: 999px;
		border: 1px solid var(--ui-border);
		background:
			radial-gradient(
				circle at 28% 26%,
				#ffffffd1 0 15%,
				transparent 16%
			),
			linear-gradient(160deg, #86cffb 0%, #5ba8ef 48%, #2f79cc 100%);
		color: var(--text-primary);
		cursor: pointer;
		transition:
			transform 120ms ease,
			background 220ms ease,
			box-shadow 220ms ease;
		box-shadow: inset 0 1px 4px #ffffff70;
	}

	.theme-toggle::before,
	.theme-toggle::after {
		content: '';
		position: absolute;
		pointer-events: none;
		transition: opacity 220ms ease;
	}

	/* Tiny cloud puffs — top edge and bottom edge only, clear of the center icon */
	.theme-toggle.light-mode::before {
		left: 0.28rem;
		top: 0.14rem;
		width: 0.96rem;
		height: 0.3rem;
		opacity: 0.92;
		background:
			radial-gradient(circle at 22% 62%, #f6fbff 0 40%, transparent 41%),
			radial-gradient(circle at 50% 38%, #f9fcff 0 44%, transparent 45%),
			radial-gradient(circle at 78% 58%, #f2f8ff 0 38%, transparent 39%);
	}

	.theme-toggle.light-mode::after {
		right: 0.28rem;
		bottom: 0.14rem;
		width: 0.72rem;
		height: 0.26rem;
		opacity: 0.84;
		background:
			radial-gradient(circle at 28% 56%, #f8fcff 0 40%, transparent 41%),
			radial-gradient(circle at 68% 44%, #eef6ff 0 42%, transparent 43%);
	}

	.theme-toggle.dark-mode {
		background:
			radial-gradient(circle at 70% 30%, #8698ff60 0 22%, transparent 24%),
			linear-gradient(165deg, #171d3b 0%, #11172f 55%, #090d1d 100%);
		box-shadow:
			inset 0 1px 3px #95a7ff33,
			0 0 0 1px #0f1530;
	}

	/* Stars pinned to the four corner quadrants — center zone left clear for the icon */
	.theme-toggle.dark-mode::before {
		inset: 0;
		opacity: 0.9;
		background:
			/* top-left corner */
			radial-gradient(circle at 10% 12%, #f3f6ff 0 1px, transparent 1.5px),
			radial-gradient(circle at 20% 22%, #e8edff 0 1px, transparent 1.5px),
			/* top-right corner */
			radial-gradient(circle at 82% 10%, #fbfdff 0 1px, transparent 1.5px),
			radial-gradient(circle at 90% 24%, #f5f8ff 0 1px, transparent 1.5px),
			/* bottom-left corner */
			radial-gradient(circle at 12% 78%, #eef3ff 0 1px, transparent 1.5px),
			/* bottom-right corner */
			radial-gradient(circle at 84% 82%, #dce4ff 0 1px, transparent 1.5px),
			radial-gradient(circle at 76% 90%, #f3f6ff 0 1px, transparent 1.5px);
		animation: stars-pulse 3.1s ease-in-out infinite;
	}

	.theme-toggle.dark-mode::after {
		top: 0.2rem;
		right: 0.2rem;
		width: 0.56rem;
		height: 0.56rem;
		opacity: 0.32;
		background:
			radial-gradient(circle, #9eb4ff6b 0 44%, transparent 45%);
	}

	.theme-toggle :global(svg) {
		position: relative;
		z-index: 1;
	}

	.theme-toggle.moon-icon :global(svg) {
		color: #d8e3ff;
	}

	.theme-toggle.sun-icon :global(svg) {
		color: #ffd45c;
	}

	.theme-toggle:hover {
		box-shadow:
			inset 0 1px 4px #ffffff75,
			0 0 0 1px color-mix(in srgb, var(--accent-yellow) 32%, transparent);
	}

	.theme-toggle:active {
		transform: scale(0.96);
	}

	.theme-toggle:focus-visible {
		outline: 2px solid var(--accent-yellow);
		outline-offset: 2px;
	}

	@keyframes stars-pulse {
		0%,
		100% {
			opacity: 0.74;
		}

		50% {
			opacity: 1;
		}
	}

	@media (max-width: 520px) {
		.mobile-top-brand {
			position: fixed;
			top: max(0.72rem, env(safe-area-inset-top));
			left: 50%;
			z-index: 20;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 5.35rem;
			height: 2.9rem;
			padding: 0 0.62rem;
			border: 1px solid var(--ui-border);
			border-radius: 999px;
			background: color-mix(in srgb, var(--ui-surface) 88%, transparent);
			box-shadow: 0 18px 45px
				color-mix(in srgb, var(--accent-yellow) 10%, transparent);
			backdrop-filter: blur(16px);
			transform: translateX(-50%);
			transition:
				background 180ms ease,
				transform 180ms ease;
		}

		.mobile-top-brand.active {
			background: color-mix(
				in srgb,
				var(--accent-yellow) 28%,
				var(--ui-surface)
			);
		}

		.mobile-top-brand img {
			display: block;
			max-width: 100%;
			height: auto;
		}

		.page-content {
			padding-top: clamp(5.15rem, 17vw, 5.85rem);
		}

		.page-content.home-page {
			padding-top: clamp(5.6rem, 18vw, 6.25rem);
		}

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
