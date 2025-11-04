import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import BusinessVerticals from "@/components/BusinessVerticals";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanyOverview />
      <BusinessVerticals />
      <Leadership />
      <Achievements />
      <ContactSection />
      <Footer />
    </div>
  );
}
