
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Award } from 'lucide-react';

interface ScholarshipFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const ScholarshipForm: React.FC<ScholarshipFormProps> = ({ onSubmit, onCancel }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Cadastro de Bolsa ou Auxílio
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Nome da Bolsa/Auxílio</Label>
            <Input
              id="title"
              name="title"
              placeholder="Ex: Bolsa de Iniciação Científica"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descreva os objetivos, requisitos e benefícios..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-3">
            <Label>Categoria</Label>
            <RadioGroup name="category" defaultValue="pesquisa">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pesquisa" id="pesquisa" />
                <Label htmlFor="pesquisa">Pesquisa</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="assistencia" id="assistencia" />
                <Label htmlFor="assistencia">Assistência</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extensao" id="extensao" />
                <Label htmlFor="extensao">Extensão</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monitoria" id="monitoria" />
                <Label htmlFor="monitoria">Monitoria</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="esporte" id="esporte" />
                <Label htmlFor="esporte">Esporte</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="deadline">Prazo Final</Label>
              <Input
                id="deadline"
                name="deadline"
                type="date"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="value">Valor (se houver)</Label>
              <Input
                id="value"
                name="value"
                placeholder="Ex: R$ 400,00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="link">Link para Mais Informações</Label>
            <Input
              id="link"
              name="link"
              type="url"
              placeholder="https://exemplo.com/bolsa-detalhes"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Cadastrar Bolsa/Auxílio
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ScholarshipForm;
