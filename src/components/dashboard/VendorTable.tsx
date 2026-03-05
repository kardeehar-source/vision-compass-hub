import { vendors } from "@/data/dashboard-data";

const VendorTable = () => (
  <section className="py-12">
    <div className="section-container">
      <h2 className="text-2xl font-bold text-foreground mb-1">Vendor Landscape</h2>
      <p className="text-muted-foreground mb-6">Comparison of key technology partners.</p>
      <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Vendor</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Footprint</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Strengths</th>
              <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Limitations</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.name} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{v.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.footprint}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.strengths}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.limitations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default VendorTable;
