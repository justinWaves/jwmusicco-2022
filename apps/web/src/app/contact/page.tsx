"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";
import { sendContactEmail } from "./actions";

// ─── Subject map ────────────────────────────────────────────────────────────

type ServiceKey =
  | "recording"
  | "production"
  | "mix-master"
  | "scoring"
  | "lessons"
  | "learn"
  | "question"
  | "";

const subjectOptions: { value: ServiceKey; label: string }[] = [
  { value: "recording", label: "Recording session" },
  { value: "production", label: "Music production" },
  { value: "mix-master", label: "Mixing & mastering" },
  { value: "scoring", label: "Film / game scoring" },
  { value: "lessons", label: "Piano / guitar / theory lessons" },
  { value: "learn", label: "Courses & mentorship" },
  { value: "question", label: "General question" },
];

function paramToKey(param: string | null): ServiceKey {
  if (!param) return "";
  const match = subjectOptions.find((o) => o.value === param);
  return match ? match.value : "question";
}

// ─── Service-specific intake questions ──────────────────────────────────────

type ExtraField = {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "select";
  options?: string[];
};

const extraFields: Partial<Record<ServiceKey, ExtraField[]>> = {
  recording: [
    {
      name: "song_type",
      label: "Type of song",
      placeholder: "e.g. singer-songwriter, full band, vocal only…",
      type: "text",
    },
    {
      name: "demo",
      label: "Do you have a demo or voice memo?",
      type: "select",
      placeholder: "",
      options: ["Yes — I'll share a link in the message", "Not yet", "I have lyrics / chords only"],
    },
    {
      name: "session_tier",
      label: "Session type you're considering",
      type: "select",
      placeholder: "",
      options: ["Song Capture (demo / voice)", "Produced Session (full arrangement)", "Artist Session (premium collaboration)", "Not sure yet"],
    },
  ],
  lessons: [
    {
      name: "instrument",
      label: "What do you want to learn?",
      type: "select",
      placeholder: "",
      options: ["Piano", "Guitar", "Music theory", "Multiple / not sure"],
    },
    {
      name: "level",
      label: "Experience level",
      type: "select",
      placeholder: "",
      options: ["Complete beginner", "Some experience", "Intermediate", "Advanced"],
    },
    {
      name: "format",
      label: "Preferred format",
      type: "select",
      placeholder: "",
      options: ["Online (Zoom / FaceTime)", "In-person — Bay Area", "Either works"],
    },
  ],
  scoring: [
    {
      name: "project_type",
      label: "Project type",
      type: "select",
      placeholder: "",
      options: ["Indie game", "Short film", "Trailer / promo", "Branded / commercial", "Other"],
    },
    {
      name: "timeline",
      label: "Timeline",
      type: "text",
      placeholder: "e.g. 6 weeks, by August, flexible…",
    },
    {
      name: "budget",
      label: "Budget range",
      type: "select",
      placeholder: "",
      options: ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+", "Not sure — open to discuss"],
    },
  ],
  production: [
    {
      name: "project_stage",
      label: "Where is your project?",
      type: "select",
      placeholder: "",
      options: ["Idea / concept only", "Voice memos / demos", "Tracking started", "Needs finishing / direction"],
    },
    {
      name: "songs",
      label: "Number of songs",
      type: "select",
      placeholder: "",
      options: ["1 song", "2–4 songs (EP)", "5+ songs (album)", "Not sure yet"],
    },
  ],
  "mix-master": [
    {
      name: "service_type",
      label: "What do you need?",
      type: "select",
      placeholder: "",
      options: ["Mixing only", "Mastering only", "Mix + Master", "Not sure"],
    },
    {
      name: "songs",
      label: "Number of songs",
      type: "text",
      placeholder: "e.g. 1 single, 4-song EP…",
    },
  ],
};

// ─── Form component ──────────────────────────────────────────────────────────

function inputClass(extra = "") {
  return `rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-body text-sm text-white/80 placeholder-white/20 outline-none backdrop-blur-sm transition-all focus:border-white/20 focus:bg-white/[0.05] ${extra}`;
}

