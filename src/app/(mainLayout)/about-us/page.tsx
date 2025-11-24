"use client";
import AboutUsHero from "@/components/AboutUsPage/AboutUsHero/AboutUsHero";
import HowWeWork from "@/components/AboutUsPage/HowWeWork/HowWeWork";
import MissionAndVision from "@/components/AboutUsPage/MissionAndVision/MissionAndVision";
import CTA from "@/components/Reusable/CTA/CTA";
import { IMAGES } from "../../../../public/assets";

const AboutUs = () => {
  return (
    <div>
      <AboutUsHero />
      <MissionAndVision />
      <HowWeWork />
      <CTA
        heading={"Let’s Build Something That Grows"}
        description={
          "Have questions or need assistance? We’re here to help! Reach out to us for inquiries, collaborations, or service requests, and our team will respond promptly. Let’s start a conversation and explore how we can work together."
        }
        image={IMAGES.ctaAboutUs}
        buttonText={"Get in Touch"}
        
      />
    </div>
  );
};

export default AboutUs;
