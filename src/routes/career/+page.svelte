<script>
	import './styles.css';
	import {
		BriefcaseBusiness,
		CalendarRange,
		MapPin,
		Sparkles
	} from 'lucide-svelte';
	import { EXPERIENCES, MONTH_LABELS } from './data.js';

	/** @type {(period: string) => Date | null} */
	const parseStartDate = (period) => {
		const start = period.split('~')[0]?.trim();
		if (!start) return null;

		const [monthLabel, yearLabel] = start.split(/\s+/);
		const month = MONTH_LABELS.indexOf(monthLabel);
		const year = Number.parseInt(yearLabel, 10);

		if (!Number.isFinite(year) || month < 0) return null;

		return new Date(year, month, 1);
	};

	/** @type {() => string} */
	const getTotalExperienceLabel = () => {
		const startDates = EXPERIENCES.map((item) => parseStartDate(item.period)).filter(
			(date) => date instanceof Date
		);

		if (!startDates.length) return 'Total experience overview unavailable';

		const earliestStart = new Date(
			Math.min(...startDates.map((date) => date.getTime()))
		);
		const today = new Date();

		let totalMonths =
			(today.getFullYear() - earliestStart.getFullYear()) * 12 +
			(today.getMonth() - earliestStart.getMonth());

		if (today.getDate() < earliestStart.getDate()) totalMonths -= 1;
		if (totalMonths < 0) totalMonths = 0;

		const years = Math.floor(totalMonths / 12);
		const months = totalMonths % 12;

		if (months === 0) {
			return `Total experience: ${years} year${years === 1 ? '' : 's'}`;
		}

		return `Total experience: ${years} year${years === 1 ? '' : 's'} ${months} month${months === 1 ? '' : 's'}`;
	};

	let activeIdx = $state(0);
	let displayIdx = $state(0);
	let fading = $state(false);
	let totalExperienceLabel = $derived(getTotalExperienceLabel());

	$effect(() => {
		const next = activeIdx;
		fading = true;
		const timer = setTimeout(() => {
			displayIdx = next;
			fading = false;
		}, 160);

		return () => clearTimeout(timer);
	});

	/** @type {(index: number) => void} */
	const selectExperience = (index) => {
		activeIdx = index;
	};

	let activeExperience = $derived(EXPERIENCES[displayIdx]);
</script>

<section class="career-shell">
	<div class="career-wrap">
		<p class="eyebrow">{totalExperienceLabel}</p>
		<h1 class="page-title">Career Experience</h1>
		<p class="page-intro">
			Over 8 years of shipped systems — mobile apps, web platforms, and backend
			services across healthcare, sustainability, commerce, and government.
		</p>

		<div class="career-layout">
			<div class="detail-col" aria-live="polite">
				<article class="detail-card">
					<div class="detail-content" class:fading>
						<header class="detail-head">
							<div class="detail-brand">
								{#if activeExperience.logo}
									<img
										class="detail-logo"
										src={activeExperience.logo}
										alt={activeExperience.logoAlt}
									/>
								{:else}
									<div class="detail-mark" aria-hidden="true">
										{activeExperience.brandMark}
									</div>
								{/if}
								<div>
									<p class="detail-company">{activeExperience.company}</p>
									<h2 class="detail-title">{activeExperience.role}</h2>
								</div>
							</div>

							<div class="detail-badge-wrap">
								<span class="detail-badge">{activeExperience.tag}</span>
							</div>
						</header>

						<div class="detail-meta-grid">
							<div class="meta-chip">
								<CalendarRange size={15} strokeWidth={1.7} />
								<span>{activeExperience.period}</span>
							</div>
							<div class="meta-chip">
								<BriefcaseBusiness size={15} strokeWidth={1.7} />
								<span>{activeExperience.employment} · {activeExperience.duration}</span>
							</div>
							<div class="meta-chip wide">
								<MapPin size={15} strokeWidth={1.7} />
								<span>{activeExperience.location}</span>
							</div>
						</div>

						<p class="detail-summary">{activeExperience.summary}</p>

						<div class="section-block">
							<p class="section-kicker">What stood out</p>
							<ul class="detail-list">
								{#each activeExperience.highlights as point (point)}
									<li>{point}</li>
								{/each}
							</ul>
						</div>

						<div class="section-block">
							<p class="section-kicker">Tools and focus areas</p>
							<div class="skill-row">
								{#each activeExperience.skills as skill (skill)}
									<span class="skill-pill">{skill}</span>
								{/each}
							</div>
						</div>

						<div class="section-block">
							<p class="section-kicker">Stack</p>
							<div class="skill-row">
								{#each activeExperience.tools as tool (tool.name)}
									<span class="tool-tag" style={`--tc: ${tool.color}`}>{tool.name}</span>
								{/each}
							</div>
						</div>
					</div>
				</article>
			</div>

			<div
				class="experience-board"
				role="group"
				aria-label="Career experience list, newest first"
			>
				{#each EXPERIENCES as experience, index (experience.id)}
					{@const active = index === activeIdx}
					<div class="experience-item">
						<button
							type="button"
							class="experience-card"
							class:active
							onclick={() => selectExperience(index)}
							aria-pressed={active}
							aria-label={`${experience.role} at ${experience.company}`}
						>
							<div class="card-copy">
								<div class="card-topline">
									{#if experience.logo}
										<img
											class="card-logo"
											src={experience.logo}
											alt={experience.logoAlt}
										/>
									{:else}
										<div class="card-mark" aria-hidden="true">
											{experience.brandMark}
										</div>
									{/if}
									<div class="card-title-group">
										<span class="card-title">{experience.role}</span>
										<span class="card-company">{experience.company}</span>
									</div>
								</div>
								<span class="card-period">{experience.period}</span>
							</div>
							<span class="card-accent" aria-hidden="true">
								<Sparkles size={16} strokeWidth={1.7} />
							</span>
						</button>

						{#if index < EXPERIENCES.length - 1}
							<div class="flow-connector" aria-hidden="true">
								<div class="connector-line" class:lit={index < activeIdx}></div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
