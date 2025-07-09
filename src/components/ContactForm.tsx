import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/kauanclient@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "Nova solicitação de contato - ECOFAD",
          _captcha: "false"
        })
      });

      if (response.ok) {
        toast({
          title: "Formulário enviado com sucesso!",
          description: "Entraremos em contato em breve via WhatsApp.",
        });
        
        // Redirect to WhatsApp after successful form submission
        const whatsappMessage = encodeURIComponent(
          `Olá! Acabei de preencher o formulário no site. Meu nome é ${formData.name}, email: ${formData.email}, telefone: ${formData.phone}. ${formData.message ? `Mensagem: ${formData.message}` : ''} Gostaria de saber mais sobre a economia na conta de luz!`
        );
        window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
        
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 bg-background shadow-xl border border-primary/20">
      <CardContent className="p-0">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Solicite Seu Desconto</h3>
          <p className="text-muted-foreground">Preencha seus dados e receba atendimento via WhatsApp</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="flex items-center text-sm font-medium mb-2">
              <User className="w-4 h-4 mr-2" />
              Nome Completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="flex items-center text-sm font-medium mb-2">
              <Mail className="w-4 h-4 mr-2" />
              E-mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3"
            />
          </div>
          
          <div>
            <Label htmlFor="phone" className="flex items-center text-sm font-medium mb-2">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3"
            />
          </div>
          
          <div>
            <Label htmlFor="message" className="flex items-center text-sm font-medium mb-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Mensagem (opcional)
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Conte mais sobre sua situação ou dúvidas..."
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="p-3"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            size="lg" 
            disabled={isSubmitting}
            variant="cta"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Enviando..." : "Solicitar Atendimento"}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, você será redirecionado para o WhatsApp para atendimento direto
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;