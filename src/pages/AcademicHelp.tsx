
import React from 'react';
import Navigation from '@/components/Navigation';
import { FileText, BookOpen, Award, Download, Search, Video } from 'lucide-react';

const AcademicHelp = () => {
  // Example templates
  const templates = [
    {
      id: 1,
      title: 'Modelo para TCC',
      description: 'Template formatado com normas ABNT',
      type: 'DOCX',
      downloads: 1250,
      category: 'Trabalho de Conclusão'
    },
    {
      id: 2,
      title: 'Template para Artigo Científico',
      description: 'Modelo para artigos e publicações',
      type: 'DOCX',
      downloads: 980,
      category: 'Artigos'
    },
    {
      id: 3,
      title: 'Modelo de Relatório de Estágio',
      description: 'Estrutura para relatórios de estágio',
      type: 'DOCX',
      downloads: 756,
      category: 'Estágios'
    },
    {
      id: 4,
      title: 'Template para Apresentações',
      description: 'Slides com identidade visual da universidade',
      type: 'PPTX',
      downloads: 1345,
      category: 'Apresentações'
    }
  ];
  
  // Example tutorials
  const tutorials = [
    {
      id: 1,
      title: 'Como fazer citações ABNT',
      duration: '15 min',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300&h=169',
      views: 2450
    },
    {
      id: 2,
      title: 'Técnicas de pesquisa acadêmica',
      duration: '22 min',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=300&h=169',
      views: 1873
    },
    {
      id: 3,
      title: 'Formatação de trabalhos no Word',
      duration: '18 min',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=169',
      views: 2120
    }
  ];
  
  // Example academic resources
  const resources = [
    {
      title: 'Guia de Metodologia Científica',
      description: 'Material completo sobre métodos de pesquisa',
      type: 'E-book',
      link: '#'
    },
    {
      title: 'Base de Dados Acadêmicos',
      description: 'Acesso a artigos e publicações científicas',
      type: 'Link',
      link: '#'
    },
    {
      title: 'Dicionário Técnico',
      description: 'Terminologia específica para cada área',
      type: 'E-book',
      link: '#'
    },
    {
      title: 'Curso de Escrita Científica',
      description: 'Tutorial completo sobre redação acadêmica',
      type: 'Curso',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="uniconecta-title mb-4 md:mb-0">Apoio Acadêmico</h1>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
              <input
                type="text"
                placeholder="Pesquisar recursos..."
                className="uniconecta-input pl-9"
              />
            </div>
          </div>
          
          {/* Templates section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="uniconecta-subtitle">Templates e Modelos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {templates.map(template => (
                <div key={template.id} className="uniconecta-card">
                  <div className="flex items-center justify-center bg-uniconecta-soft p-4 mb-3 rounded">
                    <FileText className="h-8 w-8 text-uniconecta-primary" />
                  </div>
                  
                  <h3 className="font-semibold text-uniconecta-dark text-center mb-2">{template.title}</h3>
                  <p className="text-xs text-uniconecta-neutral text-center mb-3">{template.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-uniconecta-neutral mb-3">
                    <span className="uniconecta-badge-primary">{template.category}</span>
                    <span>{template.downloads} downloads</span>
                  </div>
                  
                  <button className="uniconecta-btn-outline w-full flex items-center justify-center text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar {template.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Video tutorials section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Video className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="uniconecta-subtitle">Tutoriais em Vídeo</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tutorials.map(tutorial => (
                <div key={tutorial.id} className="uniconecta-card">
                  <div className="relative rounded-lg overflow-hidden mb-3">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="bg-white bg-opacity-80 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uniconecta-primary">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-uniconecta-dark mb-2">{tutorial.title}</h3>
                  <div className="text-xs text-uniconecta-neutral">
                    {tutorial.views.toLocaleString()} visualizações
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Academic resources section */}
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="uniconecta-subtitle">Recursos Acadêmicos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.link}
                  className="uniconecta-card flex hover:bg-uniconecta-soft transition-all"
                >
                  <div className="flex-shrink-0 mr-4">
                    <Award className="h-8 w-8 text-uniconecta-primary" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-uniconecta-dark">{resource.title}</h3>
                      <span className="uniconecta-badge-secondary ml-2">{resource.type}</span>
                    </div>
                    <p className="text-sm text-uniconecta-neutral mt-1">{resource.description}</p>
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

export default AcademicHelp;
