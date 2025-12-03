import servicesData from "@/data/services.data.json";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import ServiceDetailsSection from "@/components/ServicePage/ServiceDetailsSection/ServiceDetailsSection";
import HowWeWork from "@/components/AboutUsPage/HowWeWork/HowWeWork";
import RecentProjects from "@/components/HomePage/RecentProjects/RecentProjects";
import CTA from "@/components/Reusable/CTA/CTA";
import { IMAGES } from "../../../../../public/assets";
import { use } from "react";

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.slug,
  }));
}

const ServiceDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = use(params);
  const service = servicesData.services.find(
    (s) => s.slug === resolvedParams.slug
  );

  return (
    <div>
      <HeroSection
        heading={service?.title || ""}
        description={service?.details || ""}
        btnText="Explore Our Services"
        image={service?.heroImage}
        breadcrumbs={[{ label: "Our Expert Team" }]}
      />

      <ServiceDetailsSection
        service={service}
        parentSlug={resolvedParams.slug}
      />

      <HowWeWork />
      <RecentProjects />

      <CTA
        heading="Need a tailored solution? Let’s Talk"
        description="Every business is unique, and so are its challenges. We craft customized design solutions that align perfectly with your goals. Let’s discuss your vision and turn it into a seamless, user-friendly experience."
        image={IMAGES.ctaTeam}
        buttonText="Let’s Talk"
      />
    </div>
  );
};

export default ServiceDetails;
