
import React from 'react';
import { CalendarIcon, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScholarshipCardProps {
  scholarship: {
    id: number;
    title: string;
    deadline: string;
    value: string;
    type: string;
  };
  compact?: boolean;
}

const ScholarshipCard = ({ scholarship, compact = false }: ScholarshipCardProps) => {
  const formattedDeadline = new Date(scholarship.deadline).toLocaleDateString('pt-BR');
  
  // Check if deadline is close (within 5 days)
  const isDeadlineClose = () => {
    const today = new Date();
    const deadlineDate = new Date(scholarship.deadline);
    const differenceInTime = deadlineDate.getTime() - today.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays <= 5;
  };
  
  // Different type badges have different colors
  const getTypeBadgeClass = () => {
    switch (scholarship.type.toLowerCase()) {
      case 'pesquisa':
        return 'bg-blue-100 text-blue-800';
      case 'assistência':
        return 'bg-emerald-100 text-emerald-800';
      case 'monitoria':
        return 'bg-amber-100 text-amber-800';
      case 'extensão':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (compact) {
    return (
      <div className="uniconecta-card flex items-center justify-between">
        <div className="flex items-center">
          <Award className="h-5 w-5 text-uniconecta-primary mr-3" />
          <h3 className="font-medium text-uniconecta-dark">{scholarship.title}</h3>
        </div>
        <span className={cn(
          "uniconecta-badge",
          isDeadlineClose() ? "bg-red-100 text-red-800" : "bg-uniconecta-soft text-uniconecta-tertiary"
        )}>
          {formattedDeadline}
        </span>
      </div>
    );
  }

  return (
    <div className="uniconecta-card">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-uniconecta-dark">{scholarship.title}</h3>
        <span className={cn(
          "uniconecta-badge",
          getTypeBadgeClass()
        )}>
          {scholarship.type}
        </span>
      </div>
      
      <div className="flex justify-between text-sm">
        <div className="flex items-center text-uniconecta-neutral">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span className={cn(
            isDeadlineClose() ? "text-red-600 font-medium" : ""
          )}>
            {isDeadlineClose() ? 'Encerra em: ' : 'Prazo: '} {formattedDeadline}
          </span>
        </div>
        <span className="font-medium text-uniconecta-primary">{scholarship.value}</span>
      </div>
      
      <div className="mt-4">
        <button className="uniconecta-btn-outline w-full">Ver detalhes</button>
      </div>
    </div>
  );
};

export default ScholarshipCard;
