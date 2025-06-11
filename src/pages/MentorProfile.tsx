
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { ArrowLeft, MessageCircle, Calendar, Star, Clock, BookOpen, Award } from 'lucide-react';

const MentorProfile = () => {
  const { id } = useParams();
  
  // Example mentor data - in a real app, you would fetch this based on the ID
  const mentor = {
    id: 1,
    name: 'Ana Silva',
    course: 'Engenharia de Computação',
    semester: 8,
    expertise: 'Programação, Cálculo, Estruturas de Dados',
    availability: 'Segunda a Quarta: 14h-18h',
    rating: 4.8,
    totalMentorships: 23,
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Estudante de Engenharia de Computação no 8º semestre, apaixonada por programação e desenvolvimento de software. Tenho experiência em linguagens como Python, Java e JavaScript, além de conhecimentos sólidos em estruturas de dados e algoritmos. Gosto de ajudar outros estudantes a superarem as dificuldades iniciais da programação.',
    specialties: [
      'Programação em Python',
      'Estruturas de Dados',
      'Algoritmos',
      'Cálculo I e II',
      'Desenvolvimento Web',
      'Banco de Dados'
    ],
    achievements: [
      'Monitor de Programação I',
      'Bolsista de Iniciação Científica',
      '1º lugar no Hackathon Universitário 2023'
    ],
    testimonials: [
      {
        id: 1,
        student: 'Pedro Oliveira',
        text: 'Ana me ajudou muito com estruturas de dados. Explicações claras e muita paciência!',
        rating: 5
      },
      {
        id: 2,
        student: 'Mariana Costa',
        text: 'Excelente mentora! Me ajudou a entender conceitos de algoritmos que estava com dificuldade.',
        rating: 5
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Link 
              to="/mentorship" 
              className="mr-4 p-2 rounded-lg hover:bg-uniconecta-soft transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-uniconecta-neutral" />
            </Link>
            <h1 className="uniconecta-title">Perfil do Mentor</h1>
          </div>

          {/* Profile Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0 md:mr-6">
                <img 
                  src={mentor.profileImage} 
                  alt={mentor.name} 
                  className="h-32 w-32 rounded-full object-cover border-4 border-uniconecta-soft"
                />
              </div>
              
              <div className="flex-grow">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-uniconecta-dark mb-2">{mentor.name}</h2>
                  <p className="text-uniconecta-secondary mb-2">
                    {mentor.course} • {mentor.semester}º semestre
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-amber-500 fill-current" />
                      <span className="ml-1 font-medium text-uniconecta-dark">{mentor.rating}</span>
                      <span className="ml-1 text-uniconecta-neutral">({mentor.totalMentorships} mentorias)</span>
                    </div>
                  </div>
                  
                  <p className="text-uniconecta-neutral mb-4">{mentor.bio}</p>
                  
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
                    <button className="uniconecta-btn-primary flex-1 md:flex-none">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Iniciar Conversa
                    </button>
                    <button className="uniconecta-btn-outline flex-1 md:flex-none">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Mentoria
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Specialties */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-5 w-5 text-uniconecta-primary mr-2" />
                <h3 className="uniconecta-subtitle">Especialidades</h3>
              </div>
              <div className="space-y-2">
                {mentor.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-uniconecta-primary rounded-full mr-3"></div>
                    <span className="text-uniconecta-neutral">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-uniconecta-primary mr-2" />
                <h3 className="uniconecta-subtitle">Disponibilidade</h3>
              </div>
              <p className="text-uniconecta-neutral mb-4">{mentor.availability}</p>
              <div className="bg-uniconecta-soft rounded-lg p-3">
                <p className="text-sm text-uniconecta-tertiary">
                  <strong>Próximos horários disponíveis:</strong>
                </p>
                <div className="mt-2 space-y-1">
                  <div className="text-sm text-uniconecta-neutral">• Segunda, 15h-16h</div>
                  <div className="text-sm text-uniconecta-neutral">• Terça, 14h-15h</div>
                  <div className="text-sm text-uniconecta-neutral">• Quarta, 16h-17h</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-uniconecta-primary mr-2" />
                <h3 className="uniconecta-subtitle">Conquistas</h3>
              </div>
              <div className="space-y-2">
                {mentor.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-amber-500 rounded-full mr-3"></div>
                    <span className="text-uniconecta-neutral">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="uniconecta-subtitle mb-4">Avaliações</h3>
              <div className="space-y-4">
                {mentor.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border-l-4 border-uniconecta-soft pl-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium text-uniconecta-dark">
                        {testimonial.student}
                      </span>
                    </div>
                    <p className="text-sm text-uniconecta-neutral italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MentorProfile;
