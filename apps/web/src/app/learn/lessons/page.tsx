import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";
import { BookingEmbed } from "@/components/ui/booking-embed";

export const metadata: Metadata = {
  title: "Piano · Guitar · Theory Lessons — JW Music Company",
  description:
    "Private music lessons for piano, guitar, and music theory. Beginner through advanced. Online or in-person in the Bay Area.",
};

const instruments = [
  {
    icon: "🎹",
    title: "Piano",
    sub: "Classical foundations, contemporary technique, pop and jazz voicings, chord theory. For beginners finding their hands to advanced players refining expression.",
  },
  {
    icon: "🎸",
    title: "Guitar",
    sub: "Acoustic, electric, fingerstyle, and beyond. From first chords to complex arrangements, rhythm playing to lead technique.",
  },
  {
    icon: "🎼",
    title: "Music Theory",
    sub: "The language behind music — intervals, chords, harmony, rhythm, form. Taught through real songs you already love, not dry textbooks.",
  },
];

const formats = [
  {
    title: "Online lessons",
    body: "Via Zoom or FaceTime. Works globally. Sessions recorded on request for your review.",
    detail: "Flexible scheduling — weekly, bi-weekly, or on-demand",
  },
  {
    title: "In-person · Bay Area",
    body: "Available in San Jose, San Francisco, and surrounding areas. Bring your instrument, or use mine.",
    detail: "At my studio or a convenient location for you",
  },
];

const faqs = [
  {
    q: "Do I need any prior experience?",
    a: "Not at all. I teach beginners from scratch and advanced players refining their craft. First lessons are always diagnostic — we figure out where you are and where you want to go.",
  },
  {
    q: "How often should I take lessons?",
    a: "Most students progress fastest with weekly lessons. Bi-weekly works for self-directed learners. Intensive single sessions are also available.",
  },
  {
    q: "Do I need an instrument?",
    a: "For piano, a keyboard with weighted keys is ideal (88 keys recommended). For guitar, any acoustic or electric will do. If you're in-person, you can use mine while you figure out what to buy.",
  },
  {
    q: "What ages do you teach?",
    a: "Adults and teens (13+). I'm most effective with self-motivated students who genuinely want to learn.",
  },
];

export default function LessonsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Learn" backHref="/learn" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #0284c7 0%, #0c4a6e 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        <p className="relative mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-sky-400/50">
          Lessons
        </p>
        <h1 className="relative mx-auto max-w-3xl font-display text-5xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-6xl md:text-7xl">
          Build your
          <br />
          <span className="italic text-white/55">musical language.</span>
        </h1>
        <p className="relative mt-6 max-w-md font-display text-xl font-light italic leading-relaxed text-white/38 sm:text-2xl">
          Guided by a working artist, from first note to advanced expression.
        </p>
        <div className="relative mt-8">
          <Link
            href="/contact?subject=lessons"
            className="group inline-flex items-center gap-3 rounded-full border border-sky-500/35 bg-sky-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-sky-400/55 hover:bg-sky-500/[0.18]"
          >
            <span className="font-body text-sm font-medium tracking-wide text-sky-100/90 transition-colors group-hover:text-sky-50">
              Book a lesson
            </span>
            <svg
              className="h-3.5 w-3.5 text-sky-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-sky-300/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Instruments */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            What I teach
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {instruments.map((inst) => (
            <div
              key={inst.title}
              className="relative overflow-hidden rounded-2xl border border-sky-500/15 bg-white/[0.025] p-8 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-700/8 to-transparent" />
              <div className="relative">
                <div className="mb-4 text-3xl">{inst.icon}</div>
                <h3 className="mb-3 font-display text-xl font-light text-white/85">{inst.title}</h3>
                <p className="font-body text-sm leading-relaxed text-white/45">{inst.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Format */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            How we meet
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {formats.map((fmt) => (
            <div
              key={fmt.title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8"
            >
              <h3 className="mb-3 font-display text-lg font-light text-white/80">{fmt.title}</h3>
              <p className="mb-3 font-body text-sm leading-relaxed text-white/45">{fmt.body}</p>
              <p className="font-body text-xs text-white/25">{fmt.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 text-center">
          <p className="mb-2 font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
            Pricing
          </p>
          <p className="mx-auto max-w-lg font-display text-2xl font-light leading-relaxed text-white/65">
            Lessons start at $75 / hour.
          </p>
          <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-white/35">
            Sliding scale available for students with financial need. Reach out and
            we&rsquo;ll figure something out.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Common questions
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-6">
              <p className="mb-3 font-display text-lg font-light text-white/75">{faq.q}</p>
              <p className="font-body text-sm leading-relaxed text-white/40">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="relative z-10 mx-auto max-w-3xl px-6 pb-20 scroll-mt-24">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Book a lesson
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <BookingEmbed
          calLink={process.env.NEXT_PUBLIC_CAL_LESSONS_LINK}
          namespace="lessons"
          fallbackHref="/contact?subject=lessons"
          fallbackLabel="Book a lesson"
          accentClass="border-sky-500/35 bg-sky-500/[0.1] text-sky-100/90 hover:border-sky-400/55 hover:bg-sky-500/[0.18]"
          note="First session is always exploratory. We figure out where you are and where you want to go."
        />
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-950/40 via-smoke-950 to-blue-950/20" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />
          <div className="relative flex flex-col items-center gap-5 px-8 py-16 text-center sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-sky-400/40">
              Ready to start
            </p>
            <h2 className="mx-auto max-w-xl font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              Your first lesson
              <br />
              <span className="italic text-white/50">starts with a conversation.</span>
            </h2>
            <p className="max-w-sm font-body text-sm leading-relaxed text-white/32">
              Tell me your goals, your level, and when you&rsquo;re available.
              First sessions are always exploratory.
            </p>
            <Link
              href="/contact?subject=lessons"
              className="group inline-flex items-center gap-3 rounded-full border border-sky-500/35 bg-sky-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-sky-400/55 hover:bg-sky-500/[0.18]"
            >
              <span className="font-body text-sm font-medium tracking-wide text-sky-100/90 group-hover:text-sky-50">
                Book a lesson
              </span>
              <svg
                className="h-3.5 w-3.5 text-sky-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-sky-300/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] px-8 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/learn" className="font-body text-xs text-white/20 transition-colors hover:text-white/40">
            ← Learn
          </Link>
          <p className="font-body text-xs text-white/20">San Francisco Bay Area</p>
        </div>
      </footer>
    </main>
  );
}
