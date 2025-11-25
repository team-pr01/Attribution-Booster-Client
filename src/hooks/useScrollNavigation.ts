"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const useScrollNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Auto scroll after navigation
  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollToSection");

    if (sectionId) {
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);

      sessionStorage.removeItem("scrollToSection");
    }
  }, [pathname]);

  // Navigation handler
  const navigateAndScroll = (targetPage: string, sectionId: string) => {
    if (pathname === targetPage) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      sessionStorage.setItem("scrollToSection", sectionId);
      router.push(targetPage);
    }
  };

  return { navigateAndScroll };
};
