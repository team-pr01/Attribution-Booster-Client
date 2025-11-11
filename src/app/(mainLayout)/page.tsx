import Challenges from "@/components/HomePage/Challenges/Challenges";
import CollaborationProcess from "@/components/HomePage/CollaborationProcess/CollaborationProcess";
import Hero from "@/components/HomePage/Hero/Hero";
import PackageOffer from "@/components/HomePage/PackageOffer/PackageOffer";
import Partner from "@/components/HomePage/Partner/Partner";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import Results from "@/components/HomePage/Results/Results";
import Services from "@/components/HomePage/Services/Services";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import TrustedClients from "@/components/HomePage/TrustedClients/TrustedClients";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner/>
      <Services/>
      <PackageOffer/>
      <TrustedClients/>
      <RecentProjects/>
      <Results/>
      <Testimonial/>
      <CollaborationProcess/>
      <Challenges/>
    </div>
  );
}
