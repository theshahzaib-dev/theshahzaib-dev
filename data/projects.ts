// Featured Projects Data
export const featuredProjectsData = [
  {
    id: 1,

    title: "Arwa Technologies Company Website",

    category: "Professional Experience",

    status: "private",

    image: "/assets/images/projects/arwa-technologies.png",

    description:
      "Developed the official company website for Arwa Technologies as part of a three-member development team during my time as a MERN Stack Developer. My responsibilities included building responsive frontend interfaces, integrating REST APIs, implementing authentication, and collaborating closely with the backend developer to deliver a fully functional, production-ready website.",

    role: [
      "Frontend Development",
      "REST API Integration",
      "Authentication",
      "Responsive UI Development",
      "Team Collaboration",
    ],

    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vercel",
    ],

    features: [
      "Company Profile",
      "Team Members",
      "Career Section",
      "Authentication",
      "Responsive Design",
      "REST API Integration",
    ],

    live: undefined,

    github: undefined,
  },
  {
    id: 2,

    title: "Velocity Admin Dashboard",

    category: "Private Client Project",

    status: "private",

    image: "/assets/images/projects/velocity.png",

    description:
      "Developed the administrator dashboard for a logistics management platform. The dashboard provides administrators with complete control over users, vehicles, bookings and system analytics.",

    role: [
      "Built the complete Admin Dashboard",
      "REST API Integration",
      "Authentication",
      "Dashboard Analytics",
      "Responsive UI",
    ],

    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "MongoDB Atlas",
      "JWT",
      "Vercel",
    ],

    features: [
      "Dashboard Analytics",
      "Bookings",
      "Vehicles",
      "Users",
      "Authentication",
    ],

    live: "https://velocitydispatch.vercel.app/",

    github: undefined,
  },

  {
    id: 3,

    title: "Government Graduate College Lodhran",

    category: "Official Website",

    status: "live",

    image: "assets/images/projects/ggcl.png",

    description:
      "Designed and developed a responsive multi-page website for Government Graduate College Lodhran to provide students and visitors with academic information.",

    role: ["Frontend Development", "Responsive Design", "Deployment"],

    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Vercel"],

    features: [
      "Homepage",
      "Departments",
      "Admissions",
      "Faculty",
      "Gallery",
      "Contact",
    ],

    live: "https://government-college-site.vercel.app/",

    github: "",
  },
];

export const otherProjects = [
  {
    title: "BedSpace",
    category: "Hotel Booking Platform",
    image: "/assets/images/projects/bedspace.png",

    description:
      "A modern multi-page hotel and bed space booking website for UAE accommodations. Users can browse available rooms, choose options for individuals, couples, or families, and complete their booking before arriving. Built as a fully responsive frontend application with a clean user experience.",

    tech: ["React", "Next.js", "Tailwind CSS"],

    status: "Live",
    repo: "Public",
    live: "https://bedspace.vercel.app/",
    github: "https://github.com/theshahzaib-dev/bedspace.git",
  },
  {
    title: "Solution Carrier",
    category: "Software Company Website",
    image: "/assets/images/projects/sc.png",

    description:
      "Developed the responsive frontend website for Solution Carrier, a software company focused on delivering digital solutions and technology services. Built with Next.js and Tailwind CSS, the website features modern UI components, optimized performance, and a responsive user experience across all devices.",

    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],

    status: "Live",
    repo: "Private",
    live: "https://solution-carriers.vercel.app/",
    github: null,
  },
  {
    title: "Stratix Technologies",
    category: "Software House Website",
    image: "/assets/images/projects/stratix.png",

    description:
      "A responsive multi-page hotel booking website for UAE accommodations. Users can browse available rooms, explore accommodation options for individuals, couples, and families, and complete booking requests through a modern and intuitive interface. Built as a frontend application using Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],

    status: "Live",
    repo: "Private",
    live: "https://stratixtechnologies.vercel.app/",
    github: null, // Private repository
  },

  {
    title: "Diverge AI",
    category: "AI Landing Page",
    image: "/assets/images/projects/diverge-ai.png",

    description:
      "Worked as the Frontend Developer to build the official website for Solution Carrier. Developed responsive pages and reusable UI components using Next.js, React, JavaScript, and Tailwind CSS, with deployment on Vercel.",
    tech: ["React", "Next.js", "Tailwind CSS"],

    status: "Live",
    repo: "Public",
    live: "https://diverge-ai.vercel.app/",
    github: "https://github.com/theshahzaib-dev/diverge-ai.git", // Private repository
  },

  {
    title: "LogranGPT",
    category: "AI Platform",
    image: "/assets/images/projects/lodhrangpt.png",

    description:
      "Designed and developed the frontend website for Stratix Technologies, showcasing the company's services, technologies, portfolio, and business information through a modern, responsive interface.",
    tech: ["Next.js", "React", "Tailwind CSS", "Firebase", "Hugging Face"],

    status: "Live",
    repo: "Private",
    live: "https://lodhrangpt.vercel.app/",
  },
];

// Development Process
export const developmentProcess = [
  {
    step: "01",
    title: "Understanding Requirements",
    description:
      "I begin by understanding the client's goals, target audience, business requirements, and project scope before writing any code.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Planning & Architecture",
    description:
      "I plan the application structure, define reusable components, organize APIs, and design the database schema to keep the project scalable and maintainable.",
    icon: "📐",
  },
  {
    step: "03",
    title: "Development",
    description:
      "I build responsive user interfaces with React or Next.js and develop secure backend APIs using Node.js, Express.js, and MongoDB.",
    icon: "💻",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "Before deployment, I test functionality, fix bugs, optimize performance, improve responsiveness, and ensure the application works across different devices.",
    icon: "🧪",
  },
  {
    step: "05",
    title: "Deployment & Maintenance",
    description:
      "I deploy projects on platforms like Vercel or Netlify and continue improving them through updates, bug fixes, and feature enhancements.",
    icon: "🚀",
  },
];
