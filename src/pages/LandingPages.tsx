import { WelcomeSection } from "../components/WelcomeSection";
import { SectionInfo } from "../components/SectionInfo";
import { OfferSection } from "../components/OfferSection";
import { ChoseUsSection } from "../components/ChoseUsSection";

export function LandingPage() {
  return (
    <>
      <WelcomeSection />
      <SectionInfo />
      <OfferSection />
      <ChoseUsSection />
    </>
  );
}
