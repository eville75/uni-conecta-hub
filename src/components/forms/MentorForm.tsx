
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Upload } from 'lucide-react';

interface MentorFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const MentorForm: React.FC<MentorFormProps> = ({ onSubmit, onCancel }) => {
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
          <User className="h-5 w-5" />
          Cadastro de Mentor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                name="name"
                placeholder="Digite o nome completo"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email de Contato</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mentor@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="courses">Curso(s)</Label>
            <Input
              id="courses"
              name="courses"
              placeholder="Ex: Engenharia de Computação, Administração"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição do Mentor</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descreva a experiência e background do mentor..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photo">Foto do Mentor</Label>
            <div className="flex items-center gap-2">
              <Input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                className="flex-1"
              />
              <Button type="button" variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialties">Especialidades</Label>
            <Input
              id="specialties"
              name="specialties"
              placeholder="Ex: Programação, Cálculo, Física, Marketing"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="availability">Disponibilidade</Label>
            <Input
              id="availability"
              name="availability"
              placeholder="Ex: Segunda a Quarta, 14h às 18h"
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Cadastrar Mentor
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

export default MentorForm;
