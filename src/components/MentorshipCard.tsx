
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MentorshipCardProps {
  mentor: {
    id: number;
    name: string;
    course: string;
    semester: number;
    expertise: string;
    profileImage: string;
  };
}

const MentorshipCard = ({ mentor }: MentorshipCardProps) => {
  return (
    <div className="uniconecta-card flex flex-col md:flex-row">
      <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0 md:mr-4">
        <img 
          src={mentor.profileImage} 
          alt={mentor.name} 
          className="h-16 w-16 rounded-full object-cover border-2 border-uniconecta-soft"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-semibold text-uniconecta-dark">{mentor.name}</h3>
        <p className="text-sm text-uniconecta-neutral mb-1">
          {mentor.course} • {mentor.semester}º semestre
        </p>
        <p className="text-xs text-uniconecta-secondary mb-3">
          <span className="font-medium">Expertise:</span> {mentor.expertise}
        </p>
        
        <div className="flex space-x-2">
          <Link 
            to={`/mentor/${mentor.id}`}
            className="uniconecta-btn-outline flex-1 text-sm py-1.5 flex items-center justify-center"
          >
            Ver perfil
          </Link>
          <button className="uniconecta-btn-primary flex-1 text-sm py-1.5 flex items-center justify-center">
            <MessageCircle className="h-4 w-4 mr-1" />
            Conversar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipCard;
