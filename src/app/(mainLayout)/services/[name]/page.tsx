// app/services/[name]/page.tsx

import CTA from "@/components/Reusable/CTA/CTA";
import React from "react";
import { IMAGES } from "../../../../../public/assets";

// Tell Next which [name] values to pre-generate
export async function generateStaticParams() {
  // All service names you want to statically export
  const services = ["design", "development", "seo"]; // <- put your real slugs here

  return services.map((name) => ({ name }));
}

type ServiceDetailsProps = {
  params: { name: string };
};

const ServiceDetails = ({ params }: ServiceDetailsProps) => {
  const { name } = params; // you can use this to change content per service

  return (
    <div>
      <CTA
        heading={"Need a tailored solution?Let’s talk."}
        description={
          "Every business is unique, and so are its challenges. We craft customized design solutions that align perfectly with your goals. Let’s discuss your vision and turn it into a seamless, user-friendly experience."
        }
        image={IMAGES.ctaPortfolio}
        buttonText={"Lets Talk"}
      />
    </div>
  );
};

export default ServiceDetails;