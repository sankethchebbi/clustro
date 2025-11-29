import { Service, BlogPost, NavItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Methodology', href: '#approach' },
  { label: 'Intel', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Digital Domination',
    description: 'We do not just "market". We invade feed spaces with precision-targeted campaigns that convert eyeballs into revenue. SEO, SEM, and social strategies that cut through the noise.',
    icon: 'Megaphone',
    tags: ['Growth Hacking', 'PPC', 'SEO']
  },
  {
    id: 's2',
    title: 'Influencer Ops',
    description: 'Orchestrating the crowd. We leverage voices that matter to amplify your brand. Real connections, measurable ROI, no vanity metrics.',
    icon: 'Users',
    tags: ['Talent Mgmt', 'Campaigns', 'Viral']
  },
  {
    id: 's3',
    title: 'ERPNext Engines',
    description: 'Custom ERPNext implementations that actually work. We build bespoke modules to automate your boredom so you can focus on the cash flow.',
    icon: 'Cpu',
    tags: ['Python', 'Automation', 'Custom Apps']
  },
  {
    id: 's4',
    title: 'Data Architecture',
    description: 'Your data is messy. We restructure, clean, and visualize it. Turn raw numbers into actionable intelligence for executive decision-making.',
    icon: 'Database',
    tags: ['Analytics', 'Warehousing', 'BI']
  }
];
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b4',
    title: 'ERPNext: The Operating System Modern Companies Deserve',
    excerpt: 'Most businesses don’t need a Frankenstein stack of tools. They need one system that scales, automates, and eliminates chaos. ERPNext is that system — and we make it even better.',
    date: 'DEC 01, 2025',
    readTime: '6 MIN',
    category: 'TECH',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    content: [
      "Most companies bleed efficiency because they run their operations on a patchwork of apps that never truly talk to each other. ERPNext solves that problem with one unified platform covering accounting, sales, HR, manufacturing, inventory, and CRM — all in a single, cohesive system.",
      "What sets ERPNext apart is its open-source DNA. No vendor lock-ins. No overpriced licenses. No ‘enterprise upsells’. Just a powerful, flexible architecture that can be molded into exactly what your business needs.",
      "Where most businesses fail is in the implementation. ERPNext is powerful — but only when tailored correctly. That’s where we step in. Our ERPNext Engine service builds custom modules, automates repetitive workflows, and integrates your stack so everything just works.",
      "From migrating legacy data to building Python-powered custom apps to optimizing backend logic for speed, we turn ERPNext into a revenue-generating machine. If you’re tired of tools that complicate instead of simplify, ERPNext — powered by our engineering team — is the upgrade your business deserves."
    ]
  },
  {
    id: 'b5',
    title: 'Data Engineering That Makes Your Website Faster, Smarter, and Profitable',
    excerpt: 'Slow websites kill conversions. Bad data kills decisions. Our engineering stack fixes both — permanently.',
    date: 'DEC 03, 2025',
    readTime: '5 MIN',
    category: 'TECH',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    content: [
      "Companies today sit on mountains of raw data but operate like it doesn’t exist. Messy schemas, duplicated fields, slow queries, and analytics dashboards that no one trusts — it's all revenue leakage.",
      "Our Data Architecture team restructures your entire data ecosystem. We clean, normalize, warehouse, and pipeline your information so it flows where it needs to: reporting tools, ERP systems, marketing platforms, and executive dashboards.",
      "But we don’t stop at the backend. We build performance-optimized websites that load fast, scale under pressure, and deliver clean data back into your systems. Whether you’re running a storefront, SaaS platform, or content site, your database and frontend must move as one.",
      "From query optimization to warehouse design to caching layers that cut latency by up to 70%, we engineer systems that feel instant for your end client — and valuable for your business. Good data isn’t a luxury. It’s the backbone of growth."
    ]
  },
  {
    id: 'b6',
    title: 'Influencer Marketing Reinvented: Inside the Clustro Index',
    excerpt: 'Influencers are not billboards. They’re ecosystems. Our proprietary Clustro Index uses AI to find creators who actually move revenue — not just rack up likes.',
    date: 'DEC 05, 2025',
    readTime: '7 MIN',
    category: 'MARKETING',
    imageUrl: 'https://picsum.photos/800/600?random=13',
    content: [
      "Most influencer campaigns fail because brands choose creators based on follower counts instead of real impact. That’s why we built the Clustro Index — our AI-powered scoring system that evaluates influencers on what truly predicts conversions.",
      "The Index produces a single score from 0 to 100 by analyzing five components: engagement rate (30%), audience relevance (25%), authenticity score (20%), performance history (15%), and budget efficiency (10%). It's a complete snapshot of whether a creator is actually worth your marketing dollars.",
      "Using AI models, we dig into social data: demographics, sentiment, topic alignment, past campaign ROI, follower quality, posting patterns, and conversion behavior. We filter out inflated influencers and elevate creators who consistently deliver.",
      "Our Influencer Ops team takes the Index and turns it into results. We handle strategy, casting, campaign architecture, creator negotiations, production management, content calendars, distribution, and performance reporting. When brands work with us, they aren’t guessing — they’re executing with precision powered by data.",
      "This is why our campaigns outperform industry averages. We don’t chase trends. We engineer outcomes. And the Clustro Index is the backbone of that success."
    ]
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Harshvardhan A',
    role: 'CMO',
    company: 'Alt Media Group',
    quote: "They didn't just build a website; they built a revenue engine. Brutally effective."
  },
  {
    id: 't2',
    author: 'Pratikh Kalpen',
    role: 'Founder',
    company: 'Sunguard Supply',
    quote: "Our ERP was a disaster. Clustro came in, tore it down, and rebuilt it. Now we save 20 hours a week."
  }
];

export const MARQUEE_TEXT = "GROWTH // STRATEGY // CHAOS MANAGEMENT // DIGITAL WARFARE // ERP SYSTEMS // DATA INTELLIGENCE // ";