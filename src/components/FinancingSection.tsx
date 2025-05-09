import React from 'react';
import { BadgeCheck, CreditCard, Award } from 'lucide-react';

const FinancingSection: React.FC = () => {
  const certifications = [
    {
      src: "https://i.postimg.cc/X7Y08wF7/france-come-tences.png",
      alt: "France Compétences Certification"
    },
    {
      src: "https://i.postimg.cc/cCsGP3bh/choose-my-compagny.png",
      alt: "Choose My Company ESG Certification"
    },
    {
      src: "https://i.postimg.cc/2jTsVVJp/logo-france-num.jpg",
      alt: "France Num"
    },
    {
      src: "https://i.postimg.cc/3x0VS9w7/edtechfrance-logo.jpg",
      alt: "EdTech France"
    }
  ];

  return (
    <section id="financing" className="py-16 px-4 bg-gradient-to-b from-white to-neutral">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
          Une formation reconnue & finançable
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ce programme est porté par un organisme certifié, soumis à audits réguliers.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32 mb-12">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`flex justify-center items-center ${
                index === 0 ? 'md:scale-[2.5] transform-gpu' : ''
              }`}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-[80px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="text-secondary mb-4">
              <BadgeCheck className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">💸 Finançable</h3>
            <p className="text-gray-600">
              Par CPF, France Travail, OPCO, FAF et autres organismes de financement de la formation professionnelle.
              Une équipe dédiée prend en charge votre dossier. Vous n'avez rien à gérer, on s'occupe de tout.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="text-secondary mb-4">
              <CreditCard className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">🤝 Paiement échelonné</h3>
            <p className="text-gray-600">
              Possibilité de paiement échelonné (jusqu'à 12 mois) pour nous adapter à tous les budgets, avec notre partenaire Alma.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="text-secondary mb-4">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary">✅ Suivi personnalisé</h3>
            <p className="text-gray-600">
              Un suivi personnalisé et des ressources de qualité pour garantir votre progression et votre réussite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingSection;