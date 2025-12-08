import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import { IMAGES } from "../../../../public/assets";
import Container from "@/components/Shared/Container/Container";
import { privacyPolicyContent } from "@/data/privacy-policy";



const Privacy = () => {
  return (
    <div className="font-Poppins">
      <HeroSection
        heading="Privacy Policy"
        description="Learn how we collect, use, protect, and manage your personal information responsibly and transparently.”"
        btnText="Reach Out To Us"
        image={IMAGES.privacyPolicyHero}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <Container>
        <div className="py-16 px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary-5">
            Privacy Policy
          </h1>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
            <p className="text-base text-white/80 mb-8 text-center">
              Attribution Booster (“we,” “our,” or “us”) respects your privacy
              and is committed to protecting the personal information of our
              users (“you” or “your”). This Privacy Policy explains how we
              collect, use, disclose, and safeguard your data when you use our
              website, services, or tools (collectively, the “Services”).
              <br />
              <br />
              By accessing or using our Services, you acknowledge that you have
              read, understood, and agree to this Privacy Policy. If you do not
              agree, please discontinue use of our Services immediately.
            </p>
            {privacyPolicyContent?.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-5 mb-3">
                  {section.title}
                </h2>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  {section.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-5 mb-3">
                Contact Us
              </h2>
              <ul className="list-disc pl-6 text-white/80 space-y-2">
                <li>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or your data rights, please reach out to
                  us:
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@attributionbooster.com"
                    className=" hover:underline"
                  >
                    info@attributionbooster.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+447848145804" className=" hover:underline">
                    +447848145804
                  </a>
                </li>
                <li>
                  Address: Suite A, 82 James Carter Road, Mildenhall, Bury St.
                  Edmunds, United Kingdom, IP28 7DE
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Privacy;
