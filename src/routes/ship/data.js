import { Search, Layers, GitBranch, Database, Activity, ShieldCheck } from 'lucide-svelte';

export const STEPS = [
	{
		num: 1,
		title: 'Understand the Problem',
		shortTitle: 'Understand',
		tag: 'Discovery',
		body: 'Every engagement starts with a deep dive into the business — not the features. We work directly with founders and product owners to understand the core idea, the users it serves, and the outcomes that actually matter.',
		icon: Search
	},
	{
		num: 2,
		title: 'Preview Before You Commit',
		shortTitle: 'Preview',
		tag: 'Design',
		body: 'Before any development begins, we put together wireframes, workflow diagrams, and a system overview so you can see how your product will work — and align on it — before a single line of code is written.',
		icon: Layers
	},
	{
		num: 3,
		title: 'Plan With Full Transparency',
		shortTitle: 'Plan Clearly',
		tag: 'Planning',
		body: "We deliver a clear roadmap with timelines, effort estimates, and a technical architecture overview. You know what's being built, how it's being built, and roughly when — at every stage.",
		icon: GitBranch
	},
	{
		num: 4,
		title: 'Build on Solid Foundations',
		shortTitle: 'Foundation',
		tag: 'Architecture',
		body: 'We set up the project structure the right way from day one — database design, frontend, backend API, and development guidelines that keep the codebase clean and the team moving fast.',
		icon: Database
	},
	{
		num: 5,
		title: 'Stay Aligned Through the Build',
		shortTitle: 'Stay Aligned',
		tag: 'Execution',
		body: "Progress is tracked on a shared board updated regularly. Bi-weekly syncs keep you in the loop on what's done, what's next, and if anything needs a decision from your side. No surprises.",
		icon: Activity
	},
	{
		num: 6,
		title: 'Deliver, Test, and Stand Behind the Work',
		shortTitle: 'Deliver + Test',
		tag: 'Delivery',
		body: "We don't hand over and disappear. Delivery includes testing, and post-launch support is available with defined terms so you know exactly what's covered.",
		icon: ShieldCheck
	}
];
