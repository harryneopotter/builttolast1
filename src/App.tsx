import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WhyBuiltToLast } from './components/sections/WhyBuiltToLast';
import { Services } from './components/sections/Services';
import { CostEstimator } from './components/sections/CostEstimator';
import { PricingPackages } from './components/sections/PricingPackages';
import { AppTracking } from './components/sections/AppTracking';
import { Testimonials } from './components/sections/Testimonials';
import { ProjectsGallery } from './components/sections/ProjectsGallery';
import { HowItWorks } from './components/sections/HowItWorks';
import { ReferralProgram } from './components/sections/ReferralProgram';
import { Partners } from './components/sections/Partners';
import { Press } from './components/sections/Press';
import { FAQ } from './components/sections/FAQ';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <WhyBuiltToLast />
          <Services />
          <CostEstimator />
          <PricingPackages />
          <AppTracking />
          <Testimonials />
          <ProjectsGallery />
          <HowItWorks />
          <ReferralProgram />
          <Partners />
          <Press />
          <FAQ />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
