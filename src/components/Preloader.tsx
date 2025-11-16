"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "../../public/assets";

const Preloader: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-neutral-5 flex items-center justify-center z-[999999]
      transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="animate-logo-scale">
        <Image
          src={IMAGES.logo}
          alt="Logo"
          width={300}
          height={60}
          priority
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Preloader;
