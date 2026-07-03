"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";

const journey = [
  {
    year: "2021",
    title: "Where It All Started",
    description:
      "While studying in 9th grade, my computer teacher noticed my interest and ability in HTML. He encouraged me to explore web development beyond the classroom, which became the foundation of my journey.",
  },

  {
    year: "2022",
    title: "Learning the Fundamentals",
    description:
      "I learned HTML, CSS, Bootstrap, JavaScript, C, C++, and the fundamentals of React.js while continuing my studies and building small projects to strengthen my programming skills.",
  },

  {
    year: "2022 - 2023",
    title: "Professional MERN Training",
    description:
      "Joined Tyser Institute of Computer Education & Resources, Lodhran, where I completed intensive training in the MERN Stack including React.js, Node.js, Express.js, MongoDB, REST APIs, authentication, and full-stack application development.",
  },

  {
    year: "2023 - 2024",
    title: "Arwa Technologies",
    description:
      "Started my professional career as a MERN Stack Developer Intern. I worked on real-world applications, collaborated with developers, and gained practical experience in building scalable web applications.",
  },

  {
    year: "2024 - 2025",
    title: "Client & Contract Projects",
    description:
      "Worked on multiple client and contract-based projects including dashboards, business websites, and custom web applications using modern JavaScript technologies.",
  },

  {
    year: " 2026",
    title: "Government Graduate College Website",
    description:
      "Developed the official website for Government Graduate College Lodhran, creating a responsive multi-page website that is now publicly accessible for students and visitors.",
  },

  {
    year: "Present",
    title: "Growing Every Day",
    description:
      "I'm continuously improving my skills, expanding my portfolio, and actively looking for opportunities where I can contribute, learn, and grow as a Full-Stack Software Developer.",
  },
];

export const achievements = [
  {
    title: "Government Graduate College Lodhran",
    description:
      "Designed and developed the official multi-page website for Government Graduate College Lodhran, delivering a responsive and modern experience for students, faculty, and visitors.",
  },

  {
    title: "Teaching & Mentoring",
    description:
      "Supported faculty members by helping students learn programming fundamentals including C language, databases, and practical web development concepts while continuing to strengthen my own technical and communication skills.",
  },

  {
    title: "Private Client Projects",
    description:
      "Developed dashboards, business websites, and custom web applications for clients using React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  },
];

const experiences = [
  {
    company: "Arwa Technologies",
    role: "MERN Stack Developer Intern",
    duration: "March 2024 – September 2024",
    type: "Internship",
    description:
      "Worked with the MERN stack to build responsive web applications, integrate REST APIs, develop reusable React components, collaborate with senior developers, and gain practical experience in professional software development.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "Git",
    ],
  },

  {
    company: "Contract-Based Development",
    role: "Full-Stack MERN Developer",
    duration: "2024 – Present",
    type: "Freelance / Contract",

    description:
      "Worked with startups and private clients on dashboards, business websites, admin panels, and custom web applications. Delivered complete solutions from frontend development to backend APIs and deployment.",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vercel",
      "Netlify",
    ],
  },

  {
    company: "Government Graduate College Lodhran",
    role: "Web Developer",
    duration: "Project-Based",

    type: "Client Project",

    description:
      "Designed and developed the official multi-page website for Government Graduate College Lodhran with a modern responsive interface, clean structure, and optimized performance.",

    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Responsive Design",
    ],
  },
];

