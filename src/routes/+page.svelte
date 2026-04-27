<script>
	import { asset } from '$app/paths';
	import {
		FolderKanban,
		Smartphone,
		MonitorSmartphone,
		Server,
		Download
	} from 'lucide-svelte';

	/** @param {MouseEvent & { currentTarget: EventTarget & HTMLElement }} event */
	function setPointerGlow(event) {
		const button = event.currentTarget;
		const rect = button.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		button.style.setProperty('--x', `${x}px`);
		button.style.setProperty('--y', `${y}px`);
	}
</script>

<section class="hero-wrap">
	<div class="hero-copy">
		<h1>
			Hi, I'm <span>Afroze</span> Khan
		</h1>
		<p class="quote">
			"I turn complex ideas into clear, elegant products that feel fast, human,
			and built to last."
		</p>

		<div class="delivered-block" aria-label="Delivered metrics">
			<p class="delivered-title">DELIVERED</p>
			<div class="metrics-grid-two">
				<div class="metric-item">
					<div class="metric-copy">
						<span>Projects</span>
						<strong>9</strong>
					</div>
					<FolderKanban size={17} strokeWidth={2} aria-hidden="true" />
				</div>
				<div class="metric-item">
					<div class="metric-copy">
						<span>Mobile Apps</span>
						<strong>8</strong>
					</div>
					<Smartphone size={17} strokeWidth={2} aria-hidden="true" />
				</div>
				<div class="metric-item">
					<div class="metric-copy">
						<span>Web Apps</span>
						<strong>8</strong>
					</div>
					<MonitorSmartphone size={17} strokeWidth={2} aria-hidden="true" />
				</div>
				<div class="metric-item">
					<div class="metric-copy">
						<span>Services</span>
						<strong>10</strong>
					</div>
					<Server size={17} strokeWidth={2} aria-hidden="true" />
				</div>
			</div>
		</div>
	</div>

	<div class="hero-visual">
		<div class="visual-frame">
			<p class="intro-tag intro-tag-overlay">// code-deploy-impact</p>

			<div class="frame-box corner-top-right"></div>
			<div class="frame-box corner-bottom-right"></div>

			<div
				class="portrait-rect"
				role="img"
				aria-label="Profile image placeholder"
			>
				<img
					class="profile-photo"
					src={asset('/assets/img/profile-hero.png')}
					alt="Afroze Khan"
					loading="lazy"
				/>
			</div>

			<div class="right-rail" aria-hidden="true"></div>

			<a
				href={asset('/assets/resume.pdf')}
				class="resume-btn"
				onmousemove={setPointerGlow}
			>
				<Download size={16} strokeWidth={2} aria-hidden="true" />
				<span>Resume</span>
			</a>
		</div>
	</div>
</section>

