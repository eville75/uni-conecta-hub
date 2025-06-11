
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Bell, Calendar, Award, Users, BookOpen, CheckCircle, X } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'scholarship',
      title: 'Nova bolsa disponível',
      message: 'Bolsa de Iniciação Científica com inscrições abertas até 15/06/2023',
      time: '2 horas atrás',
      read: false,
      icon: Award
    },
    {
      id: 2,
      type: 'mentorship',
      title: 'Mentoria agendada',
      message: 'Sua mentoria com Pedro Almeida está marcada para hoje às 14:00',
      time: '4 horas atrás',
      read: false,
      icon: Users
    },
    {
      id: 3,
      type: 'deadline',
      title: 'Prazo próximo',
      message: 'Entrega do trabalho de Algoritmos em 2 dias',
      time: '1 dia atrás',
      read: true,
      icon: Calendar
    },
    {
      id: 4,
      type: 'class',
      title: 'Alteração de horário',
      message: 'Aula de Matemática Discreta transferida para sala B-204',
      time: '2 dias atrás',
      read: true,
      icon: BookOpen
    },
    {
      id: 5,
      type: 'system',
      title: 'Bem-vindo ao UniConecta!',
      message: 'Complete seu perfil para receber recomendações personalizadas',
      time: '3 dias atrás',
      read: true,
      icon: Bell
    }
  ];

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="uniconecta-title">Notificações</h1>
              {unreadCount > 0 && (
                <p className="text-uniconecta-neutral text-sm mt-1">
                  {unreadCount} notificação{unreadCount > 1 ? 'ões' : ''} não lida{unreadCount > 1 ? 's' : ''}
                </p>
              )}
            </div>
            
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="uniconecta-btn-outline"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Marcar todas como lidas
              </button>
            )}
          </div>

          <div className="space-y-3">
            {notifications.length > 0 ? (
              notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div 
                    key={notification.id}
                    className={`uniconecta-card relative ${!notification.read ? 'border-l-4 border-l-uniconecta-primary bg-uniconecta-soft/30' : ''}`}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full mr-4 ${
                        notification.type === 'scholarship' ? 'bg-purple-100' :
                        notification.type === 'mentorship' ? 'bg-blue-100' :
                        notification.type === 'deadline' ? 'bg-amber-100' :
                        notification.type === 'class' ? 'bg-emerald-100' :
                        'bg-gray-100'
                      }`}>
                        <IconComponent className="h-5 w-5 text-uniconecta-secondary" />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className={`font-semibold ${!notification.read ? 'text-uniconecta-dark' : 'text-uniconecta-neutral'}`}>
                              {notification.title}
                            </h3>
                            <p className="text-sm text-uniconecta-neutral mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-uniconecta-secondary mt-2">
                              {notification.time}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-2 ml-4">
                            {!notification.read && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-uniconecta-primary hover:bg-uniconecta-soft p-1 rounded"
                                title="Marcar como lida"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </button>
                            )}
                            <button
                              onClick={() => removeNotification(notification.id)}
                              className="text-uniconecta-neutral hover:text-red-500 p-1 rounded"
                              title="Remover notificação"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                <Bell className="h-12 w-12 text-uniconecta-neutral mx-auto mb-4" />
                <h3 className="text-lg font-medium text-uniconecta-dark mb-2">
                  Nenhuma notificação
                </h3>
                <p className="text-uniconecta-neutral">
                  Você está em dia com todas as suas notificações!
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
