import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogosStrip from "@/components/LogosStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ProofOfWork from "@/components/ProofOfWork";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-graphite-900 text-white">
      <Nav />
      <main>
        <Hero />
        <LogosStrip />
        <Services />
        <Process />
        <ProofOfWork />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
