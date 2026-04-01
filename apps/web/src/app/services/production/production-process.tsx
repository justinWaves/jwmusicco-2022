const steps = [
  {
    number: "01",
    title: "Discovery call",
    body: "We talk about your project, your references, and your vision. I listen more than I speak.",
  },
  {
    number: "02",
    title: "Creative direction",
    body: "I map out the sonic approach, instrumentation, and feel. You approve the direction before we record a note.",
  },
  {
    number: "03",
    title: "Build and track",
    body: "We build the arrangement together — beat by beat, layer by layer. You&rsquo;re involved at every decision point.",
  },
  {
    number: "04",
    title: "Mix and deliver",
    body: "Final mix, revisions, and stems delivered. Your record, ready for the world.",
  },
];

export function ProductionProcess() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col gap-4 p-6">
          <span className="font-display text-4xl font-light text-violet-500/20">{step.number}</span>
          <h3 className="font-display text-lg font-light text-white/75">{step.title}</h3>
          <p
            className="font-body text-sm leading-relaxed text-white/38"
            dangerouslySetInnerHTML={{ __html: step.body }}
          />
        </div>
      ))}
    </div>
  );
}
