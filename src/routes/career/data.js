export const EXPERIENCES = [
	{
		id: 0,
		role: 'Principal Front-End Developer',
		company: 'Sleepiz AG',
		period: 'Apr 2024 ~ Present',
		duration: '2 yrs',
		location: 'India · Remote',
		employment: 'Full-time',
		tag: 'Frontend Platform Leadership',
		summary:
			'Led cross-platform modernization as Principal Front-End Developer, improving reliability and delivery velocity across healthcare product surfaces and connected-device experiences.',
		highlights: [
			'Authored the migration from React to Next.js, improving accessibility and reducing web app load time to 3-5 seconds.',
			'Built a centralized logging node to collect telemetry from remote devices and internal application services.',
			'Developed a real-time operational dashboard using Server-Sent Events (SSE).',
			'Converted the web application into a Progressive Web App (PWA) with integrated notifications.',
			'Introduced optimized engineering workflows with GitHub Copilot to accelerate development throughput.',
			'Automated GitLab CI pipelines for vulnerability analysis, releases, and test report generation.'
		],
		skills: [
			'Architecture Modernization',
			'Real-time Systems',
			'Delivery Acceleration'
		],
		tools: [
			{ name: 'MQTT', color: '#8B5CF6' },
			{ name: 'SSE', color: '#F59E0B' },
			{ name: 'React Native', color: '#61DAFB' },
			{ name: 'Next.js', color: '#9ca3af' },
			{ name: 'Vitest', color: '#6E9F18' },
			{ name: 'GitLab CI', color: '#FC6D26' }
		],
		logo: '/assets/img/companies/sleepiz.png',
		logoAlt: 'Sleepiz icon',
		brandMark: 'SL'
	},
	{
		id: 1,
		role: 'Lead - Mobile Developer',
		company: 'Sleepiz AG',
		period: 'Aug 2022 ~ Apr 2024',
		duration: '1 yr 9 mos',
		location: 'India · Remote',
		employment: 'Full-time',
		tag: 'Mobile Product Leadership',
		summary:
			'Led customer-facing mobile delivery for sleep-health products while shaping internal tablet workflows used around device setup, patient onboarding, and operational care paths, with reliability and field performance treated as product requirements rather than afterthoughts.',
		highlights: [
			'Owned the Android and tablet experience across customer workflows and internal healthcare operations tied to connected-device usage.',
			'Improved onboarding flows where device data and SpO2 monitoring had to feel dependable, understandable, and responsive in real use.',
			'Balanced delivery speed with long-lived maintainability so the mobile stack stayed stable across repeated production releases.',
			'Delivered and handed over a React Native mobile app for an external client to collect wearable data over Bluetooth.'
		],
		skills: ['Mobile Architecture', 'Onboarding Flows', 'Connected Devices'],
		tools: [
			{ name: 'React Native', color: '#61DAFB' },
			{ name: 'AWS', color: '#FF9900' },
			{ name: 'MQTT', color: '#8B5CF6' },
			{ name: 'GitLab CI/CD', color: '#FC6D26' }
		],
		logo: '/assets/img/companies/sleepiz.png',
		logoAlt: 'Sleepiz icon',
		brandMark: 'SL'
	},
	{
		id: 2,
		role: 'Senior FullStack Developer',
		company: 'Sleepiz AG',
		period: 'Sep 2021 ~ Aug 2022',
		duration: '1 yr',
		location: 'Remote',
		employment: 'Full-time',
		tag: 'Platform Architecture',
		summary:
			'Worked across core web and backend product surfaces as a senior full-stack engineer, helping turn a growing healthcare platform into a faster, more observable, and more scalable system for both customers and internal teams.',
		highlights: [
			'Built web systems for sleep analytics, device data visualization, and real-time monitoring dashboards used in production settings.',
			'Migrated the frontend architecture from React to Next.js, unlocking a major step up in responsiveness, accessibility, and overall performance.',
			'Added stronger engineering foundations through MQTT plus AWS logging pipelines and GitLab CI/CD with automated testing and vulnerability scanning.'
		],
		skills: ['Next.js Migration', 'Observability', 'CI/CD'],
		tools: [
			{ name: 'React', color: '#61DAFB' },
			{ name: 'Next.js', color: '#9ca3af' },
			{ name: 'Node.js', color: '#5FA04E' },
			{ name: 'MQTT', color: '#8B5CF6' },
			{ name: 'AWS', color: '#FF9900' },
			{ name: 'GitLab CI/CD', color: '#FC6D26' }
		],
		logo: '/assets/img/companies/sleepiz.png',
		logoAlt: 'Sleepiz icon',
		brandMark: 'SL'
	},
	{
		id: 3,
		role: 'Freelancer',
		company: 'DROIDMAKK',
		period: 'Oct 2019 ~ Present',
		duration: '6 yrs 7 mos',
		location: 'Greater Chennai Area',
		employment: 'Freelance',
		tag: 'Independent Product Delivery',
		summary:
			'Built end-to-end systems across sustainability, operations, commerce, and marketplace products, usually taking work from fuzzy business requirements through architecture, delivery, and production handover without depending on a large team around me.',
		highlights: [
			'Built a live carbon tracking and land-management platform for plantation mapping, land measurement, and reporting that now supports 10,000-plus plantations and replaces spreadsheet-heavy workflows.',
			'Designed and delivered platforms spanning marketplace discovery, social engagement, HRMS complaint handling, and direct-to-consumer mobile commerce.',
			'Worked directly with stakeholders to turn ambiguous product ideas into practical systems, admin tooling, and production-ready delivery plans.'
		],
		skills: ['System Design', 'Stakeholder Collaboration', 'Full-stack Delivery'],
		tools: [
			{ name: 'React', color: '#61DAFB' },
			{ name: 'React Native', color: '#61DAFB' },
			{ name: 'Node.js', color: '#5FA04E' },
			{ name: 'MongoDB', color: '#47A248' },
			{ name: 'PostgreSQL', color: '#4169E1' },
			{ name: 'Google Maps API', color: '#4285F4' },
			{ name: 'AWS', color: '#FF9900' }
		],
		brandMark: 'DM'
	},
	{
		id: 4,
		role: 'Full Stack Developer (Remote | Sleepiz)',
		company: 'Crewscale',
		period: 'Nov 2020 ~ Sep 2021',
		duration: '11 mos',
		location: 'Chennai, Tamil Nadu, India',
		employment: 'Full-time',
		tag: 'Embedded Product Team',
		summary:
			'Worked through Crewscale as an embedded engineer on the Sleepiz product team, contributing across web, mobile, and service layers in a remote setup that required tight coordination and practical ownership.',
		highlights: [
			'Built features across Node.js, React, and React Native while supporting the product groundwork that later expanded inside the direct Sleepiz roles.',
			'Contributed through PR reviews, release work, and close day-to-day collaboration instead of operating as a detached contractor.',
			'Helped keep product feedback loops fast across engineering and delivery while the remote team scaled execution.'
		],
		skills: ['Cross-functional Delivery', 'React Native', 'Product Iteration'],
		tools: [
			{ name: 'Node.js', color: '#5FA04E' },
			{ name: 'React', color: '#61DAFB' },
			{ name: 'React Native', color: '#61DAFB' }
		],
		logo: '/assets/img/companies/crewscale.svg',
		logoAlt: 'Crewscale logo',
		brandMark: 'CS'
	},
	{
		id: 5,
		role: 'Full Stack Developer',
		company: "Crayon'd",
		period: 'Mar 2019 ~ Nov 2019',
		duration: '9 mos',
		location: 'Greater Chennai Area',
		employment: 'Full-time',
		tag: 'Structured Frontend Delivery',
		summary:
			'Built structured frontend and full-stack product experiences for both public-sector and commerce use cases, with a strong emphasis on usability, maintainable architecture, and cleaner component systems.',
		highlights: [
			'Worked on a government healthcare platform for Tamil Nadu, improving form workflows and accessibility so core tasks became measurably faster and easier to complete.',
			'Led a small delivery group that included experienced and junior developers while keeping implementation quality and pace aligned.',
			'Built e-commerce product surfaces with atomic design principles that improved reuse, consistency, and long-term maintainability.'
		],
		skills: ['Accessibility', 'Atomic Design', 'Team Guidance'],
		tools: [
			{ name: 'React', color: '#61DAFB' },
			{ name: 'Node.js', color: '#5FA04E' }
		],
		logo: '/assets/img/companies/crayond.jpg',
		logoAlt: "Crayon'd logo",
		brandMark: 'CR'
	},
	{
		id: 6,
		role: 'Full Stack Developer',
		company: 'Paripoorna Software Solution Service Private Limited',
		period: 'Sep 2017 ~ Mar 2019',
		duration: '1 yr 7 mos',
		location: 'Greater Chennai Area',
		employment: 'Full-time',
		tag: 'Early Foundation',
		summary:
			'Built the early foundation of a full-stack career through real product delivery across mobile, backend, cloud, and media workflows, learning how complete systems are assembled and shipped end to end.',
		highlights: [
			'Built an OTT platform across React Native mobile delivery and backend flows that supported media upload and processing.',
			'Worked with Azure-backed media pipelines to turn uploaded content into streamable assets for end users.',
			'Built the cloud and product-delivery foundation that later supported broader consulting and system-design work.'
		],
		skills: ['Azure Media Workflows', 'React Native', 'Full-stack Foundations'],
		tools: [
			{ name: 'React Native', color: '#61DAFB' },
			{ name: 'React', color: '#61DAFB' },
			{ name: 'Node.js', color: '#5FA04E' },
			{ name: 'Azure', color: '#0078D4' }
		],
		brandMark: 'PS'
	}
];

export const MONTH_LABELS = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];
