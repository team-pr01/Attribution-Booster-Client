import Challenges from "@/components/HomePage/Challenges/Challenges";
import CollaborationProcess from "@/components/HomePage/CollaborationProcess/CollaborationProcess";
import ContactUs from "@/components/HomePage/ContactUs/ContactUs";
import Hero from "@/components/HomePage/Hero/Hero";
import Partner from "@/components/HomePage/Partner/Partner";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import Results from "@/components/HomePage/Results/Results";
import Services from "@/components/HomePage/Services/Services";
import Team from "@/components/HomePage/Team/Team";
import Testimonial from "@/components/HomePage/Testimonial/Testimonial";
import TrustedClients from "@/components/HomePage/TrustedClients/TrustedClients";
import VideoIntro from "@/components/HomePage/VideoIntro/VideoIntro";
import CTA from "@/components/Reusable/CTA/CTA";
import { IMAGES } from "../../../public/assets";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partner />
      <Services />
      <CTA
        heading={"Enjoy 10% Off When You Choose Our Annual Package"}
        description={
          "Take advantage of a special 10% discount on your first annual subscription. This limited-time offer is exclusively available for new customers. Don't miss out—subscribe today and start plan!"
        }
        image={IMAGES.packageOffer}
        buttonText={"Start Now"}
      />
      <TrustedClients />
      <RecentProjects />
      <Results />
      <VideoIntro />
      <Team />
      <Testimonial />
      <CollaborationProcess />
      <ContactUs />
      <Challenges />
    </div>
  );
}
