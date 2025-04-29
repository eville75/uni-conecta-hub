
import React from 'react';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  React.useEffect(() => {
    // Show welcome toast when the page first loads
    toast({
      title: "Bem-vindo ao UniConecta!",
      description: "O aplicativo que conecta você à sua vida universitária.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="md:pl-64">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Dashboard userName="Maria" />
        </main>
      </div>
    </div>
  );
};

export default Index;
