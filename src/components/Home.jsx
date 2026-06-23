
import Hero from "./Hero";
import Superiority from "./Superiority";
import TrustedBanner from "./TrustedBanner";
import Slider from "./Slider";
import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import PopularServices from "./PopularServices";
import ImpactStats from "./ImpactSales";
import WhyChooseNexus from "./WhyChooseNexus";
function Home() {
  return (
    <>
      <Hero />
      <WhyChooseNexus/>
      <Superiority />
      <PopularServices/>
      <ImpactStats/>
      <TrustedBanner />
      <Slider />
      <ContactForm />
      <FAQSection />
    </>
  );
}

export default Home;
