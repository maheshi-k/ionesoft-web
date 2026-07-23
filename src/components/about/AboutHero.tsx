import Image from "next/image";
import StatCard from "./StatCard";
import { aboutHeroStats } from "../../data/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14 xl:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 xl:px-8">
        {/* Top content */}
        <div className="grid items-center gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:gap-14">
          {/* Left */}
          <div className="mx-auto max-w-3xl text-center xl:mx-0 xl:max-w-none xl:text-left">
            <span className="mb-4 inline-block text-base font-semibold uppercase tracking-wide text-[var(--primary-text)] md:text-lg">
              About Us
            </span>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-[56px]">
              Innovating Today for{" "}
              <span className="text-[var(--primary-text)] xl:block">
                a Smarter Tomorrow
              </span>
            </h1>

            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-7 text-gray-600 md:text-lg md:leading-8 xl:mx-0">
              <p>
                iOneSoft Solutions is a Singapore-based software development
                company and information technology firm incorporated in August
                2012.
              </p>

              <p>
                Our team combines more than 15 years of industry expertise with
                a young and vibrant development centre in Sri Lanka, delivering
                cost-effective software solutions, consulting, implementation,
                and maintenance services.
              </p>

              <p>
                We work with established partners to serve clients across
                Singapore and the Asia-Pacific region while providing responsive
                local support.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center xl:justify-end">
            <div className="absolute h-64 w-64 rounded-full bg-[#649B27]/10 blur-3xl md:h-80 md:w-80 xl:h-96 xl:w-96" />

            <Image
              src="/images/about/about-hero.webp"
              alt="About iOneSoft"
              width={1000}
              height={900}
              priority
              sizes="(max-width: 1279px) 80vw, 42vw"
              className="relative z-10 h-auto w-full max-w-xl rounded-xl object-contain md:max-w-2xl xl:max-w-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-gray-200 pt-8 sm:grid-cols-2 xl:mt-12 xl:grid-cols-4 xl:gap-8">
          {aboutHeroStats.map((item) => (
            <div key={item} className="flex justify-center xl:justify-start">
              <StatCard title={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
