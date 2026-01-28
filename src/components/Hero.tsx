import { motion } from "framer-motion";
import { Heart, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" />
              <span className="font-serif text-xl font-semibold text-foreground">
                Dr. Nome Sobrenome
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#especialidades" className="text-muted-foreground hover:text-foreground transition-colors">
                Especialidades
              </a>
              <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                Dúvidas
              </a>
              <Button size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar
              </Button>
            </div>
            <Button size="sm" className="md:hidden">
              <Phone className="w-4 h-4" />
            </Button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
              <Heart className="w-4 h-4 text-primary animate-pulse-gentle" />
              <span className="text-sm font-medium text-accent-foreground">
                Cardiologista • CRM 00000
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Cuidando do seu{" "}
              <span className="text-gradient">coração</span>{" "}
              com dedicação
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Atendimento humanizado e especializado para prevenção, diagnóstico e 
              tratamento de doenças cardiovasculares. Seu coração em boas mãos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                (00) 00000-0000
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">Pacientes atendidos</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <div className="relative bg-card rounded-3xl card-shadow overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop&crop=face"
                  alt="Médico cardiologista"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
