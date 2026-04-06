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
    sub: "For artists with a finished song, a voice memo, or a beautiful unfinished idea.",
    cta: "Book a session",
    href: "/services/recording",
    accent: "from-orange-600/20 to-amber-700/10",
  },
  {
    slug: "produce",
    icon: "🎛",
    headline: "Produce my record",
    sub: "For artists ready to build the record — not just capture it.",
    cta: "Start a conversation",
    href: "/services/production",
    accent: "from-violet-700/20 to-indigo-800/10",
  },
  {
    slug: "mix",
    icon: "🎚",
    headline: "Mix & master my song",
    sub: "Your record, ready for the world. Nothing lost in translation.",
    cta: "Get a quote",
    href: "/services/mix-master",
    accent: "from-teal-700/20 to-cyan-800/10",
  },
  {
    slug: "scoring",
    icon: "🎬",
    headline: "Score a visual world",
    sub: "Cinematic sound for visual worlds that deserve a soul.",
    cta: "Inquire about a project",
    href: "/scoring",
    accent: "from-rose-800/20 to-red-900/10",
  },
];
