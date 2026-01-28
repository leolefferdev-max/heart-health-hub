import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import Sobre from "@/components/Sobre";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Especialidades />
      <Sobre />
      <FAQ />
      <Contato />
      <Footer />
    </main>
  );
};

export default Index;
