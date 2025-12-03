/* eslint-disable @typescript-eslint/no-explicit-any */
import servicesData from "../../../../../data/services.data.json";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import ServiceDetailsSection from "@/components/ServicePage/ServiceDetailsSection/ServiceDetailsSection";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import CTA from "@/components/Reusable/CTA/CTA";
import { IMAGES } from "../../../../../../public/assets";
import HowWeWork from "@/components/AboutUsPage/HowWeWork/HowWeWork";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params = [];
  
  for (const service of servicesData.services) {
    if (service.children && Array.isArray(service.children)) {
      for (const child of service.children) {
        params.push({
          slug: service.slug,
          child: child.slug,
        });
      }
    }
  }
  
  return params;
}

// In Next.js 13+ App Router, params is a Promise
type PageProps = {
  params: Promise<{
    slug: string;
    child: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ServiceChild = async ({ params }: PageProps) => {
  // IMPORTANT: Await the params Promise
  const resolvedParams = await params;
  const { slug: parentSlug, child: childSlug } = resolvedParams;
  
  // Debug logging
  console.log("Parent Slug:", parentSlug);
  console.log("Child Slug:", childSlug);
  
  // If parameters are not found, show 404
  if (!parentSlug || !childSlug) {
    console.error("Failed to extract slug parameters");
    notFound();
  }

  // Find the parent service
  const parentService = servicesData.services.find(
    (service) => service.slug === parentSlug
  );

  if (!parentService) {
    console.error(`Parent service with slug "${parentSlug}" not found`);
    notFound();
  }

  // Find the child service
  const childService = parentService.children?.find(
    (child) => child.slug === childSlug
  );

  if (!childService) {
    console.error(`Child service with slug "${childSlug}" not found in parent "${parentSlug}"`);
    notFound();
  }

  // Transform the service data for the component
  const transformedService = {
    id: childService.id,
    title: childService.title,
    subtitle:
      (childService as any).subtitle ||
      `What You Will Get with Our ${childService.title} Services`,
    details:
      typeof childService.details === "string"
        ? childService.details
        : (childService.details as {title: string}).title ||
          `Professional ${childService.title} services tailored to your needs.`,
    features: childService.details?.points || [],
    sectionImages: childService.sectionImages || [],
    children: [],
  };

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
        heading="Need a tailored solution? Let's Talk"
        description="Every business is unique, and so are its challenges. We craft customized design solutions that align perfectly with your goals."
        image={IMAGES.ctaTeam}
        buttonText="Let's Talk"
      />
    </div>
  );
};

export default ServiceChild;