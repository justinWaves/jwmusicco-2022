export type Service = {
  slug: string;
  icon: string;
  headline: string;
  sub: string;
  cta: string;
  href: string;
  accent: string;
};

export const services: Service[] = [
  {
    slug: "record",
    icon: "🎙",
    headline: "Record a song I wrote",
    sub: "Capture your voice, your vision, your feeling. Safe, intimate, and professionally rendered.",
    cta: "Book a session",
    href: "/services/recording",
    accent: "from-orange-600/20 to-amber-700/10",
  },
  {
    slug: "produce",
    icon: "🎛",
    headline: "Produce my record",
    sub: "From sketch to finished record — arrangement, sound, emotion, and creative direction.",
    cta: "Explore production",
    href: "/services/production",
    accent: "from-violet-700/20 to-indigo-800/10",
  },
  {
    slug: "mix",
    icon: "🎚",
    headline: "Mix & master my song",
    sub: "Pro-grade depth, clarity, and presence. Your stems, handled with intention.",
    cta: "Get a quote",
    href: "/services/mix-master",
    accent: "from-teal-700/20 to-cyan-800/10",
  },
  {
    slug: "learn-production",
    icon: "🖥",
    headline: "Learn the craft",
    sub: "Studio walkthroughs, deep-dive courses, and rare private access to a working artist's process.",
    cta: "See what's inside",
    href: "/learn",
    accent: "from-indigo-700/20 to-violet-900/10",
  },
  {
    slug: "learn-instruments",
    icon: "🎹",
    headline: "Piano · guitar · theory",
    sub: "Build your musical language from the ground up, guided by someone who lives inside it.",
    cta: "Book a lesson",
    href: "/learn/lessons",
    accent: "from-sky-700/20 to-blue-800/10",
  },
  {
    slug: "scoring",
    icon: "🎬",
    headline: "Hire JW Music Co for scoring",
    sub: "Cinematic sound for indie games, film, trailers, and visual worlds that need a soul.",
    cta: "Watch the reel",
    href: "/scoring",
    accent: "from-rose-800/20 to-red-900/10",
  },
];
