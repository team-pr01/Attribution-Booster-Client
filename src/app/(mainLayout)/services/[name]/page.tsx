import CTA from "@/components/Reusable/CTA/CTA";
import React from "react";
import { IMAGES } from "../../../../../public/assets";

const ServiceDetails = () => {
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
