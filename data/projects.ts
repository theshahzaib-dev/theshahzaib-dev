export const featuredProjects = [
  {
    id: 1,
    title: "Velocity Admin Dashboard",
    subtitle: "Private Client Project",
    role: "Frontend Developer",
    image: "/projects/velocity-dashboard.png",

    description:
      "Developed a modern administrator dashboard for managing drivers, dispatchers, users, trips, and operational data. Built responsive interfaces, integrated backend APIs, and focused on delivering a clean user experience for administrators.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],

    features: [
      "Authentication",
      "Admin Dashboard",
      "User Management",
      "Trip Management",
      "Responsive UI",
    ],

    live: "",
    github: "",
    privateRepo: true,
  },

  {
    id: 2,
    title: "Government Graduate College Lodhran",
    subtitle: "Official College Website",
    role: "Full-Stack Developer",

    image: "/projects/ggcl.png",

    description:
      "Designed and developed the official website for Government Graduate College Lodhran. The website provides information about admissions, departments, faculty members, notices, and academic activities in a modern responsive interface.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    features: [
      "SEO Optimized",
      "Responsive Design",
      "Multi-page Website",
      "Performance Optimized",
    ],

    live: "https://YOUR-LIVE-LINK",

    github: "",
    privateRepo: true,
  },

  {
    id: 3,
    title: "Personal Portfolio",
    subtitle: "Personal Project",
    role: "Full-Stack Developer",

    image: "/projects/portfolio.png",

    description:
      "A modern portfolio showcasing my projects, skills, professional experience, and development journey. Built with a strong focus on performance, accessibility, animations, and responsive design.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    features: [
      "Dark Mode",
      "SEO",
      "Responsive Design",
      "Animations",
    ],

    live: "https://theshahzaibdev.online",

    github: "https://github.com/yourusername",

    privateRepo: false,
  },
];

export const otherProjects = [
  {
    title: "Authentication System",
    category: "Personal",
    image: "/projects/auth.png",
    description:
      "JWT authentication system with protected routes and role-based access control.",

    tech: ["React", "Node.js", "JWT"],

    status: "Completed",
  },

  {
    title: "Real-Time Chat App",

    category: "Learning",

    image: "/projects/chat.png",

    description:
      "Built using Socket.IO to understand real-time communication and event-driven architecture.",

    tech: ["Socket.IO", "React", "Node.js"],

    status: "Learning Project",
  },

  {
    title: "Task Management",

    category: "Personal",

    image: "/projects/task.png",

    description:
      "Simple task manager with CRUD operations and responsive UI.",

    tech: ["React", "MongoDB"],

    status: "Completed",
  },

  {
    title: "Business Landing Page",

    category: "Client",

    image: "/projects/business.png",

    description:
      "Responsive landing page developed for a local business.",

    tech: ["Next.js", "Tailwind"],

    status: "Delivered",
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

