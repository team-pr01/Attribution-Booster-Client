"use client";
import HowWeWork from "@/components/AboutUsPage/HowWeWork/HowWeWork";
import MissionAndVision from "@/components/AboutUsPage/MissionAndVision/MissionAndVision";
import CTA from "@/components/Reusable/CTA/CTA";
import { IMAGES } from "../../../../public/assets";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";

const AboutUs = () => {
  return (
    <div>
      <HeroSection
        heading="Driven by Data. Designed for Growth"
        description="Attribution Booster is a results-driven digital agency that blends advanced analytics, creative execution, and full-stack technology to help businesses scale faster and smarter. As a certified Google Partner, we don't just deliver services, we engineer growth strategies that convert."
        btnText="Explore Our Services"
        image={IMAGES.aboutUsHero}
        breadcrumbs={[{ label: "About Us" }]}
      />
      <MissionAndVision />
      <HowWeWork />
      <CTA
        heading={"Let’s Build Something That Grows"}
        description={
          "Have questions or need assistance? We're here to help! Reach out to us for inquiries, collaborations, or service requests, and our team will respond promptly. Let's start a conversation and explore how we can work together."
        }
        image={IMAGES.ctaAboutUs}
        buttonText={"Get in Touch"}
      />
    </div>
  );
};

export default AboutUs;