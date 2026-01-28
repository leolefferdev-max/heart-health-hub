import { motion } from "framer-motion";
import { Activity, HeartPulse, Stethoscope, Dumbbell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const especialidades = [
  {
    icon: Activity,
    title: "Avaliação de Risco Cardiovascular",
    description:
      "Análise completa dos fatores de risco como histórico familiar, pressão arterial, colesterol e hábitos de vida para prevenção de doenças cardíacas.",
  },
  {
    icon: HeartPulse,
    title: "Hipertensão e Colesterol",
    description:
      "Acompanhamento especializado para controle da pressão arterial e níveis de colesterol, reduzindo riscos de infarto e AVC.",
  },
  {
    icon: Stethoscope,
    title: "Pré e Pós-Operatório Cardíaco",
    description:
      "Preparação e acompanhamento cuidadoso para cirurgias cardíacas, garantindo sua segurança e melhor recuperação possível.",
  },
  {
    icon: Dumbbell,
    title: "Exercício Físico Seguro",
    description:
      "Orientação personalizada para prática de atividades físicas de forma segura, respeitando as condições do seu coração.",
  },
];

const Especialidades = () => {
  return (
    <section id="especialidades" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Cuidado completo para o seu coração
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Atendimento especializado em todas as fases do cuidado cardiovascular,
            da prevenção ao tratamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {especialidades.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:card-shadow-hover transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
