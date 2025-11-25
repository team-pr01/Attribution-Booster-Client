import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";
import ContactUs from "@/components/HomePage/ContactUs/ContactUs";
import Map from "@/components/ContactUsPage/Map/Map";

const ContactUsPage = () => {
  return (
    <div>
      <HeroSection
        heading="Let's get in touch"
        description="Whether you have a question, need support, or want to explore how we can work together, feel free to reach out"
        btnText="Explore Our Services"
        image={IMAGES.contactUsHero}
        breadcrumbs={[{ label: "Contact us" }]}
      />
      <ContactUs/>
      <Map/>
    </div>
  );
};

export default ContactUsPage;
