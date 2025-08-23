import Header from "@/widgets/header/ui/Header";
import Hero from "@/widgets/hero/ui/Hero";
import HowItWorks from "@/features/how-it-works/ui/HowItWorks";
import Features from "@/features/features-list/ui/Features";
import FAQ from "@/features/faq/ui/FAQ";
import Footer from "@/widgets/footer/ui/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
