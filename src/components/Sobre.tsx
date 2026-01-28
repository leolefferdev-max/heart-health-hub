import { motion } from "framer-motion";
import { GraduationCap, Award, Building2 } from "lucide-react";

const Sobre = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl overflow-hidden card-shadow">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                alt="Consultório médico"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Sobre Mim
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
                Dr. Nome Sobrenome
              </h2>
              <p className="text-xl text-muted-foreground mt-2">
                Cardiologista • CRM 00000
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Com mais de 15 anos de experiência em cardiologia, minha missão é 
              oferecer um atendimento humanizado e baseado nas mais recentes 
              evidências científicas. Acredito que a prevenção é o melhor 
              tratamento, e trabalho junto com meus pacientes para promover 
              uma vida mais saudável e plena.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Formação</h4>
                  <p className="text-muted-foreground">
                    Medicina pela Universidade Federal • Residência em Cardiologia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Especialização</h4>
                  <p className="text-muted-foreground">
                    Título de Especialista pela Sociedade Brasileira de Cardiologia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Atuação</h4>
                  <p className="text-muted-foreground">
                    Consultório particular • Hospital de Referência
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
