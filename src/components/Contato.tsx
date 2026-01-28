import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contato = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Contato
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 text-foreground">
              Agende sua consulta
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Estou pronto para cuidar da saúde do seu coração. Entre em contato
              e marque sua avaliação.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-secondary text-secondary-foreground border-0">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      Vamos conversar?
                    </h3>
                    <p className="text-secondary-foreground/80">
                      Agende uma consulta e dê o primeiro passo para cuidar
                      melhor do seu coração.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-secondary-foreground/80">(00) 00000-0000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">E-mail</p>
                        <p className="text-secondary-foreground/80">contato@seuemail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Endereço</p>
                        <p className="text-secondary-foreground/80">
                          Rua Exemplo, 123 - Sala 456
                          <br />
                          Bairro, Cidade - UF
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Horário de Atendimento</p>
                        <p className="text-secondary-foreground/80">
                          Segunda a Sexta: 8h às 18h
                          <br />
                          Sábado: 8h às 12h
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-card border-border card-shadow">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-card-foreground mb-2">
                      Solicite seu agendamento
                    </h3>
                    <p className="text-muted-foreground">
                      Preencha seus dados e entraremos em contato.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          placeholder="(00) 00000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          E-mail
                        </label>
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensagem (opcional)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Conte-nos um pouco sobre o motivo da consulta..."
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Calendar className="w-5 h-5 mr-2" />
                      Solicitar Agendamento
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
