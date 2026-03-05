export const metrics = [
  { label: "Sites Engaged", value: "12", icon: "Building2" },
  { label: "Active Deployments", value: "8", icon: "Rocket" },
  { label: "Pilots in Progress", value: "5", icon: "FlaskConical" },
  { label: "Est. Cost Avoidance", value: "$4.2M", icon: "TrendingUp" },
];

export type EstateEntry = {
  site: string;
  lineArea: string;
  useCase: string;
  vendor: string;
  status: "Live" | "Pilot" | "PoC" | "Stopped" | "MVP";
  notes: string;
};

export const estateData: EstateEntry[] = [
  { site: "Wuxi", lineArea: "Line 3 – Packaging", useCase: "Defect Detection", vendor: "Deep Vision", status: "Live", notes: "Fully operational since Q2 2025" },
  { site: "Sweden", lineArea: "Line 1 – Secondary Pack", useCase: "Packaging Inspection", vendor: "Landing AI", status: "Stopped", notes: "Paused due to ROI concerns" },
  { site: "Macclesfield", lineArea: "Aseptic Suite B", useCase: "Aseptic Monitoring", vendor: "SoftServe", status: "MVP", notes: "Initial validation in progress" },
  { site: "Dublin", lineArea: "Line 5 – Blister", useCase: "Blister Integrity Check", vendor: "Keyence", status: "Live", notes: "Running with 99.2% accuracy" },
  { site: "Singapore", lineArea: "Line 2 – Carton", useCase: "Label Verification", vendor: "Deep Vision", status: "Pilot", notes: "6-week pilot started Jan 2026" },
  { site: "Anagni", lineArea: "Line 7 – Filling", useCase: "Fill Level Inspection", vendor: "Landing AI", status: "PoC", notes: "Proof of concept phase" },
];

export const inFlightUseCases = [
  {
    name: "Sterile Behavior Monitoring",
    site: "Macclesfield",
    technology: "SoftServe – Pose Estimation",
    objective: "Detect gowning and behavioral deviations in aseptic areas",
    impact: "Reduce contamination events by 30%",
    challenges: "Camera placement in cleanroom, data privacy concerns",
    status: "MVP" as const,
  },
  {
    name: "Blister Pack Inspection",
    site: "Dublin",
    technology: "Keyence – Inline Vision",
    objective: "Automated detection of missing or damaged tablets in blister packs",
    impact: "$1.2M annual cost avoidance",
    challenges: "High SKU variability, changeover validation",
    status: "Live" as const,
  },
  {
    name: "Label Verification",
    site: "Singapore",
    technology: "Deep Vision – OCR + Classification",
    objective: "Verify correct label placement and content on cartons",
    impact: "Eliminate manual label checks on Line 2",
    challenges: "Multi-language label support, lighting consistency",
    status: "Pilot" as const,
  },
  {
    name: "Fill Level Detection",
    site: "Anagni",
    technology: "Landing AI – Edge Deployment",
    objective: "Real-time fill level measurement for liquid vials",
    impact: "Reduce overfill waste by 15%",
    challenges: "Glass reflections, speed of line",
    status: "PoC" as const,
  },
];

export const lessonsLearned = {
  technical: [
    "Legacy PLC integration challenges – older systems lack standard interfaces",
    "Camera placement constraints in cleanroom and aseptic environments",
    "Networking and firewall limitations at manufacturing sites",
    "Edge compute hardware selection impacts model inference speed",
  ],
  operational: [
    "High SKU changeover validation effort for multi-product lines",
    "Need for trained operators to manage and retrain models",
    "Change management and shop-floor buy-in are critical success factors",
    "Data labeling requires domain expertise from quality teams",
  ],
  business: [
    "Hardware and integration costs often underestimated in business cases",
    "Local vendor solutions are easier to deploy but harder to scale globally",
    "ROI timelines are longer than initially projected for complex use cases",
    "Regulatory validation adds significant time to deployment",
  ],
};

export const vendors = [
  {
    name: "Landing AI",
    footprint: "Global – Cloud & Edge",
    strengths: "Strong data-centric AI approach, flexible deployment, good documentation",
    limitations: "Higher cost at scale, requires cloud connectivity for training",
  },
  {
    name: "Deep Vision",
    footprint: "APAC & Europe",
    strengths: "Fast deployment, strong OCR capabilities, competitive pricing",
    limitations: "Limited support in Americas, smaller model library",
  },
  {
    name: "SoftServe",
    footprint: "Europe & North America",
    strengths: "Custom development capability, strong in pose estimation and behavior analysis",
    limitations: "Higher professional services cost, longer implementation cycles",
  },
  {
    name: "Keyence",
    footprint: "Global",
    strengths: "Proven industrial hardware, robust inline inspection, excellent support",
    limitations: "Less flexible for custom AI models, proprietary ecosystem",
  },
];

export const suitabilityMap = {
  high: [
    { area: "Blister Packaging", reason: "Standardized geometry, clear defect patterns" },
    { area: "Carton Inspection", reason: "Well-defined label and print verification criteria" },
    { area: "Sterile Behavior Monitoring", reason: "High compliance value, clear behavioral rules" },
  ],
  medium: [
    { area: "Bagging Processes", reason: "Variable product shapes, but feasible with training data" },
    { area: "Vial Fill Inspection", reason: "Glass reflections require specialized lighting" },
  ],
  low: [
    { area: "Legacy Lines (Old PLC/HMI)", reason: "No standard integration points, high retrofit cost" },
    { area: "Manual Assembly Stations", reason: "Highly variable workflows, difficult to standardize" },
  ],
};

export const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "MVP",
    period: "Q1–Q2 2025",
    description: "Pilot implementations and technical validation at 3 reference sites",
    items: ["Camera hardware selection", "Edge compute architecture", "2–3 use case pilots"],
  },
  {
    phase: "Phase 2",
    title: "Reference Deployment",
    period: "Q3–Q4 2025",
    description: "Deploy in selected scalable lines and confirm ROI",
    items: ["Standardize deployment playbook", "Confirm cost avoidance metrics", "Train site champions"],
  },
  {
    phase: "Phase 3",
    title: "Industrialization",
    period: "Q1–Q2 2026",
    description: "Define standard architecture and vendor model for repeatable deployment",
    items: ["Reference architecture document", "Vendor framework agreement", "MLOps pipeline setup"],
  },
  {
    phase: "Phase 4",
    title: "Global Scale",
    period: "Q3 2026+",
    description: "Roll out across all suitable sites with standardized approach",
    items: ["Site readiness assessments", "Global deployment tracker", "Continuous model improvement"],
  },
];

export const governance = [
  { role: "Program Lead", name: "VP Digital Manufacturing", description: "Overall program accountability, budget, and executive reporting" },
  { role: "Technical Architecture", name: "Enterprise Architecture Team", description: "Platform standards, integration patterns, and technology decisions" },
  { role: "Site Champions", name: "Local Engineering Leads", description: "On-site deployment execution, operator training, and feedback" },
  { role: "Vendor Partners", name: "Strategic Vendor Panel", description: "Technology delivery, support, and innovation roadmap alignment" },
];
