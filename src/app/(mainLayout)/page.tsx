import Challenges from "@/components/HomePage/Challenges/Challenges";
import Hero from "@/components/HomePage/Hero/Hero";
import Partner from "@/components/HomePage/Partner/Partner";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import Results from "@/components/HomePage/Results/Results";
import Services from "@/components/HomePage/Services/Services";
import TrustedClients from "@/components/HomePage/TrustedClients/TrustedClients";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner/>
      <Services/>
      <TrustedClients/>
      <RecentProjects/>
      <Results/>
      <Challenges/>
    </div>
  );
}
