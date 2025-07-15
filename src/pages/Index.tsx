import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AgroTourism from "@/components/AgroTourism";
import EcoCommerce from "@/components/EcoCommerce";
import Sustainability from "@/components/Sustainability";
import SkillDevelopment from "@/components/SkillDevelopment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AgroTourism />
      <EcoCommerce />
      <Sustainability />
      <SkillDevelopment />
      <Footer />
    </div>
  );
};

export default Index;
