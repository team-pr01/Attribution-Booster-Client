"use client";
import { useParams } from "next/navigation";
import servicesData from "../../../../../data/services.data.json";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import ServiceDetailsSection from "@/components/ServicePage/ServiceDetailsSection/ServiceDetailsSection";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import CTA from "@/components/Reusable/CTA/CTA";
import { IMAGES } from "../../../../../../public/assets";
import HowWeWork from "@/components/AboutUsPage/HowWeWork/HowWeWork";

const ServiceChild = () => {
  const params = useParams();
  const parentSlug = params.slug;
  const childSlug = params.child;

  // Find parent by slug
  const parentService = servicesData.services.find(
    (service) => service.slug === parentSlug
  );
  // Find child by slug
  const childService =
    parentService && parentService.children
      ? parentService.children.find((child) => child.slug === childSlug)
      : null;

  // If child service not found, show error
  if (!childService) {
    return <div>Service not found</div>;
  }

  // Transform child service data to match the expected format for ServiceeDetails
  const transformedService = {
    id: childService.id,
    title: childService.title,
    subtitle:
      childService.subtitle ||
      `What You Will Get with Our ${childService.title} Services`,
    details:
      typeof childService.details === "string"
        ? childService.details
        : childService.details?.title ||
          `Professional ${childService.title} services tailored to your needs.`,
    features: childService.details?.points || [],
    sectionImages: childService.sectionImages || [],
    children: [],
  };

  console.log("Transformed Service:", childService?.heroImage);

  return (
    <div>
      <HeroSection
        heading={childService.title}
        description={transformedService.details}
        btnText="Explore Our Services"
        image={childService.heroImage}
        breadcrumbs={[{ label: "Our Expert Team" }]}
      />
      <ServiceDetailsSection service={transformedService} parentSlug={parentSlug} />
      <HowWeWork />
      <RecentProjects />
      <CTA
        heading={"Need a tailored solution? Let's Talk"}
        description={
          "Every business is unique, and so are its challenges. We craft customized design solutions that align perfectly with your goals. Let’s discuss your vision and turn it into a seamless, user-friendly experience."
        }
        image={IMAGES.ctaTeam}
        buttonText={"Lets Talk"}
      />
    </div>
  );
};

export default ServiceChild;