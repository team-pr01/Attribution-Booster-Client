/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { IMAGES } from "../../../../public/assets";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      name: "PPC Advertising",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.ppcAdvertising,
    },
    {
      name: "Analytics and Conversion Tracking",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.analyticsConversionTracking,
    },
    {
      name: "Social Media Marketing",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.socialMediaMarketing,
    },
    {
      name: "SEO",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.seo,
    },
    {
      name: "Cyber Security",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.cyberSecurity,
    },
    {
      name: "Web Development",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.webDevelopment,
    },
    {
      name: "Video Editing",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.videoEditing,
    },
    {
      name: "App Development",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.appDevelopment,
    },
    {
      name: "CMS Web Development",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.cmsDevelopment,
    },
    {
      name: "UI/UX Design",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.uiUxDesign,
    },
    {
      name: "Google Ads",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.googleAds,
    },
    {
      name: "Graphics Design",
      description:
        "Our expert team manages all aspects of your email campaigns, from creating engaging content to analyzing campaign performance.",
      icon: IMAGES.graphicsDesign,
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <Image
        src={IMAGES.serviceCircle}
        alt=""
        className="w-[523px] h-[652px] absolute top-32 -right-56 opacity-[0.10] z-999"
      />
      <Image src={IMAGES.globeCircle} alt="" className="size-[114px] blur-[10px] absolute top-[500px] -left-10" />
      <div className="max-w-[1531px] mx-auto mt-[111px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h1 className="font-MartianBThai text-white text-[56px] font-semibold leading-[61px] max-w-[850px]">
            Unleash server-side tracking's potential with us!
          </h1>
          <p className="text-white text-lg leading-[30px] max-w-[430px]">
            Maximize Your Campaign’s Potential and Boost Your ROI with Our
            Advanced Tracking Tools and Techniques.
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-4 gap-5">
          {servicesData?.map((service) => (
            <ServiceCard key={service?.name} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