function ContactForm() {
  const params = useSearchParams();
  const subjectParam = params.get("subject");

  const [serviceKey, setServiceKey] = useState<ServiceKey>(paramToKey(subjectParam));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [extras, setExtras] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const key = paramToKey(params.get("subject"));
    setServiceKey(key);
    setExtras({});
  }, [params]);

  const currentFields = extraFields[serviceKey] ?? [];
  const subjectLabel =
    subjectOptions.find((o) => o.value === serviceKey)?.label ?? "";

  function handleExtra(name: string, value: string) {
    setExtras((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setServerError("");

    const extraLabeled: Record<string, string> = {};
    currentFields.forEach((f) => {
      if (extras[f.name]) {
        extraLabeled[f.label] = extras[f.name];
      }
    });

    const result = await sendContactEmail({
      name,
      email,
      subject: subjectLabel || serviceKey || "General inquiry",
      message,
      extras: extraLabeled,
    });

    setLoading(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setServerError(result.error ?? "Something went wrong — please try again or email directly.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 py-16 text-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
            <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-3xl font-light text-white/85">Message received.</h3>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-white/40">
              I&rsquo;ll respond personally within 24–48 hours. If it&rsquo;s
              time-sensitive, feel free to reach out directly.
            </p>
          </div>
          <Link href="/" className="mt-4 font-body text-xs uppercase tracking-widest text-white/25 underline-offset-4 transition-colors hover:text-white/55 hover:underline">
            ← Back to home
          </Link>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          {/* Name + email */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={inputClass()}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={inputClass()}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">
              What can I help with?
            </label>
            <select
              required
              value={serviceKey}
              onChange={(e) => {
                setServiceKey(e.target.value as ServiceKey);
                setExtras({});
              }}
              className={inputClass()}
              style={{ colorScheme: "dark" }}
            >
              <option value="" disabled>Select a topic…</option>
              {subjectOptions.map((o) => (
                <option key={o.value} value={o.value} className="bg-neutral-900">
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Service-specific fields */}
          <AnimatePresence mode="wait">
            {currentFields.length > 0 && (
              <motion.div
                key={serviceKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {currentFields.map((field) => (
                  <div key={field.name} className="flex flex-col gap-2">
                    <label className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        value={extras[field.name] ?? ""}
                        onChange={(e) => handleExtra(field.name, e.target.value)}
                        className={inputClass()}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" disabled>Select…</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt} className="bg-neutral-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        value={extras[field.name] ?? ""}
                        onChange={(e) => handleExtra(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className={inputClass()}
                      />
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] uppercase tracking-[0.3em] text-white/30">
              Tell me more
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="What are you working on? A voice memo link, a rough idea, a timeline — anything helps."
              className={`${inputClass()} resize-none`}
            />
          </div>

          {/* Error */}
          {serverError && (
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-body text-sm text-red-300/80">
              {serverError}
            </p>
          )}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 rounded-full border border-amber-500/35 bg-amber-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-amber-400/55 hover:bg-amber-500/[0.18] disabled:opacity-50"
            >
              {loading ? (
                <span className="font-body text-sm font-medium tracking-wide text-amber-100/90">
                  Sending…
                </span>
              ) : (
                <>
                  <span className="font-body text-sm font-medium tracking-wide text-amber-100/90 group-hover:text-amber-50">
                    Send message
                  </span>
                  <svg
                    className="h-3.5 w-3.5 text-amber-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-amber-300/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      <section className="relative z-10 mx-auto max-w-2xl px-6 pb-32 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-white/25">
            Get in touch
          </p>
          <h1 className="font-display text-5xl font-light leading-tight text-white/90 sm:text-6xl">
            Let&rsquo;s make
            <br />
            <span className="italic text-white/50">something real.</span>
          </h1>
          <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-white/35">
            Whether you have a finished song, a half-formed idea, or you&rsquo;re
            just curious — reach out. I respond to everything personally.
          </p>
        </motion.div>

        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </section>

      <footer className="relative z-10 border-t border-white/[0.05] px-8 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-body text-xs text-white/20 transition-colors hover:text-white/40">
            ← JW Music Company
          </Link>
          <p className="font-body text-xs text-white/20">San Francisco Bay Area</p>
        </div>
      </footer>
    </main>
  );
}
