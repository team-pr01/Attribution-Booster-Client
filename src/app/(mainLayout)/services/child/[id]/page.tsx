/* eslint-disable @typescript-eslint/no-explicit-any */
import CTA from "@/components/Reusable/CTA/CTA";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import ServiceDetailsSection from "@/components/ServicePage/ServiceDetailsSection/ServiceDetailsSection";
import servicesData from "../../../../../data/services.data.json";
import HowWeWork from "@/components/AboutUsPage/HowWeWork/HowWeWork";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import { IMAGES } from "../../../../../../public/assets";
import { use } from "react";

export const dynamicParams = false;
export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    id: service.id,
  }));
}

const ServiceChild = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params);
  const childId = resolvedParams.id;

  // Find the child service by ID from all services
  let childService = null;
  let parentService = null;
  console.log(parentService);

  for (const service of servicesData?.services) {
    if (service.children && service.children.length > 0) {
      const foundChild = service.children.find((child) => child.id === childId);
      if (foundChild) {
        childService = foundChild;
        parentService = service;
        break;
      }
    }
  }

  // If child service not found, show error
  if (!childService) {
    return <div>Service not found</div>;
  }

  // Transform child service data to match the expected format for ServiceeDetails
  const transformedService = {
    id: childService.id,
    title: childService.title,
    subtitle:
      (childService as any).subtitle ||
      `What You Will Get with Our ${childService.title} Services`,
    details:
      typeof childService.details === "string"
        ? childService.details
        : "title" in (childService.details ?? {})
          ? (childService.details as { title: string }).title
          : (childService.details as { description: string }).description ||
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
      <ServiceDetailsSection service={transformedService} />
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
