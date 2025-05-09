import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo isFooter />
          </div>
          <div className="text-center md:text-right text-gray-600 max-w-md">
            <p>
              Declik IA est un projet porté par Mohamed, business développeur chez LiveMentor.
              Son objectif : vous aider à ne pas rater le virage IA.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              © {new Date().getFullYear()} DeclikIA. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;