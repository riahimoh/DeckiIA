import React from 'react';

interface StatCardProps {
  emoji: string;
  value: string;
  description: string;
  subtext: string;
}

const StatCard: React.FC<StatCardProps> = ({ emoji, value, description, subtext }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
      <div className="text-5xl mb-6 flex justify-center">{emoji}</div>
      <div className="space-y-3 flex flex-col items-center">
        <div className="text-3xl font-bold text-primary">{value}</div>
        <div className="text-lg text-gray-700">{description}</div>
        <div className="text-sm text-gray-600 max-w-xs">{subtext}</div>
      </div>
    </div>
  );
};

const ReassuranceSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-neutral">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            emoji="🌟"
            value="4,7 / 5"
            description="Note moyenne"
            subtext="Basée sur les retours de milliers d'apprenants satisfaits"
          />
          <StatCard 
            emoji="👥"
            value="30 000"
            description="Apprenants accompagnés"
            subtext="Formations accessibles et résultats concrets"
          />
          <StatCard 
            emoji="👩‍🏫"
            value="140"
            description="Mentors spécialisés"
            subtext="Dans plus de 30 thématiques métiers"
          />
        </div>
      </div>
    </section>
  );
};

export default ReassuranceSection;