
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Camera, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: 'Maria Silva',
    email: 'maria.silva@univmail.com',
    phone: '(11) 98765-4321',
    course: 'Ciência da Computação',
    semester: '4',
    registrationId: '20210012345',
    bio: 'Estudante de Ciência da Computação apaixonada por tecnologia e inovação.',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    // Here you would typically save to your backend
    alert('Perfil atualizado com sucesso!');
  };

  const courses = [
    'Ciência da Computação',
    'Engenharia de Computação',
    'Administração',
    'Psicologia',
    'Direito',
    'Engenharia Civil',
    'Medicina',
    'Arquitetura'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-20 md:pb-6">
          <div className="flex items-center mb-6">
            <Link 
              to="/profile" 
              className="mr-4 p-2 rounded-lg hover:bg-uniconecta-soft transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-uniconecta-neutral" />
            </Link>
            <h1 className="uniconecta-title">Editar Perfil</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="uniconecta-subtitle mb-4">Foto do Perfil</h2>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img 
                    src={formData.profileImage} 
                    alt="Profile" 
                    className="h-24 w-24 rounded-full object-cover border-2 border-uniconecta-soft"
                  />
                  <button 
                    type="button"
                    className="absolute bottom-0 right-0 bg-uniconecta-primary text-white p-2 rounded-full shadow-lg hover:bg-uniconecta-secondary transition-colors"
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-uniconecta-neutral mb-2">
                    Clique no ícone da câmera para alterar sua foto
                  </p>
                  <p className="text-xs text-uniconecta-secondary">
                    Formatos aceitos: JPG, PNG (máx. 5MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="uniconecta-subtitle mb-4">Informações Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-uniconecta-dark mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="uniconecta-input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-uniconecta-dark mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="uniconecta-input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-uniconecta-dark mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="uniconecta-input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="registrationId" className="block text-sm font-medium text-uniconecta-dark mb-1">
                    Matrícula
                  </label>
                  <input
                    type="text"
                    id="registrationId"
                    name="registrationId"
                    value={formData.registrationId}
                    onChange={handleInputChange}
                    className="uniconecta-input w-full bg-gray-100"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="uniconecta-subtitle mb-4">Informações Acadêmicas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-uniconecta-dark mb-1">
                    Curso
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="uniconecta-select w-full"
                    required
                  >
                    {courses.map(course => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="semester" className="block text-sm font-medium text-uniconecta-dark mb-1">
                    Semestre
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    className="uniconecta-select w-full"
                    required
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(sem => (
                      <option key={sem} value={sem.toString()}>{sem}º semestre</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="bio" className="block text-sm font-medium text-uniconecta-dark mb-1">
                  Biografia (opcional)
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="uniconecta-input w-full resize-none"
                  placeholder="Conte um pouco sobre você, seus interesses e objetivos acadêmicos..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Link to="/profile" className="uniconecta-btn-outline">
                Cancelar
              </Link>
              <button 
                type="submit" 
                disabled={isLoading}
                className="uniconecta-btn-primary disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Salvar Alterações
                  </>
                )}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
