<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import './styles.css';
	import { WORKS } from './data.js';

	const RESUME_AFTER_IDLE_MS = 7000;
	const CYCLE_EVERY_MS = 4200;

	let activeIdx = $state(0);

	let railEl: HTMLElement | null = $state(null);
	let cardEls: HTMLElement[] = [];
	let syncRaf: number | null = null;

	let cycleTimer: ReturnType<typeof setInterval> | null = null;
	let resumeTimer: ReturnType<typeof setTimeout> | null = null;
	let hoveringRail = false;
	let programmaticScroll = false;
	let observerLockUntil = 0;

	let activeWork = $derived(WORKS[activeIdx]);

	function clearCycle() {
		if (cycleTimer) {
			clearInterval(cycleTimer);
			cycleTimer = null;
		}
	}

	function clearResume() {
		if (resumeTimer) {
			clearTimeout(resumeTimer);
			resumeTimer = null;
		}
	}

	function scheduleResume() {
		clearResume();
		resumeTimer = setTimeout(() => {
			resumeTimer = null;
			startCycle();
		}, RESUME_AFTER_IDLE_MS);
	}

	function pauseForInteraction() {
		clearCycle();
		scheduleResume();
	}

	function setActiveIndex(i: number, opts: { scrollCard?: boolean } = {}) {
		const next = Math.max(0, Math.min(i, WORKS.length - 1));
		activeIdx = next;

		if (opts.scrollCard && cardEls[next]) {
			programmaticScroll = true;
			cardEls[next].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
			setTimeout(() => {
				programmaticScroll = false;
			}, 220);
		}
	}

	function selectProject(i: number) {
		observerLockUntil = Date.now() + 900;
		pauseForInteraction();
		setActiveIndex(i, { scrollCard: true });
	}

	function startCycle() {
		if (hoveringRail || WORKS.length < 2) return;
		clearCycle();
		cycleTimer = setInterval(() => {
			const next = (activeIdx + 1) % WORKS.length;
			setActiveIndex(next, { scrollCard: true });
		}, CYCLE_EVERY_MS);
	}

	function syncFromRailPosition() {
		syncRaf = null;
		if (!railEl || programmaticScroll || Date.now() < observerLockUntil) return;

		const isHorizontal = railEl.scrollWidth > railEl.clientWidth + 4;
		const railRect = railEl.getBoundingClientRect();
		const railCenter = isHorizontal
			? railRect.left + railRect.width / 2
			: railRect.top + railRect.height / 2;

		if (!isHorizontal && railEl.scrollTop <= 8) {
			setActiveIndex(0);
			return;
		}
		if (!isHorizontal && railEl.scrollTop + railEl.clientHeight >= railEl.scrollHeight - 8) {
			setActiveIndex(WORKS.length - 1);
			return;
		}
		if (isHorizontal && railEl.scrollLeft <= 8) {
			setActiveIndex(0);
			return;
		}
		if (isHorizontal && railEl.scrollLeft + railEl.clientWidth >= railEl.scrollWidth - 8) {
			setActiveIndex(WORKS.length - 1);
			return;
		}

		let closestIdx = activeIdx;
		let closestDistance = Number.POSITIVE_INFINITY;

		for (const node of cardEls) {
			const idx = Number(node.dataset.idx);
			if (!Number.isFinite(idx)) continue;

			const rect = node.getBoundingClientRect();
			const cardCenter = isHorizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
			const distance = Math.abs(cardCenter - railCenter);

			if (distance < closestDistance) {
				closestDistance = distance;
				closestIdx = idx;
			}
		}

		if (closestIdx !== activeIdx) {
			setActiveIndex(closestIdx);
		}
	}

	function requestRailSync() {
		if (syncRaf !== null) return;
		syncRaf = requestAnimationFrame(syncFromRailPosition);
	}

	function handleRailScroll() {
		if (programmaticScroll) return;
		pauseForInteraction();
		requestRailSync();
	}

	onMount(() => {
		if (!railEl) return;
		cardEls = Array.from(railEl.querySelectorAll('[data-work-card]'));
		requestRailSync();
		scheduleResume();

		return () => {
			clearCycle();
			clearResume();
			if (syncRaf !== null) {
				cancelAnimationFrame(syncRaf);
				syncRaf = null;
			}
		};
	});
</script>

<section class="works-shell">
	<div class="works-wrap">
		<header class="works-head">
			<h1>Work Signals.</h1>
			<p>
				A curated selection of shipped projects.
			</p>
		</header>

		<div class="works-layout">
			<aside
				class="works-rail"
				bind:this={railEl}
				onscroll={handleRailScroll}
				onpointerenter={() => {
					hoveringRail = true;
					clearCycle();
					clearResume();
				}}
				onpointerleave={() => {
					hoveringRail = false;
					scheduleResume();
				}}
				aria-label="Project showcase list"
			>
				{#each WORKS as work, i}
					<button
						class="project-card"
						class:active={i === activeIdx}
						onclick={() => selectProject(i)}
						aria-current={i === activeIdx ? 'true' : undefined}
						data-work-card
						data-idx={i}
					>
						<span class="project-idx">0{i + 1}</span>
						<div class="project-copy">
							<p class="project-tag">{work.tag}</p>
							<h2>{work.title}</h2>
							<p>{work.brief}</p>
						</div>
					</button>
				{/each}
			</aside>

			<article class="signal-board" aria-live="polite">
				<div class="signal-content">
					{#key activeIdx}
						<div class="signal-panel" transition:fade={{ duration: 170 }}>
							<header class="signal-head">
								<p class="signal-label">Project title</p>
								<h2>{activeWork.title}</h2>
								<p class="signal-brief">{activeWork.brief}</p>
							</header>

<section class="signal-chain" aria-label="Problem and solution">
							<div class="chain-node problem-node">
								<p class="chain-title">Problem</p>
								<p>{activeWork.problem}</p>
							</div>
							<div class="chain-node solution-node">
								<p class="chain-title">Solution</p>
									<p>{activeWork.solution}</p>
								</div>
							</section>

							<section class="impact-zone" aria-label="Impact summary">
								<div class="impact-header">
								<p class="signal-label">Impact</p>
									<p>{activeWork.impact}</p>
								</div>
								<div class="impact-stats">
									{#each activeWork.impactStats as stat}
										<div class="impact-chip">
											<span>{stat.label}</span>
											<strong>{stat.value}</strong>
										</div>
									{/each}
								</div>
							</section>

							<footer class="signal-meta">
								<span>{activeWork.timeline}</span>
								{#each activeWork.stack as item}
									<span>{item}</span>
								{/each}
							</footer>
						</div>
					{/key}
				</div>
			</article>
		</div>
	</div>
</section>
