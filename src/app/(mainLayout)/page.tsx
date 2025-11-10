import Hero from "@/components/HomePage/Hero/Hero";
import Partner from "@/components/HomePage/Partner/Partner";
import Services from "@/components/HomePage/Services/Services";
import TrustedClients from "@/components/HomePage/TrustedClients/TrustedClients";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner/>
      <Services/>
      <TrustedClients/>
    </div>
  );
}
