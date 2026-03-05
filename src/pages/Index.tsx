import HeroSection from "@/components/dashboard/HeroSection";
import EstateTable from "@/components/dashboard/EstateTable";
import InFlightCards from "@/components/dashboard/InFlightCards";
import LessonsLearned from "@/components/dashboard/LessonsLearned";
import VendorTable from "@/components/dashboard/VendorTable";
import SuitabilityMap from "@/components/dashboard/SuitabilityMap";
import Roadmap from "@/components/dashboard/Roadmap";
import Governance from "@/components/dashboard/Governance";
import { Eye } from "lucide-react";

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* Nav */}
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="section-container flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Eye className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-foreground text-sm">CV Operations</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#estate" className="hover:text-foreground transition-colors">Estate</a>
          <a href="#inflight" className="hover:text-foreground transition-colors">In-Flight</a>
          <a href="#lessons" className="hover:text-foreground transition-colors">Lessons</a>
          <a href="#vendors" className="hover:text-foreground transition-colors">Vendors</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
        </nav>
      </div>
    </header>

    <HeroSection />
    <div id="estate"><EstateTable /></div>
    <div id="inflight"><InFlightCards /></div>
    <div id="lessons"><LessonsLearned /></div>
    <div id="vendors"><VendorTable /></div>
    <SuitabilityMap />
    <div id="roadmap"><Roadmap /></div>
    <Governance />
  </div>
);

export default Index;
