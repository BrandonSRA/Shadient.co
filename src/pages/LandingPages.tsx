import { WelcomeSection } from "../components/WelcomeSection";
import { SectionInfo } from "../components/SectionInfo";
import { OfferSection } from "../components/OfferSection";
import { ChoseUsSection } from "../components/ChoseUsSection";
import { OurWorkSection } from "../components/OurWorkSection";
import { CustomersSection } from "../components/CustomersSection";
import { DiscussSection } from "../components/DiscussSection";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <SectionInfo />
      <OfferSection />
      <ChoseUsSection />
      <OurWorkSection />
      <CustomersSection />
      <DiscussSection />
      <Footer />
    </>
  );
}
