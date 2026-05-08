import Hero from "@/components/Hero";
import Screens from "@/components/Screens";
import DesignSystem from "@/components/DesignSystem";
import TechPlan from "@/components/TechPlan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Screens />
      <DesignSystem />
      <TechPlan />
      <Footer />
    </main>
  );
}
