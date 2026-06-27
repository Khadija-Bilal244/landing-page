
import Hero from "./Hero";
import Superiority from "./Superiority";
import Slider from "./Slider";
import ContactForm from "./ContactForm";
import FAQSection from "./FAQSection";
import PopularServices from "./PopularServices";
import ImpactStats from "./ImpactSales";
import WhyChooseNexus from "./WhyChooseNexus";
import Sectors from "./Sectors";
import GdprTrusted from "./GdprTrusted";
import "../styles/Home.css";
function Home() {
  return (
    <>
      <Hero />
      <WhyChooseNexus/>
      <Superiority />
      <PopularServices/>
      <ImpactStats/>
      <Sectors/>
      <GdprTrusted/>
      <Slider />
      <ContactForm />
      <FAQSection />
    </>
  );
}

export default Home;
