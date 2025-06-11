
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Award, 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  FileText, 
  Users, 
  Bell, 
  Settings, 
  Shield,
  Menu, 
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      name: 'Bolsas e Auxílios',
      path: '/scholarships',
      icon: <Award className="h-5 w-5" />
    },
    {
      name: 'Mentorias',
      path: '/mentorship',
      icon: <Users className="h-5 w-5" />
    },
    {
      name: 'Mapa',
      path: '/map',
      icon: <MapPin className="h-5 w-5" />
    },
    {
      name: 'Horários',
      path: '/schedule',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      name: 'Regulamentos',
      path: '/regulations',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      name: 'Trabalhos',
      path: '/academic-help',
      icon: <FileText className="h-5 w-5" />
    },
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-uniconecta-light z-50">
        <div className="flex items-center justify-between px-2">
          {navigationItems.slice(0, 5).map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 text-xs",
                location.pathname === item.path 
                  ? "text-uniconecta-primary" 
                  : "text-uniconecta-neutral hover:text-uniconecta-secondary"
              )}
            >
              {React.cloneElement(item.icon, { 
                className: cn("h-5 w-5 mb-1", 
                  location.pathname === item.path 
                    ? "text-uniconecta-primary" 
                    : "text-uniconecta-neutral"
                ) 
              })}
              {item.name}
            </Link>
          ))}
          <button 
            onClick={toggleMobileMenu}
            className="flex flex-col items-center justify-center py-2 px-3 text-xs text-uniconecta-neutral"
          >
            <Menu className="h-5 w-5 mb-1" />
            Mais
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-uniconecta-dark/50 z-50 flex flex-col">
          <div className="bg-white p-4 mt-auto rounded-t-2xl animate-accordion-down">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-uniconecta-dark">Menu</h2>
              <button onClick={toggleMobileMenu} className="p-2 text-uniconecta-neutral hover:text-uniconecta-primary">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  onClick={toggleMobileMenu}
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-uniconecta-light/50 text-center"
                >
                  {React.cloneElement(item.icon, { className: "h-6 w-6 mb-2 text-uniconecta-secondary" })}
                  <span className="text-xs text-uniconecta-dark">{item.name}</span>
                </Link>
              ))}
              <Link 
                to="/notifications" 
                onClick={toggleMobileMenu}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-uniconecta-light/50 text-center"
              >
                <Bell className="h-6 w-6 mb-2 text-uniconecta-secondary" />
                <span className="text-xs text-uniconecta-dark">Notificações</span>
              </Link>
              <Link 
                to="/admin" 
                onClick={toggleMobileMenu}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-uniconecta-light/50 text-center"
              >
                <Shield className="h-6 w-6 mb-2 text-uniconecta-secondary" />
                <span className="text-xs text-uniconecta-dark">Administração</span>
              </Link>
              <Link 
                to="/profile" 
                onClick={toggleMobileMenu}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-uniconecta-light/50 text-center"
              >
                <Settings className="h-6 w-6 mb-2 text-uniconecta-secondary" />
                <span className="text-xs text-uniconecta-dark">Perfil</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop Navigation */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 md:border-r md:border-uniconecta-light md:bg-white md:p-4">
        <div className="flex items-center justify-center py-4">
          <GraduationCap className="h-8 w-8 text-uniconecta-primary mr-2" />
          <h1 className="text-xl font-bold text-uniconecta-dark">UniConecta</h1>
        </div>
        
        <nav className="mt-8 flex-1">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-lg",
                  location.pathname === item.path
                    ? "bg-uniconecta-soft text-uniconecta-primary"
                    : "text-uniconecta-neutral hover:bg-uniconecta-light hover:text-uniconecta-secondary"
                )}
              >
                {React.cloneElement(item.icon, { 
                  className: cn("h-5 w-5 mr-3", 
                    location.pathname === item.path 
                      ? "text-uniconecta-primary" 
                      : "text-uniconecta-neutral"
                  ) 
                })}
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        
        <div className="mt-6 pt-6 border-t border-uniconecta-light">
          <div className="space-y-1">
            <Link
              to="/notifications"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-uniconecta-neutral hover:bg-uniconecta-light hover:text-uniconecta-secondary"
            >
              <Bell className="h-5 w-5 mr-3 text-uniconecta-neutral" />
              Notificações
            </Link>
            <Link
              to="/admin"
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg",
                location.pathname === '/admin'
                  ? "bg-uniconecta-soft text-uniconecta-primary"
                  : "text-uniconecta-neutral hover:bg-uniconecta-light hover:text-uniconecta-secondary"
              )}
            >
              <Shield className={cn("h-5 w-5 mr-3", 
                location.pathname === '/admin'
                  ? "text-uniconecta-primary"
                  : "text-uniconecta-neutral"
              )} />
              Administração
            </Link>
            <Link
              to="/profile"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-uniconecta-neutral hover:bg-uniconecta-light hover:text-uniconecta-secondary"
            >
              <Settings className="h-5 w-5 mr-3 text-uniconecta-neutral" />
              Perfil
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
