import React from 'react';
import { Clock, FileText, LineChart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
      <div className="text-secondary mb-6 p-4 bg-neutral rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyAiSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Automatisation des tâches chronophages',
      description:
        'Libérez du temps précieux en automatisant les processus répétitifs et concentrez-vous sur ce qui compte vraiment.',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Création de contenu plus rapide',
      description:
        'Générez des textes, des idées et du contenu de qualité en une fraction du temps habituellement nécessaire.',
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: 'Aide à la décision et à la stratégie',
      description:
        'Obtenez des insights pertinents pour mieux orienter vos actions commerciales et marketing.',
    },
  ];

  return (
    <section 
      id="why-ai" 
      className="py-16 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-primary">
          Pourquoi l'IA change tout ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAiSection;