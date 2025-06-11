
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

interface SubjectFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const SubjectForm: React.FC<SubjectFormProps> = ({ onSubmit, onCancel }) => {
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
          <BookOpen className="h-5 w-5" />
          Cadastro de Disciplina
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subjectName">Nome da Disciplina</Label>
              <Input
                id="subjectName"
                name="subjectName"
                placeholder="Ex: Algoritmos e Estruturas de Dados"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="code">Código da Disciplina</Label>
              <Input
                id="code"
                name="code"
                placeholder="Ex: CC201"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="professor">Nome do Professor</Label>
            <Input
              id="professor"
              name="professor"
              placeholder="Prof. Nome do Professor"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="schedule">Horário</Label>
              <Input
                id="schedule"
                name="schedule"
                placeholder="Ex: 14:00-15:40"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="days">Dias da Semana</Label>
              <Input
                id="days"
                name="days"
                placeholder="Ex: Segunda e Quarta"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Local</Label>
            <Input
              id="location"
              name="location"
              placeholder="Ex: Bloco A, Sala 202"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="classes">Turmas Vinculadas</Label>
            <Input
              id="classes"
              name="classes"
              placeholder="Ex: CC3A, CC3B, SI3A"
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Cadastrar Disciplina
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

export default SubjectForm;
