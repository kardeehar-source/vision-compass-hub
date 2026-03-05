import { roadmapPhases } from "@/data/dashboard-data";

const Roadmap = () => (
  <section className="py-12">
    <div className="section-container">
      <h2 className="text-2xl font-bold text-foreground mb-1">Scaling Roadmap</h2>
      <p className="text-muted-foreground mb-6">Phased approach to industrializing Computer Vision.</p>
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
        <div className="grid md:grid-cols-4 gap-5">
          {roadmapPhases.map((p, i) => (
            <div key={p.phase} className="relative">
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4 relative z-10">
                {i + 1}
              </div>
              <div className="rounded-xl border bg-card p-5 shadow-sm h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">{p.phase}</p>
                <h3 className="text-lg font-bold text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.period}</p>
                <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                <ul className="space-y-1">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Roadmap;
