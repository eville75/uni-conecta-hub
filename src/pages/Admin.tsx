
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Users, Calendar, Award, BookOpen, Plus, Edit, Trash2, Search } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('mentors');
  const [searchQuery, setSearchQuery] = useState('');

  // Example data
  const [mentors, setMentors] = useState([
    {
      id: 1,
      name: 'Ana Silva',
      course: 'Engenharia de Computação',
      semester: 8,
      expertise: 'Programação, Cálculo',
      availability: 'Seg-Qua 14h-18h',
      email: 'ana.silva@univmail.com'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      course: 'Administração',
      semester: 6,
      expertise: 'Finanças, Marketing',
      availability: 'Ter-Qui 10h-14h',
      email: 'carlos.santos@univmail.com'
    }
  ]);

  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: 'Matemática Discreta',
      code: 'MAT101',
      professor: 'Prof. João Silva',
      schedule: 'Seg/Qua 10:00-11:40',
      classroom: 'Bloco A, Sala 202'
    },
    {
      id: 2,
      name: 'Algoritmos',
      code: 'CC201',
      professor: 'Prof. Maria Santos',
      schedule: 'Ter/Qui 14:00-15:40',
      classroom: 'Bloco C, Sala 305'
    }
  ]);

  const [scholarships, setScholarships] = useState([
    {
      id: 1,
      title: 'Bolsa de Iniciação Científica',
      value: 'R$ 400,00',
      deadline: '2023-06-15',
      type: 'Pesquisa',
      description: 'Programa de iniciação científica para estudantes de graduação'
    },
    {
      id: 2,
      title: 'Auxílio Permanência',
      value: 'R$ 300,00',
      deadline: '2023-06-10',
      type: 'Assistência',
      description: 'Auxílio para estudantes em situação de vulnerabilidade social'
    }
  ]);

  const tabs = [
    { id: 'mentors', label: 'Mentores', icon: Users },
    { id: 'subjects', label: 'Disciplinas', icon: Calendar },
    { id: 'scholarships', label: 'Bolsas', icon: Award }
  ];

  const renderMentorsTab = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-uniconecta-dark">Gerenciar Mentores</h3>
        <button className="uniconecta-btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Mentor
        </button>
      </div>
      
      <div className="overflow-hidden bg-white rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-uniconecta-light">
          <thead className="bg-uniconecta-soft">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Curso
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Expertise
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Disponibilidade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-uniconecta-light">
            {mentors.map((mentor) => (
              <tr key={mentor.id} className="hover:bg-uniconecta-soft/30">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-uniconecta-dark">{mentor.name}</div>
                    <div className="text-sm text-uniconecta-neutral">{mentor.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                  {mentor.course} • {mentor.semester}º sem
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                  {mentor.expertise}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                  {mentor.availability}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                  <button className="text-uniconecta-primary hover:text-uniconecta-secondary">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSubjectsTab = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-uniconecta-dark">Gerenciar Disciplinas</h3>
        <button className="uniconecta-btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Disciplina
        </button>
      </div>
      
      <div className="overflow-hidden bg-white rounded-xl shadow-sm">
        <table className="min-w-full divide-y divide-uniconecta-light">
          <thead className="bg-uniconecta-soft">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Disciplina
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Professor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Horário
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Local
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-uniconecta-light">
            {subjects.map((subject) => (
              <tr key={subject.id} className="hover:bg-uniconecta-soft/30">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-uniconecta-dark">{subject.name}</div>
                    <div className="text-sm text-uniconecta-neutral">{subject.code}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                  {subject.professor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                  {subject.schedule}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                  {subject.classroom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                  <button className="text-uniconecta-primary hover:text-uniconecta-secondary">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderScholarshipsTab = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-uniconecta-dark">Gerenciar Bolsas e Auxílios</h3>
        <button className="uniconecta-btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Bolsa
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="uniconecta-card">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-uniconecta-dark">{scholarship.title}</h4>
              <div className="flex space-x-2">
                <button className="text-uniconecta-primary hover:text-uniconecta-secondary">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="text-sm text-uniconecta-neutral mb-2">{scholarship.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="uniconecta-badge-primary">{scholarship.type}</span>
              <span className="font-medium text-uniconecta-secondary">{scholarship.value}</span>
            </div>
            <div className="mt-2 text-xs text-uniconecta-secondary">
              Prazo: {new Date(scholarship.deadline).toLocaleDateString('pt-BR')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="mb-6">
            <h1 className="uniconecta-title">Painel Administrativo</h1>
            <p className="text-uniconecta-neutral mt-1">
              Gerencie mentores, disciplinas e bolsas do sistema
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="uniconecta-input pl-9 w-full"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-uniconecta-light">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                        activeTab === tab.id
                          ? 'border-uniconecta-primary text-uniconecta-primary'
                          : 'border-transparent text-uniconecta-neutral hover:text-uniconecta-secondary hover:border-uniconecta-light'
                      }`}
                    >
                      <IconComponent className="h-5 w-5 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'mentors' && renderMentorsTab()}
            {activeTab === 'subjects' && renderSubjectsTab()}
            {activeTab === 'scholarships' && renderScholarshipsTab()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
