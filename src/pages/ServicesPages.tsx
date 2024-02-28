import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { OthersServices } from "../components/OtherServices";
import { ServicesInfoCompany } from "../components/ServicesInfoSection";
import { ServicesSection } from "../components/ServicesSection";

export function ServicesPages() {
  return (
    <>
      <Navbar />
      <ServicesSection />
      <ServicesInfoCompany />
      <OthersServices />
      <Footer />
    </>
  );
}
