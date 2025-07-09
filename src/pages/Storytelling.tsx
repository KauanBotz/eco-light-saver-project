import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  ChevronUp,
  TrendingDown,
  Home,
  BarChart3,
  Sparkles,
  Target,
  Award
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Storytelling = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Como posso ter certeza de que é confiável?",
      answer: "Somos uma empresa regulamentada pela ANEEL com anos de experiência no mercado livre de energia. Nossos clientes são nossa melhor referência."
    },
    {
      question: "Vou precisar trocar minha distribuidora?",
      answer: "Não. Você continua sendo cliente da mesma distribuidora, mas agora com economia vinda do mercado livre de energia."
    },
    {
      question: "Existe algum custo oculto?",
      answer: "Absolutamente zero. Não cobramos taxa de adesão, instalação ou qualquer outro custo adicional."
    },
    {
      question: "Como funciona o desconto na prática?",
      answer: "O desconto aparece automaticamente na sua conta de luz, destacado de forma clara e transparente."
    },
    {
      question: "E se eu não ficar satisfeito?",
      answer: "Você pode cancelar quando quiser, sem multas ou taxas de cancelamento."
    }
  ];

  const journeySteps = [
    {
      icon: MessageCircle,
      title: "O Primeiro Contato",
      description: "Tudo começou quando nossa equipe percebeu que milhares de pessoas pagavam mais do que deveriam na conta de luz, simplesmente por não conhecerem suas opções."
    },
    {
      icon: Leaf,
      title: "A Descoberta",
      description: "Descobrimos que através do mercado livre de energia, era possível oferecer economia real mantendo a mesma qualidade e confiabilidade."
    },
    {
      icon: Heart,
      title: "A Missão",
      description: "Decidimos democratizar o acesso à energia limpa e barata, criando um processo simples e 100% digital para todos."
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
              <Link to="/storytelling" className="text-primary font-medium">Storytelling</Link>
              <Link to="/objetiva" className="text-secondary hover:text-primary transition-colors">Objetiva</Link>
              <Link to="/agressiva" className="text-secondary hover:text-primary transition-colors">Agressiva</Link>
            </div>
          </div>
          <Button variant="cta" size="sm">
            Começar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section - Storytelling */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-secondary via-secondary to-secondary/80">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-secondary-foreground">
              <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="w-4 h-4 mr-2" />
                História de Transformação
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                A História de Como <span className="text-primary">Milhares de Famílias</span> Descobriram o Segredo da Economia na Conta de Luz
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Em 2023, a família Silva recebeu uma conta de luz de R$ 387. Hoje, pagam R$ 290. 
                Esta é a história de como descobriram o mercado livre de energia e como você pode fazer o mesmo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                  <Target className="w-5 h-5 mr-2" />
                  Descobrir Minha Economia
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Ver Casos de Sucesso
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25K+</div>
                  <p className="text-sm opacity-75">Famílias Atendidas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">R$ 2.5M</div>
                  <p className="text-sm opacity-75">Economizados</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <p className="text-sm opacity-75">Satisfação</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-background/95 backdrop-blur shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <TrendingDown className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Simulação Real</h3>
                      <p className="text-muted-foreground">Família Silva - SP</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between p-4 bg-destructive/10 rounded-lg">
                      <span className="font-medium">Conta Anterior:</span>
                      <span className="font-bold text-destructive">R$ 387,90</span>
                    </div>
                    <div className="flex justify-between p-4 bg-primary/10 rounded-lg">
                      <span className="font-medium">Conta ECOFAD:</span>
                      <span className="font-bold text-primary">R$ 290,32</span>
                    </div>
                    <div className="flex justify-between p-4 bg-primary/20 rounded-lg border-2 border-primary">
                      <span className="font-bold">Economia Mensal:</span>
                      <span className="font-bold text-primary text-xl">R$ 97,58</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* A Jornada */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/30">
              <Clock className="w-4 h-4 mr-2" />
              Nossa Jornada
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Como Começou Nossa <span className="text-primary">Revolução Energética</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O Problema que Resolvemos */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-destructive/10 text-destructive border-destructive/30">
                <Shield className="w-4 h-4 mr-2" />
                O Problema
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Por Que Milhões de Brasileiros <span className="text-destructive">Pagam Mais</span> do Que Deveriam?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Durante décadas, o mercado livre de energia estava restrito apenas a grandes empresas. 
                Enquanto isso, famílias pagavam tarifas altas sem conhecer suas alternativas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-destructive rounded-full mr-4"></div>
                  <span className="text-lg">Falta de informação sobre o mercado livre</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-destructive rounded-full mr-4"></div>
                  <span className="text-lg">Processos burocráticos e complicados</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-destructive rounded-full mr-4"></div>
                  <span className="text-lg">Medo de mudanças no fornecimento</span>
                </div>
              </div>
              
              <Button variant="cta" size="lg">
                <Home className="w-5 h-5 mr-2" />
                Descobrir a Solução
              </Button>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-background shadow-xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Antes da ECOFAD</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-destructive/10 rounded-lg text-center">
                      <div className="text-3xl font-bold text-destructive mb-2">87%</div>
                      <p className="text-sm">das famílias pagavam tarifa completa</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-muted-foreground mb-2">0%</div>
                      <p className="text-sm">conheciam o mercado livre</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg text-center">
                      <div className="text-3xl font-bold text-muted-foreground mb-2">R$ 156</div>
                      <p className="text-sm">economia média perdida/mês</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Solução */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/30">
              <Award className="w-4 h-4 mr-2" />
              A Solução ECOFAD
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Como Democratizamos o <span className="text-primary">Acesso à Energia Limpa</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Tecnologia Inteligente
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Desenvolvemos uma plataforma que torna todo o processo simples, rápido e transparente. Em poucos cliques, você já está economizando.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Segurança Total
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Regulamentados pela ANEEL, com parcerias sólidas e processos auditados. Sua segurança é nossa prioridade máxima.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Atendimento Humano
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nossa equipe está sempre disponível para tirar suas dúvidas e acompanhar sua jornada de economia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Histórias de Sucesso */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/30">
              <Users className="w-4 h-4 mr-2" />
              Histórias Reais
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Transformações que <span className="text-primary">Inspiram</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Família Oliveira</h4>
                    <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Em 6 meses, economizamos mais de R$ 600. Usamos o dinheiro para as férias da família. Nunca imaginei que fosse tão simples!"
                </p>
                <div className="text-right">
                  <span className="text-primary font-bold">Economia: R$ 112/mês</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Sr. João Silva</h4>
                    <p className="text-sm text-muted-foreground">Rio de Janeiro - RJ</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Aposentado, cada real conta. A ECOFAD me ajudou a reduzir uma das maiores despesas da casa. Recomendo para todos!"
                </p>
                <div className="text-right">
                  <span className="text-primary font-bold">Economia: R$ 67/mês</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Ana Costa</h4>
                    <p className="text-sm text-muted-foreground">Belo Horizonte - MG</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Mãe solo, preciso economizar onde posso. A ECOFAD foi um presente na minha vida. Processo super fácil!"
                </p>
                <div className="text-right">
                  <span className="text-primary font-bold">Economia: R$ 89/mês</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/30">
              <MessageCircle className="w-4 h-4 mr-2" />
              Dúvidas Frequentes
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Esclarecemos Suas <span className="text-primary">Principais Dúvidas</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <p className="text-muted-foreground text-lg leading-relaxed">{faq.answer}</p>
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
            Sua História de <span className="text-primary">Economia</span> Começa Agora
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se às milhares de famílias que descobriram o segredo da economia inteligente na conta de luz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-xl px-12 py-6">
              <Sparkles className="w-6 h-6 mr-2" />
              Começar Minha História
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <MessageCircle className="w-6 h-6 mr-2" />
              Falar com Especialista
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Processo 100% online • Sem compromisso • Resultado garantido
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
            Transformando o futuro energético do Brasil, uma família por vez.
          </p>
          <p className="text-sm opacity-75">
            © 2024 ECOFAD. Todos os direitos reservados. | Regulamentado pela ANEEL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Storytelling;