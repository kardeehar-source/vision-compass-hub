import { governance } from "@/data/dashboard-data";
import { Crown, Server, Flag, Handshake } from "lucide-react";

const icons = [Crown, Server, Flag, Handshake];

const Governance = () => (
  <section className="py-12 pb-20">
    <div className="section-container">
      <h2 className="text-2xl font-bold text-foreground mb-1">Program Governance</h2>
      <p className="text-muted-foreground mb-6">Organizational structure driving the CV program.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {governance.map((g, i) => {
          const Icon = icons[i];
          return (
            <div key={g.role} className="rounded-xl border bg-card p-6 shadow-sm text-center flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">{g.role}</h3>
              <p className="text-sm font-medium text-accent">{g.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{g.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Governance;
