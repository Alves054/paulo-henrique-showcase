import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de E-commerce",
      description: "Plataforma completa de e-commerce com painel administrativo, carrinho de compras, pagamentos integrados e dashboard de vendas.",
      technologies: ["React", "PHP", "MySQL", "Stripe API"],
      image: "bg-gradient-to-br from-primary/20 to-accent/20",
      github: "#",
      demo: "#",
      color: "primary"
    },
    {
      title: "App de Gestão Financeira",
      description: "Aplicação web para controle financeiro pessoal com gráficos interativos, categorização de gastos e relatórios detalhados.",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      image: "bg-gradient-to-br from-secondary/20 to-primary/20",
      github: "#",
      demo: "#",
      color: "secondary"
    },
    {
      title: "Portal de Notícias",
      description: "CMS completo para portal de notícias com sistema de comentários, categorias, busca avançada e painel de administração.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "bg-gradient-to-br from-accent/20 to-secondary/20",
      github: "#",
      demo: "#",
      color: "accent"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos em tempo real, filtros avançados e exportação de relatórios.",
      technologies: ["React", "TypeScript", "D3.js", "API REST"],
      image: "bg-gradient-to-br from-primary-glow/20 to-accent/20",
      github: "#",
      demo: "#",
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-text-gradient bg-clip-text">
              Meus Projetos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus trabalhos mais recentes, mostrando diferentes tecnologias 
            e soluções criativas para problemas reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-card-gradient border-${project.color}/20 hover:border-${project.color}/40 transition-all duration-300 hover:scale-[1.02] animate-scale-in group overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className={`bg-${project.color}/20 text-${project.color} border-${project.color}/30`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="outline" className="border-muted-foreground/30">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10 transition-all duration-300`}
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  
                  <Button 
                    variant="default" 
                    size="sm" 
                    className={`bg-${project.color} hover:bg-${project.color}/90 text-${project.color === 'secondary' ? 'secondary-foreground' : 'primary-foreground'} transition-all duration-300`}
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Alves054" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Ver Todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;