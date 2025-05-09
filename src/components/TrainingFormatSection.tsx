import React from 'react';
import { BookOpen, Users } from 'lucide-react';

interface FormatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FormatCard: React.FC<FormatCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-secondary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TrainingFormatSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-neutral">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
          Un format pensé pour passer à l'action
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-8">
          <FormatCard
            icon={<BookOpen className="w-10 h-10" />}
            title="1 mois de contenu théorique"
            description="Formation 100% en ligne, accessible à votre rythme. Des bases solides pour comprendre et utiliser l'IA efficacement dans votre activité."
          />
          <FormatCard
            icon={<Users className="w-10 h-10" />}
            title="3 mois de mentoring avec un expert IA"
            description="Bénéficiez d'un accompagnement individualisé par un entrepreneur spécialiste de l'intelligence artificielle. Travail directement sur votre projet."
          />
        </div>

        <div className="bg-white p-8 rounded-lg text-center max-w-3xl mx-auto">
          <p className="text-2xl font-semibold text-primary">
            Apprenez par la pratique, directement sur votre propre projet !
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingFormatSection;