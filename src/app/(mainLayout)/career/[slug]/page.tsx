import jobsData from "@/data/jobs.json";
import Image from "next/image";
import { ICONS, IMAGES } from "../../../../../public/assets";
import { use } from "react";
import HeroSection from "@/components/Reusable/HeroSection/HeroSection";
import Container from "@/components/Shared/Container/Container";

const jobs = jobsData.jobs;

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

const Career = ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = use(params); 

  const jobDetail = jobs.find((job) => job.slug === resolvedParams.slug);

  if (!jobDetail) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <HeroSection
        heading="Build the Future With Us"
        description="Our spaces are crafted to spark innovation, fuel bold ideas, and foster a community of forward-thinkers"
        btnText="Reach Out To Us"
        image={IMAGES.careerHero}
        breadcrumbs={[{ label: "Career" }]}
      />
      <Container>
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-8 relative overflow-hidden h-fit mt-16">
          {/* Shine Border Effect */}
          <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-50 m-0"></div>
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-7 md:gap-0 justify-between w-full">
            <div className=" flex flex-col gap-4">
              <p className="text-primary-5 text-sm lg:text-lg font-Poppins">
                {jobDetail?.category}
              </p>
              <h2 className="font-MartianBThai text-white group-hover:text-primary-5 text-xl 2xl:text-[32px] leading-9 font-semibold">
                {jobDetail?.title}
              </h2>

              <div className="flex items-center gap-3">
                <div className="bg-neutral-10 px-4 py-2 rounded-[42px] flex items-center gap-2.5 text-neutral-40 text-sm md:text-base">
                  <Image
                    src={ICONS.locationGray}
                    alt=""
                    className="size-4 md:size-5"
                  />
                  {jobDetail?.location}
                </div>
                <div className="bg-neutral-10 px-4 py-2 rounded-[42px] flex items-center gap-2.5 text-neutral-40 text-sm md:text-base">
                  <Image
                    src={ICONS.jobType}
                    alt=""
                    className="size-4 md:size-5"
                  />
                  {jobDetail?.type}
                </div>
              </div>
            </div>

            <div className=" flex flex-row md:flex-col gap-5">
              <div className="flex items-center gap-2.5 text-neutral-40 text-xs md:text-base">
                <Image src={ICONS.deadline} alt="" className="size-5" />
                {jobDetail?.date}
              </div>
              <a
                href={`mailto:adsexpertnurullah@gmail.com?subject=Application for the post of ${jobDetail?.title}`}
                target="_blank"
              >
                <button className="relative inline-flex items-center justify-center p-[3px] bg-primary-5 dark:bg-black rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "conic-gradient(from var(--angle), transparent 70%, #ffffff, transparent 100%)",
                      animation: "shimmer-spin 2s linear infinite",
                    }}
                  />
                  <span className="pl-[30px] pr-1 py-1 md:py-0 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-xs md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 group-hover:bg-primary-6 transition-colors duration-300">
                    Send Resume
                    <div className="bg-neutral-5 size-7 md:size-12 rounded-full flex items-center justify-center group-hover:bg-neutral-4 transition-colors duration-300">
                      <Image
                        src={ICONS.topRightArrow}
                        alt=""
                        className="size-6"
                      />
                    </div>
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="space-y-3 mt-10">
            <h2 className="text-xl font-bold text-white font-MartianBThai">
              Key Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 font-Poppins">
              {jobDetail?.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Required Skills & Qualifications */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white font-MartianBThai">
              Required Skills & Qualifications
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 font-Poppins">
              {jobDetail?.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Bonus If You Have */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white font-MartianBThai">
              Bonus If You Have
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 font-Poppins">
              {jobDetail?.bonus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* What Makes You an Expert */}
          {jobDetail?.expert && (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white font-MartianBThai">
                What Makes You an Expert
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 font-Poppins">
                {jobDetail?.expert.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* What We Offer */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white font-MartianBThai">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 font-Poppins">
              <li>Remote-first, flexible work culture</li>
              <li>Work with a passionate and experienced team</li>
              <li>Exposure to high-impact projects</li>
              <li>Learning budget & career growth opportunities</li>
              <li>Annual bonuses and performance incentives</li>
            </ul>
          </div>

          {/* How to Apply */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white font-MartianBThai">
              How to Apply
            </h2>
            <p className="text-gray-300 font-Poppins">
              Ready to join our team? Send your resume, portfolio, and LinkedIn
              profile to:
            </p>
            <a
              href={`mailto:adsexpertnurullah@gmail.com?subject=Application for the post of ${jobDetail?.title}`}
              target="_blank"
            >
              <button className="relative inline-flex items-center justify-center p-[3px] bg-primary-5 dark:bg-black rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(from var(--angle), transparent 70%, #ffffff, transparent 100%)",
                    animation: "shimmer-spin 2s linear infinite",
                  }}
                />
                <span className="pl-[30px] pr-1 py-1 md:py-0 bg-primary-5 font-Poppins text-neutral-5 rounded-[28px] font-medium text-sm md:text-lg leading-5 cursor-pointer relative flex items-center gap-2.5 group-hover:bg-primary-6 transition-colors duration-300">
                  Send Resume
                  <div className="bg-neutral-5 size-7 md:size-12 rounded-full flex items-center justify-center group-hover:bg-neutral-4 transition-colors duration-300">
                    <Image
                      src={ICONS.topRightArrow}
                      alt=""
                      className="size-6"
                    />
                  </div>
                </span>
              </button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Career;
