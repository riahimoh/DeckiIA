import React from 'react';
import { Star, Users, GraduationCap } from 'lucide-react';

const ImpactGrid: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Star className="w-8 h-8 text-secondary mb-4" />
            <p className="text-xl font-semibold text-primary">4,7 / 5</p>
            <p className="text-gray-600">Note moyenne</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-8 h-8 text-secondary mb-4" />
            <p className="text-xl font-semibold text-primary">30 000</p>
            <p className="text-gray-600">Apprenants déjà accompagnés</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <GraduationCap className="w-8 h-8 text-secondary mb-4" />
            <p className="text-xl font-semibold text-primary">140</p>
            <p className="text-gray-600">Mentors spécialisés dans plus de 30 thématiques</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;