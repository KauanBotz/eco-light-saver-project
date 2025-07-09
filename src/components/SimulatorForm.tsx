import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, Zap } from "lucide-react";

const SimulatorForm = () => {
  const [billValue, setBillValue] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const handleSimulate = () => {
    if (billValue && parseFloat(billValue) > 0) {
      setShowResult(true);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const currentValue = parseFloat(billValue) || 0;
  const discountPercent = 20;
  const newValue = currentValue * (1 - discountPercent / 100);
  const savings = currentValue - newValue;
  const yearSavings = savings * 12;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Acabei de simular minha economia no site e posso economizar ${formatCurrency(savings)} por mês (${formatCurrency(yearSavings)} por ano) na minha conta de luz de ${formatCurrency(currentValue)}. Gostaria de saber mais sobre como contratar!`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <Card className="p-8 bg-background shadow-2xl border-2 border-primary/20">
      <CardContent className="p-0">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Simulação Instantânea</h3>
          <p className="text-muted-foreground">Veja quanto você pode economizar</p>
        </div>
        
        <div className="space-y-6">
          <div>
            <Label htmlFor="billValue" className="block text-sm font-medium mb-2">
              Valor da sua conta atual (R$)
            </Label>
            <Input
              id="billValue"
              type="number"
              placeholder="Ex: 350"
              value={billValue}
              onChange={(e) => setBillValue(e.target.value)}
              className="text-lg p-4"
            />
          </div>
          
          {!showResult ? (
            <Button 
              onClick={handleSimulate} 
              className="w-full" 
              size="lg"
              disabled={!billValue || parseFloat(billValue) <= 0}
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calcular Economia
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <label className="block text-sm font-medium mb-2">Valor atual</label>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-foreground">{formatCurrency(currentValue)}</span>
                  <span className="text-sm text-muted-foreground ml-2">/mês</span>
                </div>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary">
                <label className="block text-sm font-medium mb-2 text-primary">Com ECOFAD</label>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary">{formatCurrency(newValue)}</span>
                  <span className="text-sm text-primary ml-2">/mês</span>
                </div>
              </div>
              
              <div className="p-4 bg-primary rounded-lg text-center">
                <div className="text-sm font-medium text-primary-foreground mb-1">Sua economia</div>
                <div className="text-3xl font-bold text-primary-foreground">{formatCurrency(savings)}/mês</div>
                <div className="text-sm text-primary-foreground opacity-90">{formatCurrency(yearSavings)}/ano</div>
              </div>
              
              <Button 
                variant="cta" 
                className="w-full" 
                size="lg" 
                onClick={handleWhatsAppClick}
              >
                <Zap className="w-4 h-4 mr-2" />
                Garantir Este Desconto
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setShowResult(false)}
              >
                Simular Novamente
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SimulatorForm;