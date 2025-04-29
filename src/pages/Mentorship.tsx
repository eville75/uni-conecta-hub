
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import MentorshipCard from '@/components/MentorshipCard';
import { Search, Filter, Users, ArrowRight } from 'lucide-react';

const Mentorship = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  
  // Example mentors data
  const allMentors = [
    {
      id: 1,
      name: 'Ana Silva',
      course: 'Engenharia de Computação',
      semester: 8,
      expertise: 'Programação, Cálculo',
      availability: 'Seg-Qua 14h-18h',
      rating: 4.8,
      profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      course: 'Administração',
      semester: 6,
      expertise: 'Finanças, Marketing',
      availability: 'Ter-Qui 10h-14h',
      rating: 4.5,
      profileImage: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 3,
      name: 'Mariana Costa',
      course: 'Psicologia',
      semester: 7,
      expertise: 'Psicologia Social, Neurociência',
      availability: 'Sex 13h-17h',
      rating: 4.9,
      profileImage: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 4,
      name: 'Eduardo Oliveira',
      course: 'Engenharia de Computação',
      semester: 9,
      expertise: 'Banco de Dados, Redes',
      availability: 'Seg-Sex 19h-21h',
      rating: 4.7,
      profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 5,
      name: 'Juliana Mendes',
      course: 'Direito',
      semester: 8,
      expertise: 'Direito Civil, Penal',
      availability: 'Qua-Sex 16h-18h',
      rating: 4.6,
      profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];
  
  // Example my mentorships
  const myMentorships = [
    {
      id: 101,
      name: 'Pedro Almeida',
      course: 'Ciência da Computação',
      semester: 10,
      expertise: 'Algoritmos, Estrutura de Dados',
      nextSession: '12/06/2023, 14:00',
      profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];
  
  // Filter mentors based on search query and filter course
  const filteredMentors = allMentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          mentor.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = filterCourse === 'all' || mentor.course.toLowerCase() === filterCourse.toLowerCase();
    return matchesSearch && matchesCourse;
  });
  
  // Get unique courses for the filter dropdown
  const courses = ['all', ...new Set(allMentors.map(m => m.course.toLowerCase()))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <h1 className="uniconecta-title mb-6">Área de Mentorias</h1>
          
          {/* My Mentorships Section */}
          {myMentorships.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="uniconecta-subtitle">Minhas Mentorias</h2>
                <button className="text-uniconecta-primary text-sm hover:underline inline-flex items-center">
                  Ver todas
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myMentorships.map(mentor => (
                  <div key={mentor.id} className="uniconecta-card">
                    <div className="flex items-start">
                      <img 
                        src={mentor.profileImage} 
                        alt={mentor.name} 
                        className="h-14 w-14 rounded-full object-cover border-2 border-uniconecta-primary mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-uniconecta-dark">{mentor.name}</h3>
                        <p className="text-sm text-uniconecta-neutral">
                          {mentor.course} • {mentor.semester}º semestre
                        </p>
                        <p className="text-xs text-uniconecta-secondary mt-1">
                          <span className="font-medium">Expertise:</span> {mentor.expertise}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-uniconecta-soft rounded-lg">
                      <p className="text-sm text-uniconecta-tertiary">
                        <span className="font-medium">Próxima sessão:</span> {mentor.nextSession}
                      </p>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <button className="uniconecta-btn-outline flex-1">Reagendar</button>
                      <button className="uniconecta-btn-primary flex-1">Iniciar Chat</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="text-lg font-medium text-uniconecta-dark">Encontre um Mentor</h2>
            </div>
            
            <p className="text-uniconecta-neutral text-sm mb-4">
              Conecte-se com estudantes mais experientes para receber orientação acadêmica e dicas para sua trajetória universitária.
            </p>
            
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
                <input
                  type="text"
                  placeholder="Pesquisar por nome ou expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="uniconecta-input pl-9 w-full"
                />
              </div>
              
              <div className="relative md:w-1/3">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
                <select
                  value={filterCourse}
                  onChange={(e) => setFilterCourse(e.target.value)}
                  className="uniconecta-select pl-9 w-full"
                >
                  <option value="all">Todos os cursos</option>
                  {courses.filter(course => course !== 'all').map(course => (
                    <option key={course} value={course} className="capitalize">{course}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Mentors List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMentors.length > 0 ? (
              filteredMentors.map(mentor => (
                <MentorshipCard key={mentor.id} mentor={mentor} />
              ))
            ) : (
              <div className="col-span-2 bg-white rounded-xl p-8 shadow-sm text-center">
                <p className="text-uniconecta-neutral">
                  Nenhum mentor encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mentorship;
