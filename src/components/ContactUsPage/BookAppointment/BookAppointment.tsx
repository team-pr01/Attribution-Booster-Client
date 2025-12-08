"use client";
import { motion } from "framer-motion";
import Script from "next/script";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/rahulchandrasutradhar3/30min?background_color=07f4fa";

const BookAppointment = () => {
  return (
    <motion.div
      className="relative w-full h-[80vh] rounded-2xl overflow-hidden mt-20 xl:mt-40"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-label="Book a meeting"
    >
      <div className="text-center">
        <motion.h2 className="font-MartianBThai text-white text-2xl sm:text-3xl xl:text-[56px] font-semibold leading-10 xl:leading-[61px]">
          Book Appointment
        </motion.h2>

        <motion.p
          transition={{ delay: 0.1 }}
          className="text-neutral-300 text-sm lg:text-lg leading-6 lg:leading-[30px] font-Poppins mt-5"
        >
          Book a 30 min meeting with us to learn more about our services.
        </motion.p>
      </div>

      {/* Calendly scrip */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget w-full h-full"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "100%" }}
      />
    </motion.div>
  );
};

export default BookAppointment;
