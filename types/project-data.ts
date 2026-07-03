export interface Project {
  id: number;

  title: string;

  category: string;

  status: "live" | "private" | "academic";

  image: string;

  description: string;

  role: string[];

  technologies: string[];

  features: string[];

  live?: string;

  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,

    title: "Velocity Admin Dashboard",

    category: "Private Client Project",

    status: "private",

    image: "/assets/images/projects/velocity-dashboard.png",

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
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    features: [
      "Dashboard Analytics",
      "Bookings",
      "Vehicles",
      "Users",
      "Authentication",
    ],

    live: undefined,

    github: undefined,
  },

  {
    id: 2,

    title: "Government Graduate College Lodhran",

    category: "Official Website",

    status: "live",

    image: "assets/images/projects/ggclodhran.png",

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

    live: "https://",

    github: "",
  },
];