<style>
	.hero-wrap {
		width: min(1120px, 95vw);
		margin: 0 auto;
		padding: clamp(1.5rem, 5vw, 4rem) 0 2rem;
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr;
		align-items: center;
	}

	.hero-copy h1 {
		margin: 0;
		font-family: 'Space Grotesk', 'JetBrains Mono', monospace;
		font-weight: 700;
		letter-spacing: -0.02em;
		font-size: clamp(2rem, 7vw, 4.6rem);
		line-height: 1.06;
		color: var(--text-primary);
	}

	.hero-copy h1 span {
		color: var(--accent-yellow);
	}

	.intro-tag {
		margin: 0 0 0.8rem;
		display: inline-block;
		padding: 0.38rem 0.72rem;
		border: 1px solid color-mix(in srgb, var(--accent-yellow) 45%, transparent);
		border-radius: 999px;
		font-size: 0.74rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-secondary);
	}

	.intro-tag-overlay {
		position: absolute;
		right: 0;
		top: 50%;
		z-index: 2;
		margin: 0;
		transform: translate(50%, -50%) rotate(90deg);
		transform-origin: center;
		background: color-mix(in srgb, var(--ui-surface) 92%, transparent);
		border-radius: 0.22rem;
		border: 1px solid
			color-mix(in srgb, var(--accent-yellow) 40%, var(--ui-border));
	}

	.quote {
		max-width: 44ch;
		margin: 1rem 0 0;
		font-size: clamp(0.95rem, 2.5vw, 1.08rem);
		line-height: 1.65;
		color: var(--text-secondary);
	}

	.delivered-block {
		margin-top: 1.15rem;
	}

	.delivered-title {
		margin: 0 0 0.6rem;
		font-size: 0.9rem;
		font-weight: 800;
		letter-spacing: 0.18em;
		color: var(--text-secondary);
	}

	.metrics-grid-two {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.58rem;
	}

	.metric-item {
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: start;
		gap: 0.36rem;
		padding: 0.62rem 0.74rem;
		border-radius: 0.6rem;
		color: var(--text-primary);
		background: color-mix(in srgb, var(--ui-surface) 88%, transparent);
		border: 1px solid
			color-mix(in srgb, var(--accent-yellow) 15%, var(--ui-border));
		box-shadow: 0 8px 20px
			color-mix(in srgb, var(--text-primary) 6%, transparent);
	}

	.metric-copy {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.18rem;
	}

	.metric-copy strong {
		font-weight: 700;
		font-size: 2.04rem;
		line-height: 1;
		color: var(--accent-yellow);
	}

	.metric-item :global(svg) {
		color: color-mix(in srgb, var(--text-primary) 72%, transparent);
		margin-top: 0.18rem;
	}

	@media (max-width: 420px) {
		.metrics-grid-two {
			gap: 0.46rem;
		}

		.metric-item {
			padding: 0.5rem 0.54rem;
		}

		.metric-copy strong {
			font-size: 1.44rem;
		}

		.metric-copy span {
			font-size: 0.66rem;
		}
	}

	.metric-copy span {
		font-size: 0.76rem;
		line-height: 1.1;
		white-space: nowrap;
		color: var(--text-secondary);
	}

	.hero-visual {
		position: relative;
		display: grid;
		justify-items: center;
	}

	.visual-frame {
		position: relative;
		width: min(74vw, 350px);
		height: min(86vw, 440px);
		max-height: 440px;
		display: grid;
		place-items: center;
		padding: 0.66rem 0.58rem 0.84rem;
		border-radius: 0.35rem;
		border: 2px solid
			color-mix(in srgb, var(--accent-yellow) 46%, var(--ui-border));
		background:
			linear-gradient(
				0deg,
				color-mix(in srgb, var(--ui-surface) 92%, transparent),
				color-mix(in srgb, var(--ui-surface) 92%, transparent)
			),
			repeating-linear-gradient(
				0deg,
				color-mix(in srgb, var(--accent-yellow) 6%, transparent) 0,
				color-mix(in srgb, var(--accent-yellow) 6%, transparent) 1px,
				transparent 1px,
				transparent 18px
			);
		box-shadow: 10px 10px 0
			color-mix(in srgb, var(--accent-yellow) 32%, transparent);
	}

	.portrait-rect {
		width: 74%;
		height: 75%;
		position: relative;
		z-index: 1;
		align-self: start;
		margin-top: 1.02rem;
		border-radius: 0.28rem;
		display: grid;
		place-items: center;
		overflow: hidden;
		background: linear-gradient(
			165deg,
			color-mix(in srgb, var(--ui-muted) 84%, var(--ui-surface) 16%),
			var(--ui-surface)
		);
		border: 2px solid
			color-mix(in srgb, var(--accent-yellow) 52%, var(--ui-border));
		box-shadow: 8px 8px 0
			color-mix(in srgb, var(--accent-yellow) 28%, transparent);
	}

	.profile-photo {
		position: relative;
		z-index: 1;
		width: 70%;
		height: 100%;
		object-fit: contain;
		object-position: center bottom;
	}

	.right-rail {
		position: absolute;
		right: 0;
		top: 14%;
		height: 72%;
		width: 1px;
		background: color-mix(in srgb, var(--accent-yellow) 85%, transparent);
	}

	.frame-box {
		position: absolute;
		width: 0.72rem;
		height: 0.72rem;
		background: var(--accent-yellow);
		border-radius: 0;
		box-shadow: none;
	}

	.corner-top-right {
		top: 14%;
		right: -0.32rem;
	}

	.corner-bottom-right {
		right: -0.32rem;
		bottom: 14%;
	}

	.resume-btn {
		--x: 50%;
		--y: 50%;
		position: absolute;
		z-index: 4;
		left: 50%;
		transform: translateX(-50%);
		bottom: 2%;
		display: inline-flex;
		min-width: 10.4rem;
		align-items: center;
		justify-content: center;
		gap: 0.42rem;
		padding: 0.62rem 0.84rem;
		border-radius: 0.22rem;
		text-decoration: none;
		color: var(--text-primary);
		font-weight: 700;
		font-size: 0.66rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: color-mix(in srgb, var(--ui-surface) 94%, transparent);
		border: none;
		isolation: isolate;
		overflow: hidden;
	}

	.resume-btn::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		padding: 2px;
		background: radial-gradient(
			130px circle at var(--x) var(--y),
			color-mix(in srgb, var(--accent-yellow) 98%, white 2%),
			transparent 68%
		);
		-webkit-mask:
			linear-gradient(#000 0 0) content-box,
			linear-gradient(#000 0 0);
		mask:
			linear-gradient(#000 0 0) content-box,
			linear-gradient(#000 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none;
		z-index: -1;
	}

	.resume-btn:focus-visible {
		outline: 2px solid var(--accent-yellow);
		outline-offset: 3px;
	}

	@media (min-width: 930px) {
		.hero-wrap {
			grid-template-columns: 1.1fr 0.9fr;
		}

		.hero-visual {
			justify-items: end;
			order: initial;
		}
	}

	@media (max-width: 700px) {
		.hero-copy {
			width: 100%;
		}

		.hero-copy h1 {
			margin-top: 0.9rem;
		}

		.hero-visual {
			order: -1;
		}

		.visual-frame {
			width: min(78vw, 302px);
			height: min(88vw, 372px);
			padding: 0.62rem 0.54rem 0.74rem;
		}

		.portrait-rect {
			width: 78%;
			height: 75%;
			margin-top: 0.8rem;
		}

		.hero-copy > :is(h1, .quote, .delivered-block) {
			max-width: 22rem;
			margin-left: auto;
			margin-right: auto;
			padding-left: 0;
		}

		.intro-tag-overlay {
			right: 0;
			font-size: 0.66rem;
			padding: 0.28rem 0.58rem;
		}

		.delivered-block {
			width: 100%;
			padding-left: 0;
			margin-top: 1.8rem;
		}

		.delivered-title {
			text-align: left;
			max-width: none;
			margin: 0 0 0.6rem;
		}

		.metrics-grid-two {
			max-width: none;
			margin: 0;
		}

		.metric-item {
			padding: 0.42rem 0.56rem;
		}

		.metric-copy strong {
			font-size: 1.3rem;
		}

		.metric-copy span {
			font-size: 0.72rem;
		}

		.resume-btn {
			left: 50%;
			transform: translateX(-50%);
			bottom: 2.2%;
			min-width: 8.8rem;
			padding: 0.52rem 0.7rem;
			font-size: 0.62rem;
		}
	}
</style>
