import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quando devo procurar um cardiologista?",
    answer:
      "É recomendado procurar um cardiologista se você tem mais de 40 anos (homens) ou 50 anos (mulheres), possui histórico familiar de doenças cardíacas, tem pressão alta, colesterol elevado, diabetes, é fumante, sedentário ou está acima do peso. Também procure ajuda se sentir dor no peito, falta de ar, palpitações ou cansaço excessivo.",
  },
  {
    question: "O que é um check-up cardiológico?",
    answer:
      "O check-up cardiológico é uma avaliação completa da saúde do seu coração. Inclui consulta médica detalhada, exame físico, e exames complementares como eletrocardiograma, ecocardiograma e exames de sangue. O objetivo é identificar fatores de risco e detectar precocemente qualquer alteração cardíaca.",
  },
  {
    question: "Os exames de rotina para o coração são dolorosos?",
    answer:
      "Não! A maioria dos exames cardiológicos é completamente indolor. O eletrocardiograma usa apenas adesivos na pele, o ecocardiograma é como uma ultrassonografia, e o teste ergométrico é como caminhar numa esteira. Você ficará confortável durante todo o processo.",
  },
  {
    question: "Com que frequência devo fazer check-up cardíaco?",
    answer:
      "Para pessoas sem fatores de risco, recomenda-se um check-up a cada 2-3 anos após os 40 anos. Se você tem fatores de risco como hipertensão, diabetes ou histórico familiar, o acompanhamento deve ser anual ou conforme orientação médica personalizada.",
  },
  {
    question: "Pressão alta tem cura?",
    answer:
      "A hipertensão primária geralmente não tem cura, mas pode ser muito bem controlada. Com medicação adequada, alimentação saudável, exercícios regulares e acompanhamento médico, é possível manter a pressão em níveis seguros e ter uma vida completamente normal e saudável.",
  },
  {
    question: "Posso fazer exercícios físicos com problema cardíaco?",
    answer:
      "Na maioria dos casos, sim! A atividade física é fundamental para a saúde cardiovascular. Porém, é essencial uma avaliação médica prévia para determinar o tipo e intensidade de exercício mais adequado para sua condição. Exercícios orientados são seguros e benéficos.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Perguntas Frequentes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
            Tire suas dúvidas
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Respostas para as perguntas mais comuns sobre saúde cardiovascular
            e nosso atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:card-shadow-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
