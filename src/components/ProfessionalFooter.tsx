import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Leaf, Phone, Mail, MapPin } from "lucide-react";

const ProfessionalFooter = () => {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/lovable-uploads/a4ceeaa5-9729-4375-8bcb-2bc0770215b6.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <img 
                src="/lovable-uploads/f792746b-feb5-42c7-b9e2-a101e8ac277d.png" 
                alt="ECOFAD Logo" 
                className="h-16 mb-6 filter brightness-0 invert"
              />
              <p className="text-lg mb-6 leading-relaxed opacity-90">
                Energia limpa, economia garantida, futuro sustentável. 
                Transformamos sua relação com a energia elétrica através do mercado livre.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Card className="p-3 bg-primary/10 border-primary/30">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">Regulamentado ANEEL</span>
                  </div>
                </Card>
                <Card className="p-3 bg-primary/10 border-primary/30">
                  <div className="flex items-center">
                    <Leaf className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm font-medium">100% Energia Limpa</span>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-primary">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">(11) 99999-9999</p>
                    <p className="text-sm opacity-75">WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">contato@ecofad.com.br</p>
                    <p className="text-sm opacity-75">Atendimento</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">São Paulo - SP</p>
                    <p className="text-sm opacity-75">Brasil</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Serviços */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-primary">Nossos Serviços</h4>
              <ul className="space-y-2">
                <li className="opacity-90 hover:opacity-100 transition-opacity">
                  <a href="#simulacao" className="hover:text-primary transition-colors">
                    Simulação de Economia
                  </a>
                </li>
                <li className="opacity-90 hover:opacity-100 transition-opacity">
                  <a href="#beneficios" className="hover:text-primary transition-colors">
                    Energia do Mercado Livre
                  </a>
                </li>
                <li className="opacity-90 hover:opacity-100 transition-opacity">
                  <a href="#como-funciona" className="hover:text-primary transition-colors">
                    Consultoria Energética
                  </a>
                </li>
                <li className="opacity-90 hover:opacity-100 transition-opacity">
                  <a href="#contato" className="hover:text-primary transition-colors">
                    Atendimento Personalizado
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary/20" />
          
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75 mb-4 md:mb-0">
              © 2024 ECOFAD. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm opacity-75">Parceiro oficial:</span>
              <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                <span className="text-sm font-medium text-primary">Trend Energy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;