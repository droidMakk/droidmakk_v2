<script>
	import './styles.css';
	import { onMount } from 'svelte';
	import { STEPS } from './data.js';

	let activeIdx = $state(0);

	// ── Detail panel crossfade (no remount) ──────────────
	let displayIdx = $state(0);
	let fading = $state(false);

	$effect(() => {
		const next = activeIdx;
		fading = true;
		const t = setTimeout(() => {
			displayIdx = next;
			fading = false;
		}, 160);
		return () => clearTimeout(t);
	});

	/** Reactive icon reference driven by displayIdx, not activeIdx */
	let DisplayIcon = $derived(STEPS[displayIdx].icon);

	// ── Auto-cycle ───────────────────────────────────────
	/** @type {ReturnType<typeof setInterval> | null} */
	let timer = null;
	/** @type {ReturnType<typeof setTimeout> | null} */
	let resumeTimer = null;

	/** @param {number} i */
	function selectStep(i) {
		activeIdx = i;
		if (timer) { clearInterval(timer); timer = null; }
		if (resumeTimer) { clearTimeout(resumeTimer); resumeTimer = null; }
		resumeTimer = setTimeout(() => {
			resumeTimer = null;
			startCycle();
		}, 6000);
	}

	function startCycle() {
		timer = setInterval(() => {
			activeIdx = (activeIdx + 1) % STEPS.length;
		}, 3500);
	}

	onMount(() => {
		startCycle();
		return () => {
			if (timer) clearInterval(timer);
			if (resumeTimer) clearTimeout(resumeTimer);
		};
	});
</script>

<section class="build-shell">
	<div class="build-wrap">
		<h1 class="page-title">How it's Shipped.</h1>

		<div class="build-layout">

			<!-- ── Detail card (card shell persists, content crossfades) ── -->
			<div class="detail-col" aria-live="polite">
				<article class="detail-card">
					<div class="detail-content" class:fading>
						<header class="dh">
							<span class="dh-num">0{STEPS[displayIdx].num}</span>
							<span class="dh-badge">{STEPS[displayIdx].tag}</span>
							<div class="dh-icon" aria-hidden="true">
								<DisplayIcon size={26} strokeWidth={1.3} />
							</div>
						</header>
						<h2 class="dt">{STEPS[displayIdx].title}</h2>
						<p class="db">{STEPS[displayIdx].body}</p>
						<nav class="dots" aria-label="Navigate steps">
							<div class="dots-track">
								{#each STEPS as s, i}
									<button
										class="dot"
										onclick={() => selectStep(i)}
										aria-label="Step {s.num}: {s.title}"
										aria-current={i === activeIdx ? 'step' : undefined}
									></button>
								{/each}
								<!-- Single sliding pill — no per-dot width animation -->
								<div class="dot-pill" style="--idx:{activeIdx}" aria-hidden="true"></div>
							</div>
						</nav>
					</div>
				</article>
			</div>

			<!-- ── Rectangular linear flow board (1 → 6) ──── -->
			<div
				class="flow-board"
				role="group"
				aria-label="Software shipping process — select a step to learn more"
			>
				{#each STEPS as step, i}
					{@const active = i === activeIdx}
					{@const CardIcon = step.icon}
					<div class="flow-item">
						<button
							class="step-card"
							class:active
							onclick={() => selectStep(i)}
							aria-label="Step {step.num}: {step.title}"
							aria-pressed={active}
						>
							<span class="card-num">0{step.num}</span>
							<div class="card-body">
								<span class="card-title">{step.shortTitle}</span>
							</div>
							<span class="card-icon" aria-hidden="true">
								<CardIcon size={18} strokeWidth={1.5} />
							</span>
						</button>

						{#if i < STEPS.length - 1}
							<div class="flow-connector" aria-hidden="true">
								<div class="connector-line" class:lit={i < activeIdx || (activeIdx === 0 && i === STEPS.length - 1)}></div>
							</div>
						{/if}
					</div>
				{/each}
			</div>

		</div>

	</div>
</section>
