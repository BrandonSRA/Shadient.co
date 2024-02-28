import { CompanyInfoCompany } from "../components/CompanyInfoSection";
import { CompanySection } from "../components/CompanySection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";

export function CompanyPages() {
  return (
    <>
      <Navbar />
      <CompanySection />
      <CompanyInfoCompany />
      <Footer />
    </>
  );
}
