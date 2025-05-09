import React from 'react';
import { Notebook as Robot, MessageSquare, Brain, LineChart, UserCog, Sparkles } from 'lucide-react';

interface ProgramItemProps {
  icon: React.ReactNode;
  title: string;
}

const ProgramItem: React.FC<ProgramItemProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1">
      <div className="text-green-600 mr-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
  );
};

const ProgramSection: React.FC = () => {
  const programItems = [
    {
      icon: <Robot className="w-6 h-6" />,
      title: 'Introduction à l\'IA Générative',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Premiers pas sur ChatGPT',
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Initiation au prompt engineering',
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Construire sa stratégie marketing digital avec ChatGPT',
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: 'Faire de ChatGPT un super assistant',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Boîte à outils et fonctionnalités avancées',
    },
  ];

  return (
    <section id="program" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-900">
          Ce que tu vas apprendre
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Un programme complet et progressif pour maîtriser l'IA sans être expert technique
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programItems.map((item, index) => (
            <ProgramItem key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;