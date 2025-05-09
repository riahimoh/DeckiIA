import React from 'react';

interface ProgramPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramPopup({ isOpen, onClose }: ProgramPopupProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const programDetails = [
    {
      title: 'Introduction à l\'IA Générative',
      details: [
        'Comprendre ce qu\'est l\'IA générative et en quoi elle diffère des autres types d\'IA',
        'Découvrir les cas d\'usage concrets pour votre activité professionnelle',
      ]
    }
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Programme détaillé</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-6">
          {programDetails.map((section, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}