const highlights = [
  {
    title: "💻 Full-Stack Development",
    description:
      "I build complete web applications using React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. From responsive user interfaces to secure REST APIs, I enjoy developing products from idea to deployment.",
  },

  {
    title: "🚀 Real-World Projects",
    description:
      "I've worked on private client dashboards, institutional websites, admin panels, and custom business solutions. Every project has strengthened my problem-solving skills and understanding of production-ready development.",
  },

  {
    title: "📚 Continuous Learning",
    description:
      "Technology evolves quickly, so I continuously improve my skills by building projects, exploring modern tools, studying best practices, and learning from experienced developers and open-source communities.",
  },

  {
    title: "🤝 Collaboration",
    description:
      "Alongside development, I've supported my teachers by helping fellow students understand programming concepts such as C language, databases, and web development fundamentals, which improved my communication and teamwork skills.",
  },
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const testimonials = [
  {
    name: "Prof. Mr. Muhammad Irfan Yasir",
    role: "Government Graduate College Lodhran",
    avatar: "/assets/images/testimonials/principal.png", // Optional
    quote:
      "Shahzaib developed the official website for our college with exceptional dedication and professionalism. The quality of his work is comparable to projects that often command a high commercial value. Although this was a contribution to our institution, we proudly recognized his efforts with a token of appreciation.",
    highlight: "Official Website Project",
  },
  {
    name: "Prof. Asma Liaqat",
    role: "Government Graduate College Lodhran",
    avatar: "/assets/images/testimonials/asma.png", // Optional
    quote:
      "Shahzaib consistently demonstrated strong technical skills and a willingness to support both teachers and students. His passion for learning and helping others made him a valuable contributor to our department.",
    highlight: "Academic Mentorship",
  },
  {
    name: "Mr. Azhar Shahzad",
    role: "Arwa Tchnologies",
    avatar: "/assets/images/testimonials/azhar.png", // Optional
    quote:
      "During his internship, Shahzaib showed excellent dedication, quickly adapted to new technologies, and consistently delivered quality work while collaborating effectively with the development team.",
    highlight: "Job Performance & Collaboration",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* My Journey into Full-Stack Development */}
      <motion.section
        className="max-w-4xl space-y-6"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          👋 About Me
        </span>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          My Journey into Full-Stack Development
        </h1>

        <p className="text-lg leading-8 text-muted-foreground">
          I'm <strong>Muhammad Shahzaib</strong>, a Full-Stack MERN Developer
          from Pakistan passionate about building scalable web applications with
          React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
        </p>

        <p className="leading-8 text-muted-foreground">
          My journey started in 9th grade when my computer teacher encouraged me
          to explore web development after recognizing my interest in HTML.
          Since then, I've continued learning, completed professional MERN
          training, worked as a MERN Stack Developer Intern, delivered client
          projects, contributed to my college community through mentoring, and
          developed the official website for Government Graduate College
          Lodhran.
        </p>
      </motion.section>

      {/* What Defines Me */}
      <motion.section
        className="space-y-8"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div>
          <h2 className="text-3xl font-bold">What Defines Me</h2>

          <p className="mt-2 max-w-3xl text-muted-foreground">
            Beyond writing code, I enjoy solving problems, learning
            continuously, and collaborating with others to build meaningful
            digital products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <Card className="h-full border-border/60 bg-card/80 transition hover:border-primary hover:shadow-xl">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* My Journey */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            🚀 My Journey
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            From Curiosity to Professional Development
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            Every milestone has helped shape my skills as a developer—from
            writing my first HTML page in school to building production-ready
            applications for clients and organizations.
          </p>
        </div>

        <div className="relative border-l border-primary/20 pl-8">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              className="relative mb-12"
            >
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>

              <span className="text-sm font-semibold text-primary">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-3 leading-8 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experiences */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div>
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            💼 Professional Experience
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Building Real-World Solutions
          </h2>

          <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
            My professional experience includes internships, contract-based
            development, and client projects where I've built scalable web
            applications using modern JavaScript technologies.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div key={exp.company} whileHover={{ y: -5 }}>
              <Card className="border-border/60 transition hover:border-primary hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{exp.role}</h3>

                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>

                    <div className="text-right">
                      <p className="font-medium">{exp.duration}</p>

                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Testimonials */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            💬 Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            What People Say About My Work
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            Building software is about more than writing code—it's about earning
            trust, delivering quality, and creating solutions that people
            genuinely value.
          </p>
        </div>

        {/* Featured Testimonial */}

        <motion.div whileHover={{ y: -5 }}>
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 lg:p-10">
              <div className="mb-6 text-6xl text-primary">“</div>

              <p className="text-lg leading-9 text-muted-foreground italic">
                {testimonials[0].quote}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    <img
                      src={testimonials[0].avatar}
                      alt={testimonials[0].name}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold">{testimonials[0].name}</h4>

                    <p className="text-sm text-muted-foreground">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>

                <span className="hidden rounded-full bg-primary/10 px-4 py-2 text-sm text-primary md:block">
                  {testimonials[0].highlight}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Remaining Testimonials */}

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.slice(1).map((testimonial) => (
            <motion.div key={testimonial.name} whileHover={{ y: -5 }}>
              <Card className="h-full transition hover:border-primary hover:shadow-xl">
                <CardContent className="space-y-6 p-6">
                  <div className="text-4xl text-primary">“</div>

                  <p className="leading-8 text-muted-foreground">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>

                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
