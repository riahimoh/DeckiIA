import React from 'react';
import { Briefcase, UserRound, Lightbulb } from 'lucide-react';

interface AudienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center">
      <div className="text-secondary mb-6 p-4 bg-neutral rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AudienceSection: React.FC = () => {
  const audiences = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Créateurs d\'entreprise',
      description:
        'Pour ceux qui lancent leur projet et veulent utiliser l\'IA comme accélérateur de croissance dès le départ.',
    },
    {
      icon: <UserRound className="w-10 h-10" />,
      title: 'Freelances & indépendants',
      description:
        'Pour les professionnels qui souhaitent augmenter leur productivité et proposer plus de valeur à leurs clients.',
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: 'Curieux du digital',
      description:
        'Pour tous ceux qui veulent comprendre et maîtriser l\'IA, même sans connaissances techniques préalables.',
    },
  ];

  return (
    <section id="public-cible" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
          À qui s'adresse cette formation ?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Une approche adaptée à différents profils, avec un accompagnement personnalisé
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <AudienceCard
              key={index}
              icon={audience.icon}
              title={audience.title}
              description={audience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;