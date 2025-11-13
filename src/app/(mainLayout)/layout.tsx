import Footer from "@/components/Shared/Footer/Footer";
import SmoothScroll from "@/components/SmoothScroll";
// import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SmoothScroll>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </SmoothScroll>
  );
};

export default MainLayout;
