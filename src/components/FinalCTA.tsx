import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-neutral">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
          Prêt à propulser ton projet avec l'IA ?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Ne laisse pas les technologies avancées te dépasser. Apprends à les maîtriser et utilise-les comme un véritable levier de croissance pour ton activité.
        </p>
        <div className="space-y-6">
          <div className="inline-block w-full sm:w-auto cta-bottom">
            <a
              href="https://forms.gle/pYKrGKp5AUzfA3sj8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 30px',
                backgroundColor: '#E67E22',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                visibility: 'visible',
                opacity: 1,
                zIndex: 1000
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#D35400';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#E67E22';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Lance-toi maintenant !
            </a>
          </div>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Un appel de 30 minutes pour découvrir comment l'IA peut vraiment faire avancer ton projet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;