import React from 'react';
import Navigation from '@/components/Navigation';
import { User, Mail, Phone, BookOpen, MessageSquare, Bell, Settings, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  // Example user data
  const userData = {
    name: 'Maria Silva',
    email: 'maria.silva@univmail.com',
    phone: '(11) 98765-4321',
    course: 'Ciência da Computação',
    semester: 4,
    registrationId: '20210012345',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  };
  
  // Example mentorship history
  const mentorshipHistory = [
    {
      id: 1,
      mentorName: 'Pedro Almeida',
      date: '10/05/2023',
      topic: 'Estruturas de Dados',
      status: 'Concluída'
    },
    {
      id: 2,
      mentorName: 'Ana Pereira',
      date: '22/04/2023',
      topic: 'Banco de Dados',
      status: 'Concluída'
    },
    {
      id: 3,
      mentorName: 'Pedro Almeida',
      date: '15/03/2023',
      topic: 'Algoritmos',
      status: 'Concluída'
    }
  ];
  
  // Example notification preferences
  const notificationPreferences = [
    { id: 'new_scholarships', label: 'Novas bolsas disponíveis', enabled: true },
    { id: 'deadline_reminders', label: 'Lembretes de prazos', enabled: true },
    { id: 'class_changes', label: 'Alterações em aulas', enabled: true },
    { id: 'mentorship_messages', label: 'Mensagens de mentores', enabled: true },
    { id: 'university_news', label: 'Notícias da universidade', enabled: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <h1 className="uniconecta-title mb-6">Perfil do Usuário</h1>
          
          {/* User profile section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex justify-center mb-4 md:mb-0 md:mr-6">
                <img 
                  src={userData.profileImage} 
                  alt={userData.name} 
                  className="h-24 w-24 rounded-full object-cover border-2 border-uniconecta-soft"
                />
              </div>
              
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-uniconecta-dark mb-2">{userData.name}</h2>
                <p className="text-uniconecta-secondary mb-4">
                  {userData.course} • {userData.semester}º semestre
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center text-uniconecta-neutral">
                    <Mail className="h-4 w-4 mr-2" />
                    {userData.email}
                  </div>
                  <div className="flex items-center text-uniconecta-neutral">
                    <Phone className="h-4 w-4 mr-2" />
                    {userData.phone}
                  </div>
                  <div className="flex items-center text-uniconecta-neutral">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Matrícula: {userData.registrationId}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6">
                <Link to="/edit-profile" className="uniconecta-btn-outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mentorship history section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="uniconecta-subtitle">Histórico de Mentorias</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-uniconecta-light">
                <thead className="bg-uniconecta-soft">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                      Mentor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                      Tópico
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-uniconecta-tertiary uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-uniconecta-light">
                  {mentorshipHistory.map((mentorship) => (
                    <tr key={mentorship.id} className="hover:bg-uniconecta-soft/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-uniconecta-dark">
                        {mentorship.mentorName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                        {mentorship.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-uniconecta-neutral">
                        {mentorship.topic}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="uniconecta-badge-primary">
                          {mentorship.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Notification preferences section */}
          <div>
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-uniconecta-primary mr-2" />
              <h2 className="uniconecta-subtitle">Preferências de Notificação</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <p className="text-sm text-uniconecta-neutral mb-4">
                Gerencie quais notificações você deseja receber do UniConecta.
              </p>
              
              <div className="space-y-3">
                {notificationPreferences.map(pref => (
                  <div key={pref.id} className="flex items-center justify-between p-3 border border-uniconecta-light rounded-lg">
                    <div className="flex items-center">
                      {pref.id === 'new_scholarships' && <Award className="h-5 w-5 text-uniconecta-secondary mr-3" />}
                      {pref.id === 'deadline_reminders' && <Calendar className="h-5 w-5 text-uniconecta-secondary mr-3" />}
                      {pref.id === 'class_changes' && <BookOpen className="h-5 w-5 text-uniconecta-secondary mr-3" />}
                      {pref.id === 'mentorship_messages' && <MessageSquare className="h-5 w-5 text-uniconecta-secondary mr-3" />}
                      {pref.id === 'university_news' && <Bell className="h-5 w-5 text-uniconecta-secondary mr-3" />}
                      <span className="text-uniconecta-dark">{pref.label}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        defaultChecked={pref.enabled}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-uniconecta-soft rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-uniconecta-primary"></div>
                    </label>
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

export default Profile;

</edits_to_apply>
