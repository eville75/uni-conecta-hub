
import React from 'react';
import Navigation from '@/components/Navigation';
import { MapPin, Search, Building, Bus, Coffee, BookOpen } from 'lucide-react';

const CampusMap = () => {
  // In a real app, we would implement an actual map view using a library like Google Maps or Mapbox
  // For now, we'll create a simple mockup of what the map interface would look like
  
  const buildingCategories = [
    { name: 'Salas de Aula', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Administrativo', icon: <Building className="h-5 w-5" /> },
    { name: 'Alimentação', icon: <Coffee className="h-5 w-5" /> },
    { name: 'Transporte', icon: <Bus className="h-5 w-5" /> },
  ];
  
  const buildings = [
    { id: 1, name: 'Bloco A - Engenharia', category: 'Salas de Aula' },
    { id: 2, name: 'Bloco B - Humanidades', category: 'Salas de Aula' },
    { id: 3, name: 'Bloco C - Ciências', category: 'Salas de Aula' },
    { id: 4, name: 'Biblioteca Central', category: 'Administrativo' },
    { id: 5, name: 'Restaurante Universitário', category: 'Alimentação' },
    { id: 6, name: 'Ponto de Ônibus', category: 'Transporte' },
    { id: 7, name: 'Secretaria Acadêmica', category: 'Administrativo' },
    { id: 8, name: 'Cantina', category: 'Alimentação' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="uniconecta-title mb-4 md:mb-0">Mapa da Universidade</h1>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-uniconecta-neutral" />
              <input
                type="text"
                placeholder="Buscar locais no campus..."
                className="uniconecta-input pl-9"
              />
            </div>
          </div>
          
          {/* Map categories */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {buildingCategories.map((category, index) => (
              <button 
                key={index} 
                className="bg-white rounded-lg p-3 shadow-sm flex flex-col items-center justify-center border border-uniconecta-light hover:bg-uniconecta-soft transition-all text-center"
              >
                {React.cloneElement(category.icon, { className: "h-5 w-5 mb-2 text-uniconecta-primary" })}
                <span className="text-xs text-uniconecta-dark">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Map view */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="h-64 md:h-96 w-full bg-uniconecta-softBlue flex items-center justify-center relative">
              {/* This would be replaced by an actual map component */}
              <div className="text-center">
                <MapPin className="h-10 w-10 text-uniconecta-primary mx-auto mb-2 animate-bounce" />
                <p className="text-uniconecta-neutral">Mapa interativo do campus</p>
                <p className="text-xs text-uniconecta-secondary mt-1">
                  Use os controles para navegar ou selecione um local na lista abaixo
                </p>
              </div>
              
              {/* Map overlay controls */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
                <div className="flex flex-col space-y-2">
                  <button className="p-2 hover:bg-uniconecta-soft rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uniconecta-dark">
                      <path d="M12 19V5M5 12l7-7 7 7"></path>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-uniconecta-soft rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uniconecta-dark">
                      <path d="M19 12H5M12 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-uniconecta-soft rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uniconecta-dark">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-uniconecta-soft rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uniconecta-dark">
                      <path d="M12 5v14M5 12l7 7 7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Zoom controls */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md">
                <button className="p-2 border-b border-uniconecta-light hover:bg-uniconecta-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uniconecta-dark">
                    <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7"></path>
                  </svg>
                </button>
                <button className="p-2 hover:bg-uniconecta-soft">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uniconecta-dark">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Buildings list */}
          <h2 className="uniconecta-subtitle mb-4">Locais no Campus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {buildings.map(building => (
              <button
                key={building.id}
                className="uniconecta-card flex items-center hover:bg-uniconecta-soft transition-all text-left"
              >
                <MapPin className="h-5 w-5 text-uniconecta-primary mr-3" />
                <div>
                  <h3 className="font-medium text-uniconecta-dark">{building.name}</h3>
                  <p className="text-xs text-uniconecta-neutral">{building.category}</p>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CampusMap;
