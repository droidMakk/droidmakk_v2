<script>
	import { asset } from '$app/paths';
	import './styles.css';
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
					<FolderKanban size={22} strokeWidth={2} aria-hidden="true" />
				</div>
				<div class="metric-item">
					<div class="metric-copy">
						<span>Mobile Apps</span>
						<strong>8</strong>
					</div>
					<Smartphone size={22} strokeWidth={2} aria-hidden="true" />
				</div>
				<div class="metric-item">
					<div class="metric-copy">
						<span>Web Apps</span>
						<strong>8</strong>
					</div>
					<MonitorSmartphone size={22} strokeWidth={2} aria-hidden="true" />
				</div>
				<div class="metric-item">
					<div class="metric-copy">
						<span>Services</span>
						<strong>10</strong>
					</div>
					<Server size={22} strokeWidth={2} aria-hidden="true" />
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
