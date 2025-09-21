import { Button } from "@/components/ui/button";
import { Github, Linkedin, MessageCircle, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-card-gradient border-2 border-primary/20 flex items-center justify-center shadow-glow-primary">
              <span className="text-4xl font-bold text-transparent bg-text-gradient bg-clip-text">PH</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-text-gradient bg-clip-text">
              Paulo Henrique
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            Desenvolvedor <span className="text-primary">FULLSTACK</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialista em <span className="text-accent font-semibold">React</span>, 
            <span className="text-secondary font-semibold"> PHP</span> e tecnologias modernas. 
            Transformo ideias em experiências digitais incríveis.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Vamos Conversar
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-glow-accent hover:shadow-glow-accent transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#projects">
                <Download className="mr-2 h-5 w-5" />
                Ver Projetos
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/Alves054" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-glow-primary hover:shadow-glow-primary group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="https://br.linkedin.com/in/paulohenrique-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent/10 transition-all duration-300 hover:scale-110 shadow-glow-accent hover:shadow-glow-accent group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            
            <a 
              href="https://wa.me/5511976357598" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-secondary/10 transition-all duration-300 hover:scale-110 shadow-glow-secondary hover:shadow-glow-secondary group"
            >
              <MessageCircle className="h-6 w-6 text-muted-foreground group-hover:text-secondary transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;