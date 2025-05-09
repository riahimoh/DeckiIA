import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="bg-neutral"
      style={{
        minHeight: '80vh',
        paddingTop: '6rem',
        paddingBottom: '2rem',
        marginBottom: '0'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 md:mt-[2cm]">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 
              className="md:text-left mb-6 text-[1.76rem] md:text-[2.2rem] font-bold leading-[1.4] text-center"
            >
              Comprendre l'Intelligence Artificielle,<br />
              Pas besoin d'être <span className="expert-word">expert<span className="inline-e">(e)</span></span> pour y arriver.
            </h1>

            <p 
              className="text-lg md:text-left text-center mb-4 max-w-[600px]"
            >
              Tu vas comprendre l'IA, l'utiliser concrètement, et l'intégrer dans ton activité grâce à une formation pensée spécialement pour les entrepreneurs.
            </p>

            <p 
              className="text-base md:text-left text-center max-w-[600px]"
            >
              L'intelligence artificielle peut t'aider à vendre mieux, automatiser plus, et booster ton projet — même si tu pars de zéro.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://i.postimg.cc/TP0VrLDm/1.png" 
              alt="Illustration cheffe entrepreneuse souriante" 
              className="max-w-[400px] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;