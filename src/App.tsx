import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhyBuiltToLast } from './components/sections/WhyBuiltToLast';
import { CostEstimator } from './components/sections/CostEstimator';
import { PricingPackages } from './components/sections/PricingPackages';
import { AppTracking } from './components/sections/AppTracking';
import { Testimonials } from './components/sections/Testimonials';
import { ProjectsGallery } from './components/sections/ProjectsGallery';
import { HowItWorks } from './components/sections/HowItWorks';
import { FAQ } from './components/sections/FAQ';
import { ConsultationPopup } from './components/ui/ConsultationPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Show popup on page load if not submitted in last 24 hours
  useEffect(() => {
    const sessionSubmitted = sessionStorage.getItem('btl_form_submitted_session');
    const lastSubmission = localStorage.getItem('btl_form_submitted');

    if (sessionSubmitted) {
      // Already submitted in this session
      return;
    }

    if (lastSubmission) {
      const submissionTime = parseInt(lastSubmission, 10);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      if (now - submissionTime < twentyFourHours) {
        // Submitted within last 24 hours
        return;
      }
    }

    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000); // 3 second delay for better UX

    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
        <Header onOpenForm={openPopup} />
        <main>
          <Hero />
          <WhyBuiltToLast />
          <PricingPackages />
          <HowItWorks />
          <CostEstimator />
          <Testimonials />
          <ProjectsGallery />
          <FAQ />
          <AppTracking />
        </main>
        <Footer />
        <ConsultationPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </ThemeProvider>
  );
}

export default App;

