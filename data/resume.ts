export const personal = {
  name: "Muhammad Usama Akram",
  title: "Senior Fullstack Developer",
  experienceYears: 7,
  tagline:
    "I build scalable, production-grade web applications — from fintech platforms and real-time systems to enterprise SaaS products.",
  email: "m.u.akram1997@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-usama-akram",
  github: "https://github.com/usama-akram",
  location: "Lahore, Pakistan",
};

export const skills: Record<string, string[]> = {
  Backend: [
    "Node.js",
    "NestJS",
    "Express.js",
    "TypeScript",
    "Ruby on Rails",
    "Microservices",
    "Redis",
    "Socket.io",
    "JWT",
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "DynamoDB",
    "Sequelize",
    "TypeORM",
    "Mongoose",
  ],
  Frontend: ["React.js", "Vue.js", "JavaScript", "TypeScript"],
  Cloud: ["AWS (EC2, S3, RDS)", "Azure", "Vercel", "Netlify", "Git"],
  Payments: ["Stripe", "PayPal", "Apple Pay"],
};

export const experience = [
  {
    company: "Tkxel",
    role: "Senior Software Engineer",
    period: "May 2023 — Present",
    url: "https://tkxel.com",
    bullets: [
      "Developed a multi-tenant contract management platform integrating HubSpot for company and deal data synchronization.",
      "Built multi-step contract workflows supporting services, devices, payment terms, signees, addendums, and renewals.",
      "Implemented contact and role management, allowing companies to define custom roles and contacts for deals.",
      "Delivered a scouting module to track and manage officer shifts and assignments across locations.",
      "Applied best practices for state management, ensuring scalability and clean handling of nested relational data in React.",
    ],
    tech: ["NestJS", "React.js", "PostgreSQL", "HubSpot", "Azure", "Ruby on Rails"],
  },
  {
    company: "Taro Technologies",
    role: "Software Engineer",
    period: "Mar 2022 — May 2023",
    url: "",
    bullets: [
      "Built BNPL features including installment scheduling, due reminders, and order request flows.",
      "Developed a real-time car auction system using Pub/Sub and Socket.io with live bidding and countdown timers.",
      "Provided real-time bidding stats and ensured high availability through Node.js clustering.",
      "Optimized database queries and schemas across PostgreSQL and MySQL for scale.",
      "Integrated Stripe, PayPal, and Apple Pay for smooth e-commerce checkout experiences.",
    ],
    tech: ["Node.js", "Express.js", "Socket.io", "PostgreSQL", "MySQL", "Stripe", "AWS EC2"],
  },
  {
    company: "Kryptomind Inc",
    role: "Associate Software Engineer",
    period: "Jun 2020 — Mar 2022",
    url: "",
    bullets: [
      "Built a real-time chat system using Pub/Sub and Socket.io with events, presence, and message persistence.",
      "Developed a Stellar-based blockchain wallet system, including public/private key pair generation and on-chain user registration.",
      "Enabled asset trading on Stellar by integrating custom logic for issuance, transfers, and on-chain trades.",
      "Built Webhooks to sync real-time trade data from Stellar to internal systems.",
      "Developed media upload services to AWS S3 and robust checkout flows using Stripe, PayPal, and Apple Pay.",
    ],
    tech: ["Node.js", "Socket.io", "Stellar Blockchain", "AWS S3", "Stripe", "Shopify"],
  },
  {
    company: "Stackworx",
    role: "Associate Software Engineer",
    period: "Mar 2019 — Jun 2020",
    url: "",
    bullets: [
      "Built a complete email marketing system enabling automated and scheduled campaigns targeting registered users.",
      "Developed a custom e-commerce platform integrated with the Shopify API for seamless product and order synchronization.",
      "Implemented real-time inventory and pricing sync between Shopify and the custom website.",
      "Contributed fullstack across React.js, TypeScript, Node.js, and Ruby on Rails with a focus on modular architecture.",
    ],
    tech: ["Node.js", "React.js", "TypeScript", "Ruby on Rails", "Shopify API", "Sequelize"],
  },
];

export const projects = [
  {
    title: "Signal",
    subtitle: "SaaS Security Management Platform",
    description:
      "A multi-tenant SaaS product for US-based security companies. Manages contract creation, shift and job allocations, officer assignments, patrolled routes, and payrolls across multiple client locations.",
    tech: ["NestJS", "PostgreSQL", "React.js", "Azure", "Google Maps", "HubSpot", "Ruby on Rails"],
    link: "",
  },
  {
    title: "Open-Advisor",
    subtitle: "Meeting & Idea Pitching Platform",
    description:
      "A platform for professionals — Founders, Co-Founders, Accountants, and Lawyers — to pitch ideas and connect for advisory meetings. Includes subscription billing and real-time meeting features via Zoom integration.",
    tech: ["NestJS", "PostgreSQL", "Socket.io", "Stripe", "Zoom", "React.js", "AWS"],
    link: "",
  },
  {
    title: "Taro",
    subtitle: "Buy Now Pay Later Fintech",
    description:
      "A BNPL service for the Pakistani market enabling customers to purchase beyond their current budget through installment plans. Integrates Muawin for financial health scoring and supports multiple merchant partners.",
    tech: ["Node.js", "Express.js", "TypeScript", "MySQL", "TypeORM", "Stripe", "Passport.js", "AWS EC2"],
    link: "",
  },
  {
    title: "Horizon Auto",
    subtitle: "Real-time Car Auction Platform",
    description:
      "A US-based car auction platform with real-time bidding powered by Socket.io and Pub/Sub. Features live countdown timers, direct sales, OAuth 2.0 authentication, and Stripe payment processing.",
    tech: ["Node.js", "Express.js", "TypeScript", "MySQL", "Socket.io", "Stripe", "OAuth 2.0", "AWS EC2"],
    link: "",
  },
];
