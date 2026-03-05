import { lessonsLearned } from "@/data/dashboard-data";
import { Wrench, Users, Briefcase } from "lucide-react";

const columns = [
  { key: "technical" as const, title: "Technical", icon: Wrench, color: "text-info" },
  { key: "operational" as const, title: "Operational", icon: Users, color: "text-warning" },
  { key: "business" as const, title: "Business", icon: Briefcase, color: "text-accent" },
];

const LessonsLearned = () => (
  <section className="py-12">
    <div className="section-container">
      <h2 className="text-2xl font-bold text-foreground mb-1">Lessons Learned</h2>
      <p className="text-muted-foreground mb-6">Key insights gathered from deployments and pilots.</p>
      <div className="grid md:grid-cols-3 gap-5">
        {columns.map((col) => {
          const Icon = col.icon;
          return (
            <div key={col.key} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Icon className={`h-5 w-5 ${col.color}`} />
                <h3 className="font-bold text-foreground">{col.title}</h3>
              </div>
              <ul className="space-y-3">
                {lessonsLearned[col.key].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-3 border-l-2 border-border">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LessonsLearned;
