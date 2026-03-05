import { suitabilityMap } from "@/data/dashboard-data";
import { CheckCircle2, MinusCircle, XCircle } from "lucide-react";

const tiers = [
  { key: "high" as const, label: "High Suitability", icon: CheckCircle2, color: "text-success", borderColor: "border-success/30", bg: "bg-success/5" },
  { key: "medium" as const, label: "Medium Suitability", icon: MinusCircle, color: "text-warning", borderColor: "border-warning/30", bg: "bg-warning/5" },
  { key: "low" as const, label: "Low Suitability", icon: XCircle, color: "text-destructive", borderColor: "border-destructive/30", bg: "bg-destructive/5" },
];

const SuitabilityMap = () => (
  <section className="py-12">
    <div className="section-container">
      <h2 className="text-2xl font-bold text-foreground mb-1">Suitability Map</h2>
      <p className="text-muted-foreground mb-6">Manufacturing areas ranked by CV readiness.</p>
      <div className="grid md:grid-cols-3 gap-5">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div key={tier.key} className={`rounded-xl border ${tier.borderColor} ${tier.bg} p-6`}>
              <div className="flex items-center gap-2 mb-4">
                <Icon className={`h-5 w-5 ${tier.color}`} />
                <h3 className="font-bold text-foreground">{tier.label}</h3>
              </div>
              <ul className="space-y-3">
                {suitabilityMap[tier.key].map((item) => (
                  <li key={item.area} className="text-sm">
                    <p className="font-medium text-foreground">{item.area}</p>
                    <p className="text-muted-foreground">{item.reason}</p>
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

export default SuitabilityMap;
