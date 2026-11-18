export type Project = {
  number: string;
  name: string;
  type: string;
  client?: string;
  description: string;
  url: string;
  displayUrl: string;
  role: string;
  stack: string[];
  details: string[];
  flagship?: boolean;
  image?: { src: string; alt: string; width: number; height: number };
  art: { bg: string; color: string; light: string };
};

export const projects: Project[] = [
  {
    number: '01', name: 'Koshi Province Tourism Portal', type: 'Government platform',
    client: 'Government of Koshi Province, Nepal',
    description: 'An official tourism platform built to bring the destinations, trails and listings of Koshi Province online.',
    url: 'https://tourism.koshi.gov.np', displayUrl: 'tourism.koshi.gov.np',
    role: 'Backend development',
    stack: ['REST APIs', 'Database design', 'Business logic', 'Secure admin'],
    details: [
      'Built the backend for an official government tourism platform, including database design, business logic and secure admin features.',
      'Developed and connected REST APIs to the React frontend so content such as destinations, trails and listings updates smoothly.',
      'Delivered a public facing system used by citizens and tourists, with a focus on reliability, security and clear data management.',
      'Worked closely with the team to meet government project requirements and deadlines.',
    ],
    flagship: true,
    art: { bg: '#11150f', color: '#65783d', light: '#d7f48e' },
    image: { src: '/images/projects/koshi-tourism.png', alt: 'Koshi Province Tourism Portal project screenshot', width: 1200, height: 800 }
  },
  {
    number: '02', name: 'Kapan Muay Thai', type: 'Business web application',
    description: 'A CRM style web application for a Muay Thai business, with a connected React experience.',
    url: 'https://kapanmuaythai.com.np', displayUrl: 'kapanmuaythai.com.np',
    role: 'Backend structure and database design',
    stack: ['MySQL', 'REST APIs', 'React'],
    details: ['Built a CRM style web application for a Muay Thai business, covering backend structure and database design in MySQL.', 'Connected APIs to the React frontend to manage and display business content.'],
    art: { bg: '#181311', color: '#97664c', light: '#edb68c' },
    image: { src: '/images/projects/kapan-muay-thai.png', alt: 'Kapan Muay Thai project screenshot', width: 1200, height: 800 },
  },
  {
    number: '03', name: 'Himalayan Hairs (CMS)', type: 'CMS / CRM',
    description: 'A CRM style content platform shaped around a responsive React frontend and Laravel backend.',
    url: 'https://himalayanhairs.com', displayUrl: 'himalayanhairs.com',
    role: 'Backend and API integration',
    stack: ['Laravel', 'MySQL', 'React'],
    details: ['Developed a CRM style web application with a MySQL backend and Laravel business logic.', 'Integrated backend APIs with the React frontend for a fast, responsive user experience.'],
    art: { bg: '#15131b', color: '#63527b', light: '#c9b6ed' },
    image: { src: '/images/projects/himalayan-hairs.png', alt: 'Himalayan Hairs project screenshot', width: 1200, height: 800 },
  },
  {
    number: '04', name: 'Youkoso Education', type: 'Education business',
    description: 'An education-business CRM application with Laravel APIs connected to React and Inertia.',
    url: 'https://youkoso.edu.np', displayUrl: 'youkoso.edu.np',
    role: 'MySQL backend and API integration',
    stack: ['MySQL', 'Laravel', 'React', 'Inertia'],
    details: ['Created a CRM style web application for an education business, handling the MySQL backend and API integration.', 'Delivered a clean, user friendly interface by connecting Laravel APIs with React and Inertia.'],
    art: { bg: '#101719', color: '#3e7374', light: '#9fe2d3' },
    image: { src: '/images/projects/youkoso.png', alt: 'Youkoso Education project screenshot', width: 1200, height: 800 },
  },
  {
    number: '05', name: 'Jaltan', type: 'Organization platform',
    description: 'A responsive web application for a Nepal based organization, with content managed through connected APIs.',
    url: 'https://jaltan.org.np', displayUrl: 'jaltan.org.np',
    role: 'Laravel backend and MySQL database design',
    stack: ['Laravel', 'MySQL', 'React', 'Inertia'],
    details: ['Developed a web application for a Nepal based organization, handling the Laravel backend and MySQL database design.', 'Built and connected APIs to the React frontend so content and data are easy to manage and display.', 'Delivered a responsive, user friendly interface using Inertia for smooth page navigation.'],
    art: { bg: '#19150f', color: '#8a7042', light: '#e3cb89' },
    image: { src: '/images/projects/jaltan.png', alt: 'Jaltan project screenshot', width: 1200, height: 800 },
  },
];
