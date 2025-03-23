import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import SocialProof from '@/components/SocialProof';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import SectionDividerCTA from '@/components/SectionDividerCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* CTA between Hero and How It Works */}
      <SectionDividerCTA buttonText="Start Your Learning Journey" theme="light" />
      
      <HowItWorks />
      
      {/* CTA between How It Works and Benefits */}
      <SectionDividerCTA buttonText="Get Your Personalized Path" theme="dark" />
      
      <BenefitsSection />
      
      {/* CTA between Benefits and Social Proof */}
      <SectionDividerCTA buttonText="Join Successful Learners" theme="light" />
      
      <SocialProof />
      
      <CallToAction />
      <Footer />
    </main>
  );
}
