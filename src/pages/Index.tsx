import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import CategoryGrid from "@/components/CategoryGrid";
import CTABanner from "@/components/CTABanner";
import FeaturedJobs from "@/components/FeaturedJobs";
import LatestJobs from "@/components/LatestJobs";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <CompanyLogos />
    <CategoryGrid />
    <CTABanner />
    <FeaturedJobs />
    <LatestJobs />
    <Footer />
  </div>
);

export default Index;
