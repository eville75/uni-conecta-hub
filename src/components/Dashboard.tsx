
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  FileText, 
  MapPin, 
  Users, 
  ArrowRight,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import ScholarshipCard from './ScholarshipCard';
import MentorshipCard from './MentorshipCard';

interface DashboardProps {
  userName: string;
}

const Dashboard = ({ userName }: DashboardProps) => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('pt-BR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  }).format(currentDate);
  
  const quickAccess = [
    {
      title: 'Bolsas e Auxílios',
      path: '/scholarships',
      icon: <Award className="h-6 w-6" />,
      color: 'bg-purple-100'
    },
    {
      title: 'Mentorias',
      path: '/mentorship',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-blue-100'
    },
    {
      title: 'Mapa',
      path: '/map',
      icon: <MapPin className="h-6 w-6" />,
      color: 'bg-emerald-100'
    },
    {
      title: 'Horários',
      path: '/schedule',
      icon: <Calendar className="h-6 w-6" />,
      color: 'bg-amber-100'
    },
    {
      title: 'Regulamentos',
      path: '/regulations',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-indigo-100'
    },
    {
      title: 'Trabalhos',
      path: '/academic-help',
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-rose-100'
    }
  ];

  // Example data
  const upcomingScholarships = [
    {
      id: 1,
      title: 'Bolsa de Iniciação Científica',
      deadline: '2023-06-15',
      value: 'R$ 400,00',
      type: 'Pesquisa'
    },
    {
      id: 2,
      title: 'Auxílio Permanência',
      deadline: '2023-06-10',
      value: 'R$ 300,00',
      type: 'Assistência'
    }
  ];
  
  const availableMentors = [
    {
      id: 1,
      name: 'Ana Silva',
      course: 'Engenharia de Computação',
      semester: 8,
      expertise: 'Programação, Cálculo',
      profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      id: 2,
      name: 'Carlos Santos',
      course: 'Administração',
      semester: 6,
      expertise: 'Finanças, Marketing',
      profileImage: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  const todayClasses = [
    {
      id: 1,
      name: 'Matemática Discreta',
      time: '10:00 - 11:40',
      location: 'Bloco A, Sala 202'
    },
    {
      id: 2,
      name: 'Algoritmos',
      time: '14:00 - 15:40',
      location: 'Bloco C, Sala 305'
    }
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-uniconecta-soft to-uniconecta-softBlue p-6 rounded-lg shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-uniconecta-dark">
              Olá, {userName}!
            </h1>
            <p className="text-uniconecta-secondary mt-1 capitalize">
              {formattedDate}
            </p>
          </div>
          <Link 
            to="/notifications" 
            className="mt-4 md:mt-0 inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm text-sm text-uniconecta-tertiary hover:bg-uniconecta-soft transition-all"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notificações
          </Link>
        </div>
      </div>
      
      {/* Quick access section */}
      <div className="mb-8">
        <h2 className="uniconecta-subtitle mb-4">Acesso Rápido</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {quickAccess.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center p-4 rounded-xl hover:shadow-md transition-all text-center"
            >
              <div className={cn("p-3 rounded-full mb-3", item.color)}>
                {React.cloneElement(item.icon, { className: "text-uniconecta-dark" })}
              </div>
              <span className="text-xs md:text-sm font-medium text-uniconecta-dark">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Today's classes section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="uniconecta-subtitle">Aulas de Hoje</h2>
          <Link 
            to="/schedule"
            className="text-uniconecta-primary text-sm hover:underline inline-flex items-center"
          >
            Ver todas
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="space-y-3">
          {todayClasses.map((classItem) => (
            <div 
              key={classItem.id} 
              className="uniconecta-card flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-semibold text-uniconecta-dark">{classItem.name}</h3>
                <p className="text-sm text-uniconecta-neutral">{classItem.location}</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="uniconecta-badge-primary">{classItem.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Upcoming scholarships section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="uniconecta-subtitle">Bolsas com Inscrições Abertas</h2>
          <Link 
            to="/scholarships"
            className="text-uniconecta-primary text-sm hover:underline inline-flex items-center"
          >
            Ver todas
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="space-y-3">
          {upcomingScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      </div>
      
      {/* Available mentors section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="uniconecta-subtitle">Mentores Disponíveis</h2>
          <Link 
            to="/mentorship"
            className="text-uniconecta-primary text-sm hover:underline inline-flex items-center"
          >
            Ver todos
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableMentors.map((mentor) => (
            <MentorshipCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
