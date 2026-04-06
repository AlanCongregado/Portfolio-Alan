import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EspecialidadesSection from "@/components/sections/EspecialidadesSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ValorAdicionalSection from "@/components/sections/ValorAdicionalSection";
import DisponibilidadSection from "@/components/sections/DisponibilidadSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ExperienceSection />
        <EspecialidadesSection />
        <CertificationsSection />
        <ValorAdicionalSection />
        <DisponibilidadSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
