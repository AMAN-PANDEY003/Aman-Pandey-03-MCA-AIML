// Central source of truth for all portfolio content.
// Update this file to keep the website in sync. Anywhere a link is a
// placeholder, it is explicitly marked so you can replace it later.

export const profile = {
  name: 'Aman Pandey',
  headline: 'Building My Path in Data Science & AI',
  role: 'MCA (AI/ML) Student | Aspiring Data Scientist',
  location: 'Mathura, Uttar Pradesh, India',
  email: 'sarojpandey995@gmail.com',
  // Replace with your real resume file in /public (e.g. aman-pandey-resume.pdf)
  resumeUrl: '/home/project/public/aman_pandey_resume.pdf',
  resumeIsPlaceholder: true,
  intro:
    'MCA student specializing in Artificial Intelligence & Machine Learning, actively building strong foundations in Python, SQL and Data Science. I bring a background in web development and a curiosity for working with data — turning raw information into clear, useful insight.',
  links: {
    github: 'https://github.com/vrtexi',
    linkedin: 'www.linkedin.com/in/vrtexi',
  },
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export type Skill = {
  name: string;
  learning?: boolean;
};

export type SkillCategory = {
  title: string;
  icon: 'python' | 'database' | 'analytics' | 'server' | 'layout' | 'wrench';
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Python',
    icon: 'python',
    skills: [
      { name: 'Python Fundamentals' },
      { name: 'Object-Oriented Programming' },
      { name: 'File Handling' },
      { name: 'Exception Handling' },
      { name: 'Problem Solving' },
    ],
  },
  {
    title: 'SQL — Intermediate',
    icon: 'database',
    skills: [
      { name: 'Joins' },
      { name: 'Subqueries' },
      { name: 'Aggregate Functions' },
      { name: 'GROUP BY & HAVING' },
      { name: 'Set Operators' },
      { name: 'Window Functions' },
    ],
  },
  {
    title: 'Data Science & Analytics',
    icon: 'analytics',
    skills: [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Statistics' },
      { name: 'Probability' },
      { name: 'Data Cleaning & Analysis' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'server',
    skills: [
      { name: 'FastAPI', learning: true },
      { name: 'REST APIs', learning: true },
      { name: 'Query Parameters', learning: true },
      { name: 'Path Parameters', learning: true },
      { name: 'Filtering, Sorting & Pagination', learning: true },
    ],
  },
  {
    title: 'Frontend Development',
    icon: 'layout',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React.js' },
    ],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'VS Code' }],
  },
];

export type Project = {
  title: string;
  blurb: string;
  details: string[];
  stack: string[];
  github: string;
  demo?: string;
  demoPlaceholder?: boolean;
  githubPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Anime Recommendation Website',
    blurb:
      'A React-based anime recommendation platform with browsing, genre-based recommendations and user profiles.',
    details: [
      'Implemented anime browsing, genre-based recommendations and detailed anime pages.',
      'Added authentication and profile functionality.',
      'Built reusable UI components for a consistent experience.',
      'Integrated Firebase Authentication, Firestore and Firebase Storage.',
    ],
    stack: ['React.js', 'Firebase', 'Axios', 'GraphQL', 'React Router'],
    github: 'https://github.com/PLACEHOLDER-AMAN-PANDEY/anime-recommendation',
    githubPlaceholder: true,
  },
  {
    title: 'VOLT-FRUITS Discord Bot',
    blurb:
      'A custom Discord bot for community management and utility automation, refined over multiple iterations.',
    details: [
      'Developed a custom Discord bot for community management and utility automation.',
      'Implemented server workflows and automation features.',
      'Maintained and improved the project through multiple iterations.',
    ],
    stack: ['Python', 'Discord API'],
    github: 'https://github.com/PLACEHOLDER-AMAN-PANDEY/volt-fruits-bot',
    githubPlaceholder: true,
  },
  {
    title: 'Discord Automation & Verification-Safety Script',
    blurb:
      'A monitoring script for Discord-based game automation with real-time scanning and CAPTCHA safeguards.',
    details: [
      'Developed a monitoring script for Discord-based game automation.',
      'Implemented real-time message and embed scanning using keyword and pattern detection.',
      'Added automatic pause/stop safeguards when CAPTCHA or verification-related events were detected.',
      'Implemented connection monitoring and recovery logic using asynchronous Python.',
    ],
    stack: ['Python', 'Asyncio', 'Automation'],
    github: 'https://github.com/PLACEHOLDER-AMAN-PANDEY/discord-verification-safety',
    githubPlaceholder: true,
  },
];

export type JourneyStep = {
  label: string;
  description: string;
  status: 'done' | 'active' | 'next';
};

export const journeySteps: JourneyStep[] = [
  {
    label: 'Python Fundamentals',
    description:
      'Built core programming skills — syntax, OOP, file & exception handling, and structured problem solving.',
    status: 'done',
  },
  {
    label: 'SQL — Intermediate',
    description:
      'Practiced joins, subqueries, aggregates, set operators and window functions for real query work.',
    status: 'done',
  },
  {
    label: 'NumPy & Pandas',
    description:
      'Learning to manipulate, clean and transform data with NumPy and Pandas as my core data tooling.',
    status: 'active',
  },
  {
    label: 'Data Visualization',
    description:
      'Creating clear visual narratives with Matplotlib and Seaborn to communicate findings effectively.',
    status: 'next',
  },
  {
    label: 'Statistics & Probability',
    description:
      'Strengthening the mathematical foundation that underpins meaningful analysis and ML intuition.',
    status: 'next',
  },
  {
    label: 'Exploratory Data Analysis',
    description:
      'Bringing it together — profiling datasets, finding patterns and forming data-driven questions.',
    status: 'next',
  },
  {
    label: 'FastAPI',
    description:
      'Currently learning to build REST APIs with path/query parameters, filtering, sorting and pagination.',
    status: 'next',
  },
];

export type Education = {
  degree: string;
  field: string;
  school: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    degree: 'MCA',
    field: 'Artificial Intelligence & Machine Learning',
    school: 'GLA University',
    period: '2026 — Present',
  },
  {
    degree: 'BCA',
    field: 'Computer Applications',
    school: 'Makhanlal Chaturvedi University, Bhopal',
    period: '2022 — 2025',
    detail: 'CGPA: 7.98',
  },
];
