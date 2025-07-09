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
  Clock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Calculator,
  FileText,
  Phone,
  TrendingDown,
  BarChart3,
  Target
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Objetiva = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "É confiável?",
      answer: "Sim, regulamentado pela ANEEL e em parceria com empresas autorizadas."
    },
    {
      question: "Preciso trocar de companhia elétrica?",
      answer: "Não. A distribuidora continua a mesma. Só o desconto vem da Ecofad."
    },
    {
      question: "Tem algum custo?",
      answer: "Zero taxa de adesão ou instalação."
    },
    {
      question: "Como recebo o desconto?",
      answer: "Ele já vem direto aplicado na sua conta."
    },
    {
      question: "E se eu quiser cancelar?",
      answer: "Sem fidelidade. Você cancela quando quiser."
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

  const processSteps = [
    {
      icon: Calculator,
      title: "Análise da Conta",
      description: "Enviamos sua conta atual e calculamos sua economia potencial."
    },
    {
      icon: FileText,
      title: "Contratação Digital",
      description: "Processo 100% online em poucos minutos."
    },
    {
      icon: TrendingDown,
      title: "Economia Imediata",
      description: "Desconto aplicado já na próxima fatura."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-secondary/10 backdrop-blur-md fixed w-full z-50 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img 
              src="/lovable-uploads/b7ac794d-3326-4b71-8e65-57403fb00852.png" 
              alt="ECOFAD Logo" 
              className="h-10"
            />
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-secondary hover:text-primary transition-colors">Home</Link>
              <Link to="/storytelling" className="text-secondary hover:text-primary transition-colors">Storytelling</Link>
              <Link to="/objetiva" className="text-primary font-medium">Objetiva</Link>
              <Link to="/agressiva" className="text-secondary hover:text-primary transition-colors">Agressiva</Link>
            </div>
          </div>
          <Button variant="cta" size="sm">
            Simular Economia
          </Button>
        </div>
      </nav>

      {/* Hero Section - Objetiva */}
      <section className="pt-32 pb-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/30">
                <Target className="w-4 h-4 mr-2" />
                Solução Direta
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                <span className="text-primary">Reduza em até 20%</span> Sua Conta de Luz
              </h1>
              <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
                Acesso ao mercado livre de energia com processo 100% digital. 
                Sem burocracias, sem taxas, sem complicações.
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
                <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calcular Minha Economia
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-background shadow-2xl border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Simulação Instantânea</h3>
                    <p className="text-muted-foreground">Veja quanto você pode economizar</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <label className="block text-sm font-medium mb-2">Valor da sua conta atual</label>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-foreground">R$ 350,00</span>
                        <span className="text-sm text-muted-foreground ml-2">/mês</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary">
                      <label className="block text-sm font-medium mb-2 text-primary">Com ECOFAD</label>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-primary">R$ 280,00</span>
                        <span className="text-sm text-primary ml-2">/mês</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-primary rounded-lg text-center">
                      <div className="text-sm font-medium text-primary-foreground mb-1">Sua economia</div>
                      <div className="text-3xl font-bold text-primary-foreground">R$ 70/mês</div>
                      <div className="text-sm text-primary-foreground opacity-90">R$ 840/ano</div>
                    </div>
                  </div>
                  
                  <Button variant="cta" className="w-full mt-6" size="lg">
                    Garantir Este Desconto
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Como Funciona em <span className="text-primary">3 Passos</span>
            </h2>
            <p className="text-xl text-muted-foreground">Processo simples e transparente</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-primary text-lg font-bold mb-2">PASSO {index + 1}</div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Por Que Escolher a <span className="text-primary">ECOFAD</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg font-medium text-foreground">{benefit}</p>
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

      {/* FAQs */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              <span className="text-primary">Perguntas</span> Frequentes
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto text-center">
          <Card className="p-12 max-w-3xl mx-auto">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Comece a Economizar <span className="text-primary">Hoje Mesmo</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Processo simples, rápido e sem compromisso
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="text-xl px-12 py-6">
                  <Calculator className="w-6 h-6 mr-2" />
                  Simular Agora
                </Button>
                <Button variant="outline" size="lg" className="text-xl px-12 py-6">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Tirar Dúvidas
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Sem taxa de adesão • Sem fidelidade • Regulamentado pela ANEEL
              </p>
            </CardContent>
          </Card>
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
            Energia limpa, economia garantida, futuro sustentável.
          </p>
          <p className="text-sm opacity-75">
            © 2024 ECOFAD. Todos os direitos reservados. | Regulamentado pela ANEEL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Objetiva;