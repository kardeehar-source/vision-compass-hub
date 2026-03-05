import { useState, useMemo } from "react";
import { estateData, type EstateEntry } from "@/data/dashboard-data";
import { ArrowUpDown, Search } from "lucide-react";

const statusColor: Record<string, string> = {
  Live: "bg-success/15 text-success",
  Pilot: "bg-info/15 text-info",
  PoC: "bg-warning/15 text-warning",
  MVP: "bg-accent/15 text-accent",
  Stopped: "bg-destructive/15 text-destructive",
};

const EstateTable = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [sortKey, setSortKey] = useState<keyof EstateEntry>("site");
  const [sortAsc, setSortAsc] = useState(true);

  const statuses = ["All", ...Array.from(new Set(estateData.map((d) => d.status)))];

  const filtered = useMemo(() => {
    let data = estateData.filter(
      (d) =>
        (statusFilter === "All" || d.status === statusFilter) &&
        (search === "" ||
          Object.values(d).some((v) => v.toLowerCase().includes(search.toLowerCase())))
    );
    data.sort((a, b) => {
      const av = a[sortKey].toLowerCase();
      const bv = b[sortKey].toLowerCase();
      return sortAsc ? av.localeCompare(bv) : bv.localeCompare(av);
    });
    return data;
  }, [search, statusFilter, sortKey, sortAsc]);

  const toggleSort = (key: keyof EstateEntry) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(true); }
  };

  const headers: { key: keyof EstateEntry; label: string }[] = [
    { key: "site", label: "Site" },
    { key: "lineArea", label: "Line / Area" },
    { key: "useCase", label: "Use Case" },
    { key: "vendor", label: "Vendor / Technology" },
    { key: "status", label: "Status" },
    { key: "notes", label: "Key Notes" },
  ];

  return (
    <section className="py-12">
      <div className="section-container">
        <h2 className="text-2xl font-bold text-foreground mb-1">Current State – CV Estate</h2>
        <p className="text-muted-foreground mb-6">Overview of all Computer Vision deployments across the network.</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              className="w-full rounded-lg border bg-card pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Search sites, use cases…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                  statusFilter === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:bg-secondary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                {headers.map((h) => (
                  <th
                    key={h.key}
                    className="px-4 py-3 text-left font-semibold text-muted-foreground cursor-pointer select-none hover:text-foreground"
                    onClick={() => toggleSort(h.key)}
                  >
                    <span className="inline-flex items-center gap-1">
                      {h.label}
                      <ArrowUpDown className="h-3 w-3" />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{d.site}</td>
                  <td className="px-4 py-3 text-muted-foreground">{d.lineArea}</td>
                  <td className="px-4 py-3 text-foreground">{d.useCase}</td>
                  <td className="px-4 py-3 text-muted-foreground">{d.vendor}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor[d.status]}`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{d.notes}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No matching entries</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EstateTable;
