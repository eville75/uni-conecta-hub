
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  
  // Generate an array of days for the week view
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentDay);
    date.setDate(date.getDate() - date.getDay() + i);
    return date;
  });
  
  // Format a date to display day of week and day of month
  const formatDayDisplay = (date: Date) => {
    const dayOfWeek = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(date);
    const dayOfMonth = date.getDate();
    return { dayOfWeek, dayOfMonth };
  };
  
  // Example class schedule data
  const classSchedule = [
    {
      id: 1,
      day: 1, // Monday (0 is Sunday in JavaScript)
      name: 'Matemática Discreta',
      time: '10:00 - 11:40',
      location: 'Bloco A, Sala 202',
      professor: 'Dr. Ricardo Silva'
    },
    {
      id: 2,
      day: 1, // Monday
      name: 'Algoritmos',
      time: '14:00 - 15:40',
      location: 'Bloco C, Sala 305',
      professor: 'Dra. Ana Pereira'
    },
    {
      id: 3,
      day: 2, // Tuesday
      name: 'Banco de Dados',
      time: '08:00 - 09:40',
      location: 'Bloco B, Sala 401',
      professor: 'Dr. Marcos Santos'
    },
    {
      id: 4,
      day: 3, // Wednesday
      name: 'Linguagens de Programação',
      time: '10:00 - 11:40',
      location: 'Laboratório 2',
      professor: 'Dr. Carlos Oliveira'
    },
    {
      id: 5,
      day: 3, // Wednesday
      name: 'Estruturas de Dados',
      time: '16:00 - 17:40',
      location: 'Bloco C, Sala 201',
      professor: 'Dra. Mariana Costa'
    },
    {
      id: 6,
      day: 4, // Thursday
      name: 'Engenharia de Software',
      time: '14:00 - 17:40',
      location: 'Bloco A, Sala 305',
      professor: 'Dr. Paulo Mendes'
    },
    {
      id: 7,
      day: 5, // Friday
      name: 'Inteligência Artificial',
      time: '10:00 - 11:40',
      location: 'Laboratório 1',
      professor: 'Dra. Fernanda Lima'
    },
  ];
  
  // Get classes for a specific day
  const getClassesForDay = (dayOfWeek: number) => {
    return classSchedule.filter(c => c.day === dayOfWeek).sort((a, b) => {
      const timeA = a.time.split(' - ')[0];
      const timeB = b.time.split(' - ')[0];
      return timeA.localeCompare(timeB);
    });
  };

  // Navigate to previous week
  const goToPreviousWeek = () => {
    const newDate = new Date(currentDay);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDay(newDate);
  };

  // Navigate to next week
  const goToNextWeek = () => {
    const newDate = new Date(currentDay);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDay(newDate);
  };
  
  // Get the current month and year for display
  const currentMonthYear = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(currentDay);

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() && 
           date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="uniconecta-title mb-4 md:mb-0">Horários e Salas de Aula</h1>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={goToPreviousWeek}
                className="p-2 rounded-full hover:bg-uniconecta-soft transition-all"
                aria-label="Semana anterior"
              >
                <ChevronLeft className="h-5 w-5 text-uniconecta-dark" />
              </button>
              
              <div className="text-uniconecta-secondary font-medium">
                {currentMonthYear}
              </div>
              
              <button 
                onClick={goToNextWeek}
                className="p-2 rounded-full hover:bg-uniconecta-soft transition-all"
                aria-label="Próxima semana"
              >
                <ChevronRight className="h-5 w-5 text-uniconecta-dark" />
              </button>
            </div>
          </div>
          
          {/* Week view */}
          <div className="grid grid-cols-7 gap-2 mb-6">
            {weekDays.map((date, index) => {
              const { dayOfWeek, dayOfMonth } = formatDayDisplay(date);
              return (
                <button 
                  key={index}
                  className={`flex flex-col items-center py-3 rounded-lg ${
                    isToday(date) 
                      ? 'bg-uniconecta-primary text-white' 
                      : 'bg-white hover:bg-uniconecta-soft transition-all'
                  }`}
                >
                  <span className="text-xs uppercase">{dayOfWeek}</span>
                  <span className="text-lg font-medium">{dayOfMonth}</span>
                </button>
              );
            })}
          </div>
          
          {/* Classes for selected day (showing today's classes by default) */}
          <div className="mb-6">
            <h2 className="uniconecta-subtitle mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Aulas de Hoje
            </h2>
            
            {getClassesForDay(new Date().getDay()).length > 0 ? (
              <div className="space-y-4">
                {getClassesForDay(new Date().getDay()).map(classItem => (
                  <div key={classItem.id} className="uniconecta-card">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="font-semibold text-uniconecta-dark">{classItem.name}</h3>
                      <div className="uniconecta-badge-primary mt-2 md:mt-0">
                        {classItem.time}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-uniconecta-neutral text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {classItem.location}
                      </div>
                      <div className="flex items-center text-uniconecta-neutral text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {classItem.time}
                      </div>
                      <div className="text-uniconecta-neutral text-sm">
                        Professor: {classItem.professor}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <p className="text-uniconecta-neutral">
                  Não há aulas programadas para hoje.
                </p>
              </div>
            )}
          </div>
          
          {/* Weekly overview */}
          <div>
            <h2 className="uniconecta-subtitle mb-4">Visão Geral da Semana</h2>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-uniconecta-light">
                <thead className="bg-uniconecta-soft">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                      Dia
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                      Disciplina
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider hidden md:table-cell">
                      Horário
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider hidden md:table-cell">
                      Local
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-uniconecta-light">
                  {classSchedule.map(classItem => {
                    const dayName = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(
                      new Date(2023, 0, 2 + classItem.day) // January 2, 2023 was a Monday
                    );
                    
                    return (
                      <tr key={classItem.id} className="hover:bg-uniconecta-soft/30">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-uniconecta-dark capitalize">
                          {dayName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-dark">
                          {classItem.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral hidden md:table-cell">
                          {classItem.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral hidden md:table-cell">
                          {classItem.location}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Schedule;
