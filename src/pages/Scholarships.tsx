
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import ScholarshipCard from '@/components/ScholarshipCard';
import { Search, Filter } from 'lucide-react';

const Scholarships = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  // Example scholarships data
  const allScholarships = [
    {
      id: 1,
      title: 'Bolsa de Iniciação Científica',
      deadline: '2023-06-15',
      value: 'R$ 400,00',
      type: 'Pesquisa',
      description: 'Participe de projetos de pesquisa científica sob a orientação de professores.'
    },
    {
      id: 2,
      title: 'Auxílio Permanência',
      deadline: '2023-06-10',
      value: 'R$ 300,00',
      type: 'Assistência',
      description: 'Suporte financeiro para estudantes em situação de vulnerabilidade socioeconômica.'
    },
    {
      id: 3,
      title: 'Monitoria em Cálculo I',
      deadline: '2023-07-05',
      value: 'R$ 350,00',
      type: 'Monitoria',
      description: 'Auxilie outros estudantes nas disciplinas de Cálculo I e aprofunde seus conhecimentos.'
    },
    {
      id: 4,
      title: 'Programa de Extensão Comunitária',
      deadline: '2023-07-20',
      value: 'R$ 450,00',
      type: 'Extensão',
      description: 'Desenvolva projetos junto à comunidade local e aplique seus conhecimentos acadêmicos.'
    },
    {
      id: 5,
      title: 'Bolsa Atleta',
      deadline: '2023-06-30',
      value: 'R$ 500,00',
      type: 'Esporte',
      description: 'Apoio a estudantes que representam a universidade em competições esportivas.'
    },
  ];
  
  // Filter scholarships based on search query and filter type
  const filteredScholarships = allScholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || scholarship.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });
  
  // Get unique scholarship types for the filter dropdown
  const scholarshipTypes = ['all', ...new Set(allScholarships.map(s => s.type.toLowerCase()))];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="uniconecta-title mb-4 md:mb-0">Central de Bolsas e Auxílios</h1>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
                <input
                  type="text"
                  placeholder="Pesquisar bolsas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="uniconecta-input pl-9"
                />
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="uniconecta-select pl-9"
                >
                  <option value="all">Todos os tipos</option>
                  {scholarshipTypes.filter(type => type !== 'all').map(type => (
                    <option key={type} value={type} className="capitalize">{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <h2 className="text-lg font-medium text-uniconecta-dark mb-2">Sobre as bolsas e auxílios</h2>
            <p className="text-uniconecta-neutral text-sm mb-4">
              A Central de Bolsas e Auxílios oferece suporte financeiro a estudantes através de diversos programas.
              Consulte as oportunidades disponíveis, requisitos e prazos para se candidatar.
            </p>
            <div className="p-3 bg-uniconecta-soft rounded-lg">
              <p className="text-sm text-uniconecta-tertiary">
                <span className="font-medium">Dica:</span> Mantenha seus documentos atualizados para agilizar o processo de candidatura.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map(scholarship => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <p className="text-uniconecta-neutral">
                  Nenhuma bolsa encontrada com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scholarships;
