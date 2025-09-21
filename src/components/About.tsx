import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend",
      description: "React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS",
      color: "primary"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend",
      description: "PHP, Node.js, MySQL, PostgreSQL, APIs RESTful",
      color: "secondary"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Fullstack",
      description: "Desenvolvimento completo, arquitetura de sistemas, DevOps",
      color: "accent"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile",
      description: "React Native, Progressive Web Apps, Design Responsivo",
      color: "primary"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-text-gradient bg-clip-text">
              Sobre Mim
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. 
            Com experiência em tecnologias modernas, foco em entregar produtos de qualidade 
            que fazem a diferença na vida das pessoas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className={`bg-card-gradient border-${skill.color}/20 hover:border-${skill.color}/40 transition-all duration-300 hover:scale-105 animate-scale-in group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`mb-4 text-${skill.color} group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Minha <span className="text-primary">Jornada</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Minha paixão pela programação começou cedo, e desde então venho me dedicando 
                a aprender e dominar as melhores tecnologias do mercado.
              </p>
              <p>
                Especializo-me em desenvolvimento <span className="text-accent font-semibold">FULLSTACK</span>, 
                com foco em <span className="text-primary font-semibold">React</span> no frontend e 
                <span className="text-secondary font-semibold"> PHP</span> no backend.
              </p>
              <p>
                Sempre busco criar soluções elegantes, performáticas e que proporcionem 
                a melhor experiência possível para os usuários.
              </p>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient opacity-20 rounded-2xl blur-xl" />
              <Card className="relative bg-card-gradient border-primary/20">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">3+</div>
                      <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Tecnologias</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Dedicação</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;