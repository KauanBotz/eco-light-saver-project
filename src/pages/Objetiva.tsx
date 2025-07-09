import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Zap, 
  Shield, 
  Smartphone, 
  DollarSign,
  CheckCircle,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Calculator,
  ArrowRight,
  Target,
  Star,
  Award,
  Phone
} from "lucide-react";
import { useState } from "react";
import SimulatorForm from "@/components/SimulatorForm";
import ContactForm from "@/components/ContactForm";
import ProfessionalFooter from "@/components/ProfessionalFooter";

const Objetiva = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Acabei de me cadastrar no site e quero saber como funciona o desconto na conta de luz.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const faqs = [
    {
      question: "Isso é confiável?",
      answer: "Sim, somos regulamentados pela ANEEL e em parceria com empresas autorizadas no mercado livre de energia."
    },
    {
      question: "Preciso trocar de companhia elétrica?",
      answer: "Não. A distribuidora continua a mesma. Você apenas recebe desconto vindo do mercado livre."
    },
    {
      question: "Tem algum custo ou taxa de adesão?",
      answer: "Zero custos. Não cobramos taxa de adesão, instalação ou qualquer custo adicional."
    },
    {
      question: "Como recebo o desconto?",
      answer: "O desconto aparece automaticamente na sua conta de luz de forma clara e transparente."
    },
    {
      question: "E se eu quiser cancelar?",
      answer: "Não há fidelidade. Você pode cancelar quando quiser, sem multas ou taxas."
    }
  ];

  const benefits = [
    "Até 20% de desconto real na conta de luz",
    "Sem taxa de adesão ou instalação", 
    "Contrato 100% digital",
    "Sem fidelidade ou carência",
    "Energia limpa e regulamentada pela ANEEL",
    "Atendimento humano e transparente"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Simples */}
      <header className="bg-background border-b py-4 px-6 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <img 
            src="/lovable-uploads/b7ac794d-3326-4b71-8e65-57403fb00852.png" 
            alt="ECOFAD Logo" 
            className="h-12"
          />
          <Button variant="cta" size="sm" onClick={handleWhatsAppClick}>
            <Calculator className="w-4 h-4 mr-2" />
            Simular Economia
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                Pague Menos na Sua Conta de Luz <span className="text-primary">Sem Mudar Nada na Sua Rotina!</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                Receba até 20% de desconto na sua fatura de energia, sem taxa de adesão e com contratação 100% digital.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Desconto garantido</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Energia limpa</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Sem fidelidade</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Regulamentado ANEEL</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsAppClick}>
                  <Calculator className="w-5 h-5 mr-2" />
                  Calcular Minha Economia
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsAppClick}>
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <SimulatorForm />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Como <span className="text-primary">Funciona?</span>
            </h2>
            <p className="text-xl text-muted-foreground">Processo simples em 3 passos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-primary text-lg font-bold mb-2">PASSO 1</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Análise da Conta
                </h3>
                <p className="text-muted-foreground">
                  Analisamos sua conta atual e calculamos exatamente quanto você pode economizar.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-primary text-lg font-bold mb-2">PASSO 2</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Contratação Digital
                </h3>
                <p className="text-muted-foreground">
                  Processo 100% online em poucos minutos, sem burocracia.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-primary text-lg font-bold mb-2">PASSO 3</div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Economia Imediata
                </h3>
                <p className="text-muted-foreground">
                  Desconto aplicado já na próxima fatura.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Benefícios da <span className="text-primary">ECOFAD</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Resultados que <span className="text-primary">Comprovam</span>
            </h2>
            <p className="text-xl opacity-90">Dados reais dos nossos clientes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25.000+</div>
              <p className="text-lg">Clientes Ativos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20%</div>
              <p className="text-lg">Economia Média</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">R$ 2.5M</div>
              <p className="text-lg">Economizados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-lg">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              O Que Nossos <span className="text-primary">Clientes Dizem</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Maria Silva</h4>
                    <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Economizei R$ 78 na primeira fatura! Não acreditava que seria tão fácil."
                </p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">João Santos</h4>
                    <p className="text-sm text-muted-foreground">Rio de Janeiro - RJ</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Rápido, sem dor de cabeça. Já indiquei para toda a família."
                </p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Ana Costa</h4>
                    <p className="text-sm text-muted-foreground">Belo Horizonte - MG</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Achei que era golpe, mas recebi o desconto certinho na conta."
                </p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
              <Award className="w-4 h-4 mr-2" />
              Selo de parceria com Trend Energy
            </Badge>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground mt-4">Esclarecemos suas principais questões</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-muted-foreground pt-4 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-background" id="contato">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Comece a Economizar <span className="text-primary">Hoje Mesmo</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Receba até 20% de desconto na sua fatura de energia, sem taxa de adesão e com contratação 100% digital.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Processo 100% digital</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Atendimento via WhatsApp</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Sem compromisso ou fidelidade</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="font-medium">Regulamentado pela ANEEL</span>
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="text-lg px-8 py-4" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar Direto no WhatsApp
              </Button>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ProfessionalFooter />
    </div>
  );
};

export default Objetiva;