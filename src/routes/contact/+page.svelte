<script>
	import { onMount } from 'svelte';
	import './styles.css';
	import { SOCIAL_LINKS, DIRECT_CONTACT } from './data.js';

	let isDark = $state(false);

	let calendlyUrl = $derived(
		isDark
			? 'https://calendly.com/droidmakk/30min?text_color=f4f4f4&primary_color=fdbd53&background_color=121418'
			: 'https://calendly.com/droidmakk/30min?text_color=1f2124&primary_color=fdbd53&background_color=ffffff'
	);

	onMount(() => {
		isDark = document.documentElement.dataset.theme === 'dark';

		const observer = new MutationObserver(() => {
			isDark = document.documentElement.dataset.theme === 'dark';
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme']
		});

		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://calendly.com" />
	<link rel="dns-prefetch" href="https://calendly.com" />
</svelte:head>

<section class="content-shell">
	<div class="contact-header">
		<h1>Say hello</h1>
		<p class="contact-intro">
			Let's connect! Book a slot directly or reach out through any of these channels.
		</p>
	</div>

	<div class="contact-main-layout">
		<!-- Left: Calendly -->
		<div class="calendly-col">
			<iframe
				title="Schedule a call on Calendly"
				src={calendlyUrl}
				class="calendly-host"
				loading="eager"
				allow="clipboard-write"
			></iframe>
		</div>

		<!-- Right: social + direct contact stacked -->
		<div class="contact-sidebar">
			<!-- Connect with me -->
			<section class="contact-section">
				<h2 class="section-title">Connect with me</h2>
				<div class="contact-cards-grid">
					{#each SOCIAL_LINKS as link (link.id)}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							class="contact-card contact-row-card"
							aria-label={`Visit ${link.title}`}
						>
							<div class="card-icon">
								{@html link.svgIcon}
							</div>
							<div class="card-content">
								<h3 class="card-title">{link.title}</h3>
								<p class="card-description">{link.subtitle}</p>
							</div>
							<div class="card-arrow">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M7 17L17 7M17 7H7M17 7V17" />
								</svg>
							</div>
						</a>
					{/each}
				</div>
			</section>

			<!-- Get in touch -->
			<section class="contact-section">
				<h2 class="section-title">Get in touch</h2>
				<div class="contact-cards-grid">
					{#each DIRECT_CONTACT as contact (contact.id)}
					{@const Icon = contact.icon}
					<a
						href={contact.href}
						class="contact-card contact-row-card"
						aria-label={`Contact via ${contact.label}`}
					>
						<div class="card-icon">
							{#if contact.svgIcon}
								{@html contact.svgIcon}
							{:else}
								<Icon size={22} strokeWidth={1.8} />
							{/if}
						</div>
						<div class="card-content">
							<h3 class="card-title">{contact.label}</h3>
							<p class="card-value">{contact.value}</p>
						</div>
						<div class="card-arrow">
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M7 17L17 7M17 7H7M17 7V17" />
							</svg>
						</div>
					</a>
				{/each}
				</div>
			</section>
		</div>
	</div>
</section>
