
import React from 'react';
import Navigation from '@/components/Navigation';
import { BookOpen, FileText, Download, Search, ExternalLink } from 'lucide-react';

const Regulations = () => {
  // Example documents data
  const documents = [
    {
      id: 1,
      title: 'Manual do Aluno',
      description: 'Guia completo com direitos e deveres dos estudantes',
      type: 'PDF',
      size: '2.4 MB',
      updatedAt: '15/03/2023'
    },
    {
      id: 2,
      title: 'Regulamento Acadêmico',
      description: 'Normas e procedimentos acadêmicos da universidade',
      type: 'PDF',
      size: '3.1 MB',
      updatedAt: '10/01/2023'
    },
    {
      id: 3,
      title: 'Calendário Acadêmico 2023',
      description: 'Datas importantes do ano letivo',
      type: 'PDF',
      size: '1.2 MB',
      updatedAt: '05/12/2022'
    },
    {
      id: 4,
      title: 'Regimento de Bolsas e Auxílios',
      description: 'Normas para concessão e manutenção de bolsas',
      type: 'PDF',
      size: '2.8 MB',
      updatedAt: '20/02/2023'
    },
    {
      id: 5,
      title: 'Manual da Biblioteca',
      description: 'Regras de utilização e empréstimo de livros',
      type: 'PDF',
      size: '1.5 MB',
      updatedAt: '08/03/2023'
    },
    {
      id: 6,
      title: 'Regimento Disciplinar',
      description: 'Normas de conduta e sanções disciplinares',
      type: 'PDF',
      size: '2.2 MB',
      updatedAt: '15/01/2023'
    },
    {
      id: 7,
      title: 'Guia de Estágios',
      description: 'Procedimentos para estágios obrigatórios e não-obrigatórios',
      type: 'PDF',
      size: '1.8 MB',
      updatedAt: '03/04/2023'
    }
  ];
  
  // Example helpful links
  const helpfulLinks = [
    {
      title: 'Portal do Estudante',
      url: '#',
      description: 'Acesse notas, frequência e materiais de aula'
    },
    {
      title: 'Biblioteca Virtual',
      url: '#',
      description: 'Consulte o acervo e reserve livros online'
    },
    {
      title: 'Ouvidoria',
      url: '#',
      description: 'Canal para sugestões, reclamações e elogios'
    },
    {
      title: 'Coordenações de Curso',
      url: '#',
      description: 'Contatos e horários de atendimento'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="uniconecta-title mb-4 md:mb-0">Regulamentos e Documentos</h1>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
              <input
                type="text"
                placeholder="Pesquisar documentos..."
                className="uniconecta-input pl-9"
              />
            </div>
          </div>
          
          {/* Documents section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="uniconecta-subtitle">Documentos Importantes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map(doc => (
                <div key={doc.id} className="uniconecta-card">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 bg-uniconecta-soft p-2 rounded">
                      <FileText className="h-6 w-6 text-uniconecta-primary" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-uniconecta-dark">{doc.title}</h3>
                      <p className="text-xs text-uniconecta-neutral mt-1">{doc.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-uniconecta-neutral mb-3">
                    <span>{doc.type} • {doc.size}</span>
                    <span>Atualizado em {doc.updatedAt}</span>
                  </div>
                  
                  <button className="uniconecta-btn-outline w-full flex items-center justify-center text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Helpful links section */}
          <div>
            <div className="flex items-center mb-4">
              <ExternalLink className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="uniconecta-subtitle">Links Úteis</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpfulLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url}
                  className="uniconecta-card flex hover:bg-uniconecta-soft transition-all"
                >
                  <div className="flex-shrink-0 mr-4">
                    <ExternalLink className="h-5 w-5 text-uniconecta-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-uniconecta-dark">{link.title}</h3>
                    <p className="text-sm text-uniconecta-neutral mt-1">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Regulations;
