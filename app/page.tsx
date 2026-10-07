import { CapSection } from "@/components/cap-section";
import { CommunitiesSection } from "@/components/communities-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProofBar } from "@/components/proof-bar";
import { SiteFooter } from "@/components/site-footer";
import { SupportSection } from "@/components/support-section";
import { TraceySection } from "@/components/tracey-section";
import { WhySection } from "@/components/why-section";

export default function Home() {
  return (
    <>
      <main id="top">
        <Hero />
        <ProofBar />
        <WhySection />
        <CommunitiesSection />
        <SupportSection />
        <CapSection />
        <TraceySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}