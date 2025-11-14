"use client";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode, useEffect, useState } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="relative">
        {/* Sticky Navbar with scroll animation */}
        <div
          className={`fixed w-full z-9999 px-3 lg:px-0 transition-all duration-300 ${
            isScrolled ? "top-5" : "top-10 lg:top-20"
          }`}
        >
          <Navbar />
        </div>

        {/* Page Content */}
        {children}

        <Footer />
      </div>
  );
};

export default MainLayout;
