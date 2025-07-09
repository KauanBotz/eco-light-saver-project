import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import SimulatorForm from "@/components/SimulatorForm";
import ContactForm from "@/components/ContactForm";
import ProfessionalFooter from "@/components/ProfessionalFooter";

const Simulacao = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vim da página de simulação e gostaria de saber mais sobre o desconto na conta de luz.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b py-4 px-6 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
            <img 
              src="/lovable-uploads/b7ac794d-3326-4b71-8e65-57403fb00852.png" 
              alt="ECOFAD Logo" 
              className="h-12"
            />
          </div>
          <Button variant="cta" size="sm" onClick={handleWhatsAppClick}>
            Falar Conosco
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
              <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
              Simulador de <span className="text-primary">Economia</span>
            </h1>
            <p className="text-xl mb-12 text-muted-foreground leading-relaxed">
              Descubra exatamente quanto você pode economizar na sua conta de luz
            </p>
          </div>
        </div>
      </section>

      {/* Simulação */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Informações */}
            <div>
              <Card className="p-8 bg-muted/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Como Funciona a Simulação?
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-primary-foreground">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Informe o valor da sua conta</h4>
                        <p className="text-muted-foreground">Digite o valor atual da sua conta de luz para calcularmos sua economia.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-primary-foreground">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Veja sua economia</h4>
                        <p className="text-muted-foreground">Calculamos automaticamente sua economia mensal e anual com base no desconto de até 20%.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-primary-foreground">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Garanta seu desconto</h4>
                        <p className="text-muted-foreground">Entre em contato conosco pelo WhatsApp para garantir essa economia.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">💡 Dica Importante</h4>
                    <p className="text-sm text-foreground">
                      A simulação é baseada em desconto de até 20%. O valor exato pode variar conforme sua região e consumo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Simulador */}
            <div>
              <SimulatorForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-6 bg-muted" id="contato">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Gostou da Simulação?
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha seus dados e garantir esse desconto agora mesmo
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  );
};

export default Simulacao;