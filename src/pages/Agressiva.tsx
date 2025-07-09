import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  DollarSign,
  CheckCircle,
  Clock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  AlertTriangle,
  Flame,
  Timer,
  Target,
  Rocket,
  Bolt,
  Star
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Agressiva = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Isso é real? Não é pegadinha?",
      answer: "100% real e regulamentado pela ANEEL. Mais de 25.000 clientes já comprovaram a economia."
    },
    {
      question: "Por que ninguém me contou isso antes?",
      answer: "Porque o mercado livre era restrito a grandes empresas. Agora democratizamos para todos."
    },
    {
      question: "Quanto tempo demora para ver o resultado?",
      answer: "O desconto aparece já na primeira fatura após a contratação."
    },
    {
      question: "E se eu não economizar mesmo?",
      answer: "Impossível! O desconto é garantido por contrato. Se não economizar, devolvemos seu dinheiro."
    },
    {
      question: "Posso perder esse desconto?",
      answer: "Não enquanto você for nosso cliente. Mas atenção: essa oportunidade pode não durar para sempre."
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
              <Link to="/objetiva" className="text-secondary hover:text-primary transition-colors">Objetiva</Link>
              <Link to="/agressiva" className="text-primary font-medium">Agressiva</Link>
            </div>
          </div>
          <Button variant="cta" size="sm" className="animate-pulse">
            QUERO AGORA!
          </Button>
        </div>
      </nav>

      {/* Hero Section - Agressiva */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-destructive/10 via-background to-primary/10">
        <div className="container mx-auto">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-destructive/20 text-destructive border-destructive/40 animate-pulse">
              <AlertTriangle className="w-4 h-4 mr-2" />
              ALERTA: OPORTUNIDADE LIMITADA
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight text-foreground">
              <span className="text-destructive">PARE DE PERDER DINHEIRO</span><br />
              Na Sua Conta de Luz!
            </h1>
            
            <p className="text-2xl lg:text-3xl mb-8 font-bold">
              Você está <span className="text-destructive underline">JOGANDO FORA</span> até 
              <span className="text-primary text-4xl"> R$ 1.200 POR ANO</span> que poderia estar no seu bolso!
            </p>
            
            <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Timer className="w-8 h-8 text-destructive mr-3" />
                <span className="text-2xl font-bold text-destructive">ÚLTIMAS 48 HORAS!</span>
              </div>
              <p className="text-lg font-medium">
                Esta oferta especial de economia na conta de luz expira em breve. 
                <span className="text-destructive font-bold"> Não deixe para depois!</span>
              </p>
            </div>
            
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <Button variant="cta" size="lg" className="text-2xl px-12 py-6 font-black animate-pulse">
                <Rocket className="w-8 h-8 mr-3" />
                ECONOMIZAR AGORA!
              </Button>
              <p className="text-sm text-muted-foreground">
                <Bolt className="w-4 h-4 inline mr-1" />
                Resultado em 24h • Sem burocracias • Garantia total
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Urgente */}
      <section className="py-20 px-6 bg-secondary text-secondary-foreground">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="text-destructive">CHEGA!</span> De Pagar Conta de Luz Cara!
            </h2>
            <p className="text-2xl mb-8">
              Enquanto você lê isso, está perdendo dinheiro que poderia ser seu!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-destructive/20 border-2 border-destructive">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-destructive rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-destructive-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-destructive">VOCÊ ESTÁ PERDENDO</h3>
                <div className="text-4xl font-black text-destructive mb-2">R$ 100</div>
                <p className="text-lg">TODO MÊS na conta de luz</p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-primary/20 border-2 border-primary">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">NOSSA SOLUÇÃO</h3>
                <div className="text-4xl font-black text-primary mb-2">ATÉ 20%</div>
                <p className="text-lg">DE DESCONTO garantido</p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-primary/20 border-2 border-primary">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">SEU RESULTADO</h3>
                <div className="text-4xl font-black text-primary mb-2">R$ 1.200</div>
                <p className="text-lg">ECONOMIZADOS por ano</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prova Social Intensa */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-foreground">
              <span className="text-primary">25.000 PESSOAS</span> Já Descobriram!
            </h2>
            <p className="text-2xl text-muted-foreground">E você ainda está pagando conta cara?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-primary/10 border-2 border-primary">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Marina Silva</h4>
                    <p className="text-sm text-muted-foreground">Salvador - BA</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-primary mb-2">ECONOMIZOU R$ 89/MÊS</p>
                <p className="text-muted-foreground italic">
                  "Não acreditava que era verdade. Agora uso o dinheiro que economizo para outras coisas!"
                </p>
                <div className="text-right mt-4">
                  <span className="text-primary font-bold">⭐⭐⭐⭐⭐</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-primary/10 border-2 border-primary">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Roberto Santos</h4>
                    <p className="text-sm text-muted-foreground">Curitiba - PR</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-primary mb-2">ECONOMIZOU R$ 156/MÊS</p>
                <p className="text-muted-foreground italic">
                  "A conta chegou com desconto na primeira vez. Não pensei duas vezes, já indiquei para toda família!"
                </p>
                <div className="text-right mt-4">
                  <span className="text-primary font-bold">⭐⭐⭐⭐⭐</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-primary/10 border-2 border-primary">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Carmen Oliveira</h4>
                    <p className="text-sm text-muted-foreground">Fortaleza - CE</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-primary mb-2">ECONOMIZOU R$ 203/MÊS</p>
                <p className="text-muted-foreground italic">
                  "Melhor decisão que tomei! Agora sobra dinheiro no final do mês. Recomendo para todo mundo!"
                </p>
                <div className="text-right mt-4">
                  <span className="text-primary font-bold">⭐⭐⭐⭐⭐</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-primary/10 border-2 border-primary rounded-lg px-6 py-4">
              <Flame className="w-8 h-8 text-primary mr-4" />
              <div className="text-left">
                <div className="text-2xl font-bold text-primary">98% DE SATISFAÇÃO</div>
                <p className="text-muted-foreground">Baseado em 25.000+ clientes ativos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência Máxima */}
      <section className="py-20 px-6 bg-gradient-to-r from-destructive/20 to-primary/20">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-destructive text-destructive-foreground border-destructive animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            OFERTA POR TEMPO LIMITADO
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-foreground">
            <span className="text-destructive">ÚLTIMA CHANCE!</span><br />
            Esta Oportunidade <span className="text-primary">Não Volta</span>
          </h2>
          
          <p className="text-2xl mb-8 font-bold">
            Enquanto você pensa, <span className="text-destructive">centenas de pessoas</span> estão 
            garantindo seu desconto neste exato momento!
          </p>
          
          <div className="bg-background/80 backdrop-blur rounded-lg p-8 max-w-2xl mx-auto mb-8 border-2 border-primary">
            <h3 className="text-3xl font-bold mb-4 text-foreground">O QUE VOCÊ GANHA AGORA:</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                <span className="text-lg font-medium">Até 20% de desconto GARANTIDO na conta</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                <span className="text-lg font-medium">Contratação em menos de 5 minutos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                <span className="text-lg font-medium">Zero taxas, zero burocracia</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                <span className="text-lg font-medium">Energia 100% limpa e renovável</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                <span className="text-lg font-medium">Garantia de satisfação total</span>
              </div>
            </div>
          </div>
          
          <Button variant="cta" size="lg" className="text-3xl px-16 py-8 font-black animate-bounce">
            <Target className="w-10 h-10 mr-4" />
            SIM! QUERO ECONOMIZAR AGORA!
          </Button>
          
          <p className="text-lg mt-4 font-bold">
            <span className="text-destructive">⚠️ ATENÇÃO:</span> Apenas <span className="text-primary">127 vagas</span> restantes hoje!
          </p>
        </div>
      </section>

      {/* FAQs Agressivas */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground">
              Suas <span className="text-destructive">Desculpas</span> Acabaram!
            </h2>
            <p className="text-xl text-muted-foreground mt-4">Vamos esclarecer TODAS as suas dúvidas</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-foreground">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground font-medium">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Explosivo */}
      <section className="py-20 px-6 bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-7xl font-black mb-6">
            <span className="text-destructive">PARE DE PROCRASTINAR!</span><br />
            <span className="text-primary">Aja AGORA!</span>
          </h2>
          
          <p className="text-2xl mb-8 font-bold opacity-90">
            Cada minuto que você hesita é dinheiro saindo do seu bolso!
          </p>
          
          <div className="bg-background/10 backdrop-blur rounded-lg p-8 max-w-2xl mx-auto mb-8 border-2 border-primary">
            <div className="text-6xl font-black text-primary mb-4">R$ 1.200</div>
            <p className="text-xl font-bold">É isso que você vai economizar por ano!</p>
            <p className="text-lg opacity-90 mt-2">Com apenas 1 clique você garante essa economia</p>
          </div>
          
          <div className="space-y-4">
            <Button variant="cta" size="lg" className="text-3xl px-20 py-8 font-black animate-pulse">
              <Zap className="w-10 h-10 mr-4" />
              GARANTIR MINHA ECONOMIA!
            </Button>
            
            <div className="flex items-center justify-center space-x-8 text-lg">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-primary mr-2" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-2" />
                <span>Resultado Garantido</span>
              </div>
              <div className="flex items-center">
                <Bolt className="w-6 h-6 text-primary mr-2" />
                <span>Processo Instantâneo</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg mt-8 font-bold">
            <span className="text-destructive">⚠️ Esta página será removida em breve!</span> Não perca sua chance!
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
          <p className="text-lg mb-4 font-bold">
            PARE DE PERDER DINHEIRO! Sua economia começa hoje!
          </p>
          <p className="text-sm opacity-75">
            © 2024 ECOFAD. Todos os direitos reservados. | Regulamentado pela ANEEL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Agressiva;