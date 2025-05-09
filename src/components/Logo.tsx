import React from 'react';

const Logo: React.FC<{ isFooter?: boolean }> = ({ isFooter = false }) => {
  return (
    <div className={`flex items-center ${isFooter ? 'h-24' : 'h-24 md:h-[7.8rem]'}`}>
      <img 
        src="https://i.postimg.cc/KcLKbhsg/Declick-IA.png" 
        alt="Logo Declik IA"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;