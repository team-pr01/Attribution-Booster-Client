/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/components/Shared/Container/Container";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServiceDetailsSection({ service, parentSlug }: any) {
  if (!service) return null;

  // Get features from service data
  const features = service.features || [];

  // Split features into chunks of 5
  const chunkFeatures = (array: any, size: any) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const featureChunks = chunkFeatures(features, 5);

  // Section Images
  const images =
    service.sectionImages && service.sectionImages.length > 0
      ? service.sectionImages
      : [];

  // Get subtitle
  const getSubtitle = () => {
    // First check if service has a subtitle property
    if (service.subtitle) {
      return service.subtitle;
    }

    // For services with children, try to get subtitle from first child's details
    if (service.children && service.children.length > 0) {
      const firstChild = service.children[0];
      if (
        firstChild.details &&
        typeof firstChild.details === "object" &&
        firstChild.details.title
      ) {
        return firstChild.details.title;
      }
    }
    // Fallback to a default subtitle or service title
    return `What You Will Get with Our ${service.title} Services`;
  };

  return (
    <Container>
      <div className="pt-20">
        {featureChunks.map((chunk, index) => {
          const isEven = index % 2 === 0;
          const imageIndex = index % images.length;

          return (
            <div
              key={index}
              className={`grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 xl:gap-12 2xl:gap-16 items-center ${
                index > 0 ? "py-12 lg:py-20" : ""
              }`}
            >
              {/* Content Section */}
              <div className={`container ${!isEven ? "lg:order-2" : ""}`}>
                {/* Show subtitle only for the first section */}
                {index === 0 && (
                  <h3 className="text-3xl font-semibold text-white mb-6 font-MartianBThai">
                    {getSubtitle()}
                  </h3>
                )}
                <ul className="space-y-3 text-slate-200">
                  {chunk.map((feature: any, index: number) => (
                    <li key={index} className="flex items-start font-Poppins">
                      <FaCheck className="w-5 h-5 mr-3 mt-0.5 text-primary-5 shrink-0" />
                      <span className="text-base lg:test-lg text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Section */}
              <div className={`${!isEven ? "lg:order-1" : ""}`}>
                <img
                  src={images[imageIndex]}
                  alt="test"
                  className="rounded-lg"
                />
              </div>
            </div>
          );
        })}

        {/* If service has children, display them */}
        {service.children && service.children.length > 0 && (
          <div className="pt-20 border-t border-white/10 mt-20">
            <h3 className="font-MartianBThai text-white text-2xl lg:text-3xl font-semibold mb-8 text-center">
              Our {service.title} Services Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.children.map((child: any) => (
                <motion.a
                  key={child.id}
                  href={`/services/${parentSlug}/${child.slug}`}
                  className="h-full bg-neutral-10 group backdrop-blur-[15px] rounded-[10px] px-4 py-[30px] relative border border-transparent cursor-pointer shadow-[inset_0_0_20px_rgba(7,244,250,0.5)] h-[300px] cursor-pointer hover:transform hover:scale-105 transition duration-300"
                  whileHover="hover"
                  whileTap="hover"
                  initial="initial"
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  onTouchStart={(e) => {
                    const shine =
                      e.currentTarget.querySelector(".shine-border");
                    shine?.classList.add("shine-active");
                    setTimeout(
                      () => shine?.classList.remove("shine-active"),
                      300
                    );
                  }}
                  onClick={(e) => {
                    const shine =
                      e.currentTarget.querySelector(".shine-border");
                    shine?.classList.add("shine-active");
                    setTimeout(
                      () => shine?.classList.remove("shine-active"),
                      300
                    );
                  }}
                >
                  {/* Shine Border Effect */}
                  <div className="shine-border absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100"></div>
                  <div className="flex flex-col h-full">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-4">
                        <img
                          src={child.image || "/placeholder.svg"}
                          alt={child.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-center font-Poppins text-white">
                        {child.title}
                      </h4>
                    </div>
                    <p className="text-white/70 text-sm text-center mt-2">
                      {typeof child.details === "string"
                        ? child.details
                        : child.details?.title || ""}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
