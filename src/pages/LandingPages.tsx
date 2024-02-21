import { WelcomeSection } from "../components/WelcomeSection";
import { SectionInfo } from "../components/SectionInfo";
import { OfferSection } from "../components/OfferSection";
import { ChoseUsSection } from "../components/ChoseUsSection";
import { OurWorkSection } from "../components/OurWorkSection";

export function LandingPage() {
  return (
    <>
      <WelcomeSection />
      <SectionInfo />
      <OfferSection />
      <ChoseUsSection />
      <OurWorkSection />
    </>
  );
}
