import { Building2, Rocket, FlaskConical, TrendingUp } from "lucide-react";
import { metrics } from "@/data/dashboard-data";

const iconMap = { Building2, Rocket, FlaskConical, TrendingUp };

const HeroSection = () => (
  <section className="py-12 sm:py-16">
    <div className="section-container">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Program Dashboard</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Computer Vision in Operations
        </h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          Centralized view of CV deployments, in-flight projects, and the roadmap to scale across manufacturing sites.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => {
          const Icon = iconMap[m.icon as keyof typeof iconMap];
          return (
            <div key={m.label} className="rounded-xl border bg-card p-5 flex flex-col gap-3 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">{m.value}</p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HeroSection;
