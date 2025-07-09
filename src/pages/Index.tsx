import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  BookOpen,
  BarChart3,
  Flame
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary py-6 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-center">
          <img 
            src="/lovable-uploads/b7ac794d-3326-4b71-8e65-57403fb00852.png" 
            alt="ECOFAD Logo" 
            className="h-16"
          />
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-secondary-foreground">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
            <Leaf className="w-4 h-4 mr-2" />
            Demonstração ECOFAD
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Escolha Sua <span className="text-primary">Experiência</span><br />
            ECOFAD
          </h1>
          
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            3 abordagens diferentes para apresentar nossa solução de economia na conta de luz. 
            Escolha a que mais combina com você:
          </p>
        </div>
      </section>

      {/* Versões */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Storytelling */}
            <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Versão Storytelling
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Narrativa envolvente com histórias reais de transformação e conexão emocional.
                </p>
                <Link to="/storytelling">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Explorar Storytelling
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Objetiva */}
            <Card className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Versão Objetiva
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Abordagem direta e profissional, focada em dados e benefícios claros.
                </p>
                <Link to="/objetiva">
                  <Button variant="cta" className="w-full">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Ver Versão Objetiva
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 px-6 text-secondary-foreground">
        <div className="container mx-auto text-center">
          <img 
            src="/lovable-uploads/f792746b-feb5-42c7-b9e2-a101e8ac277d.png" 
            alt="ECOFAD Logo" 
            className="h-16 mx-auto mb-6"
          />
          <p className="text-lg mb-4">
            ECOFAD - Energia limpa, economia garantida, futuro sustentável.
          </p>
          <p className="text-sm opacity-75">
            © 2024 ECOFAD. Todos os direitos reservados. | Regulamentado pela ANEEL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;