import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  Zap, 
  Shield, 
  Smartphone, 
  Heart, 
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

const Index = () => {
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

  const testimonials = [
    "Economizei R$ 78 na primeira fatura!",
    "Rápido, sem dor de cabeça. Já indiquei pra família.",
    "Achei que era golpe, mas recebi o desconto certinho."
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/b7ac794d-3326-4b71-8e65-57403fb00852.png" 
              alt="ECOFAD Logo" 
              className="h-12"
            />
          </div>
          <Button variant="cta" size="lg">
            Quero Economizar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 py-20 px-6 text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Pague Menos na Sua Conta de Luz <br />
            <span className="text-primary">Sem Mudar Nada na Sua Rotina!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Receba até 20% de desconto na sua fatura de energia, sem taxa de adesão e com contratação 100% digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              ➡️ Quero Economizar Agora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Como Funciona
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <p className="text-lg font-semibold">Economia</p>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <p className="text-lg font-semibold">Sustentabilidade</p>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <p className="text-lg font-semibold">Facilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona - 3 Leis */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Como Funciona - <span className="text-primary">3 Leis de Empenho</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  📘 Lei 1 – Economia com Inteligência
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Você continua recebendo energia pela mesma distribuidora, mas agora com desconto vindo da fonte limpa do mercado livre. Nada muda na sua rotina. Só o valor.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  ⚡ Lei 2 – Contratação Digital e Sem Burocracia
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Todo o processo é online, sem papelada, sem visitas, e leva poucos minutos. Simples assim.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  💚 Lei 3 – Compromisso com a Sustentabilidade
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A energia vem de fontes limpas, regulamentada pela ANEEL. Você ajuda o planeta e ainda economiza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            🌟 <span className="text-primary">Benefícios ECOFAD</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 bg-background p-6 rounded-lg shadow-md">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            👥 <span className="text-primary">O Que Nossos Clientes Dizem</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground italic">
                    "{testimonial}"
                  </p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">⭐</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              🔖 Selo de parceria com Trend Energy
            </p>
            <p className="text-sm text-muted-foreground">
              📌 Empresa regulamentada pela ANEEL
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            ❓ <span className="text-primary">Perguntas Frequentes</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted transition-colors"
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
      <section className="py-20 px-6 bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-primary">Economizar</span>?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de pessoas que já economizam na conta de luz
          </p>
          <Button variant="cta" size="lg" className="text-xl px-12 py-6">
            💬 Falar no WhatsApp
          </Button>
          <p className="text-sm mt-4 opacity-75">
            Sem compromisso • Atendimento humano • Resposta em minutos
          </p>
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

export default Index;