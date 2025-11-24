import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ToolsSection from "@/components/ToolsSection";
import AppSection from "@/components/AppSection";
import InternationalSection from "@/components/InternationalSection";
import StatisticsSection from "@/components/StatisticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ToolsSection />
      <AppSection />
      <InternationalSection />
      <StatisticsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

