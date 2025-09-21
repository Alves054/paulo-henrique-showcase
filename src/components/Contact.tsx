import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-text-gradient bg-clip-text">
              Vamos Trabalhar Juntos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto a novos desafios e oportunidades. 
            Entre em contato e vamos transformar suas ideias em realidade!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Entre em <span className="text-primary">Contato</span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefere um contato mais direto? Use uma das opções abaixo ou preencha o formulário.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                      <a 
                        href="https://wa.me/5511976357598" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (11) 97635-7598
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">LinkedIn</h4>
                      <a 
                        href="https://br.linkedin.com/in/paulohenrique-dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        /in/paulohenrique-dev
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card-gradient border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/Alves054" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        @Alves054
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="bg-card-gradient border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Envie uma <span className="text-primary">Mensagem</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-muted-foreground/20 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu E-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-muted-foreground/20 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua Mensagem"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-muted/50 border-muted-foreground/20 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-primary transition-all duration-300"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;