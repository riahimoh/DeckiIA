import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyAiSection from './components/WhyAiSection';
import AudienceSection from './components/AudienceSection';
import ProgramSection from './components/ProgramSection';
import FinancingSection from './components/FinancingSection';
import TrainingFormatSection from './components/TrainingFormatSection';
import ReassuranceSection from './components/ReassuranceSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'DeclikIA - Comprendre et utiliser l\'IA sans être expert';
  }, []);

  return (
    <div className="font-poppins bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyAiSection />
        <AudienceSection />
        <ProgramSection />
        <FinancingSection />
        <TrainingFormatSection />
        <ReassuranceSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;