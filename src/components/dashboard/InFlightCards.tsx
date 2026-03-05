import { inFlightUseCases } from "@/data/dashboard-data";
import { Target, MapPin, Cpu, AlertTriangle, TrendingUp } from "lucide-react";

const statusStyle: Record<string, string> = {
  Live: "bg-success/15 text-success",
  Pilot: "bg-info/15 text-info",
  PoC: "bg-warning/15 text-warning",
  MVP: "bg-accent/15 text-accent",
};

const InFlightCards = () => (
  <section className="py-12">
    <div className="section-container">
      <h2 className="text-2xl font-bold text-foreground mb-1">In-Flight Use Cases</h2>
      <p className="text-muted-foreground mb-6">Active projects currently being developed or deployed.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {inFlightUseCases.map((uc) => (
          <div key={uc.name} className="rounded-xl border bg-card p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-foreground">{uc.name}</h3>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyle[uc.status]}`}>
                {uc.status}
              </span>
            </div>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> {uc.site}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Cpu className="h-4 w-4 text-primary" /> {uc.technology}
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Target className="h-4 w-4 text-primary mt-0.5" /> {uc.objective}
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-success mt-0.5" /> {uc.impact}
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <AlertTriangle className="h-4 w-4 text-warning mt-0.5" /> {uc.challenges}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InFlightCards;
