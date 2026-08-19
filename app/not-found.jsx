import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  UserRound,
  BriefcaseBusiness,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      {/* Main */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center px-6 py-20 text-center lg:px-8">
          {/* Small Label */}
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-blue-500">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Oops!
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>

          {/* 404 */}
          <h1 className="bg-gradient-to-r from-blue-500 via-blue-300 to-cyan-300 bg-clip-text text-[120px] font-black leading-none tracking-tighter text-transparent sm:text-[160px] md:text-[200px]">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            The page you're looking for doesn't exist or may have been moved.
            Don't worry, there are plenty of other things to explore on my
            portfolio.
          </p>

          {/* Illustration */}
          <div className="relative my-12 flex h-56 w-full max-w-md items-center justify-center">
            {/* Moon */}
            <div className="absolute bottom-0 h-36 w-72 rounded-[50%] bg-gradient-to-b from-[#172d4c] to-[#071426] shadow-[0_-10px_50px_rgba(37,99,235,0.15)]">
              {/* Craters */}
              <span className="absolute left-12 top-12 h-8 w-8 rounded-full bg-[#071426]" />
              <span className="absolute left-32 top-20 h-5 w-5 rounded-full bg-[#071426]" />
              <span className="absolute right-12 top-10 h-10 w-10 rounded-full bg-[#071426]" />
            </div>

            {/* Astronaut */}
            <div className="relative z-10 -translate-y-8">
              {/* Helmet */}
              <div className="mx-auto h-20 w-20 rounded-full border-4 border-slate-200 bg-slate-800 shadow-xl">
                <div className="absolute ml-3 mt-3 h-12 w-12 rounded-full bg-[#020817]">
                  <div className="ml-2 mt-2 h-2 w-2 rounded-full bg-blue-400" />
                </div>
              </div>

              {/* Body */}
              <div className="mx-auto -mt-1 h-28 w-24 rounded-3xl border-4 border-slate-200 bg-background shadow">
                {/* Chest */}
                <div className="mx-auto mt-6 flex h-10 w-12 items-center justify-center rounded-md bg-slate-700">
                  <span className="text-xs font-bold text-blue-400">S</span>
                </div>

                {/* Arms */}
                <div className="absolute -ml-8 mt-2 h-16 w-8 rotate-12 rounded-full border-4 border-slate-200 bg-slate-100" />
                <div className="absolute ml-[88px] mt-2 h-16 w-8 -rotate-12 rounded-full border-4 border-slate-200 bg-slate-100" />
              </div>

              {/* Laptop */}
              <div className="absolute left-1/2 top-28 h-12 w-20 -translate-x-1/2 -rotate-6 rounded-md border-2 border-blue-400 bg-[#071426] shadow-lg">
                <div className="flex h-full items-center justify-center text-xs font-bold text-blue-400">
                  S
                </div>
              </div>

              {/* Legs */}
              <div className="mx-auto flex justify-center gap-3">
                <div className="h-12 w-8 rotate-12 rounded-b-xl bg-slate-100" />
                <div className="h-12 w-8 -rotate-12 rounded-b-xl bg-slate-100" />
              </div>
            </div>

            {/* Stars */}
            <span className="absolute left-10 top-12 text-blue-400">✦</span>
            <span className="absolute right-16 top-16 text-cyan-400">✦</span>
            <span className="absolute left-20 top-28 text-blue-500">·</span>
            <span className="absolute right-32 top-32 text-blue-400">✦</span>
          </div>

          {/* Recovery */}
          <h3 className="text-2xl font-bold">Let's get you back</h3>

          <p className="mt-2 text-slate-400">
            Here are some helpful links to get you back on track.
          </p>

          {/* Quick Links */}
          <div className="mt-8 grid w-full max-w-4xl gap-4 md:grid-cols-3">
            <RecoveryCard
              href="/portfolio/about"
              icon={<UserRound size={22} />}
              title="About Me"
              description="Learn more about me"
              iconClass="text-blue-500"
            />

            <RecoveryCard
              href="/portfolio/projects"
              icon={<BriefcaseBusiness size={22} />}
              title="My Projects"
              description="Check out my work"
              iconClass="text-cyan-400"
            />

            <RecoveryCard
              href="/portfolio/chat"
              icon={<MessageSquare size={22} />}
              title="Let's Chat"
              description="Start a conversation"
              iconClass="text-purple-400"
            />
          </div>

          {/* Home Button */}
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent/90 px-7 py-3.5 font-semibold shadow-lg shadow-accent/20 transition hover:bg-accent hover:shadow-accent/30"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}

/* --------------------------------
   Recovery Card
-------------------------------- */

function RecoveryCard({
  href,
  icon,
  title,
  description,
  iconClass,
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05]"
    >
      <div className="flex items-center gap-4">
        <div className={`shrink-0 ${iconClass}`}>{icon}</div>

        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
      </div>

      <ArrowRight
        size={18}
        className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-400"
      />
    </Link>
  );
}
