import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import StatCard from "./StatCard";
import { aboutHeroStats } from "../../data/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[90%] px-4 sm:px-6 lg:max-w-[80%] lg:px-0">
        {/* Top content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="mb-4 inline-block text-base font-semibold uppercase tracking-wide text-[var(--primary-text)] sm:text-lg lg:text-xl">
              About Us
            </span>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[clamp(46px,4vw,60px)]">
              Innovating Today for
              <span className="block text-[var(--primary-text)]">
                a Smarter Tomorrow
              </span>
            </h1>

            <div className="mx-auto mt-6 max-w-xl space-y-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
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
          <div className="relative flex items-center justify-center lg:self-center">
            <div className="absolute h-64 w-64 rounded-full bg-[#649B27]/10 blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />

            <Image
              src="/images/about/about-hero.webp"
              alt="About iOneSoft"
              width={1000}
              height={900}
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="relative z-10 h-auto w-full max-w-md rounded-xl object-contain md:max-w-xl lg:max-w-2xl"
            />
          </div>
        </div>

        {/* Stats — separate full-width row */}
        <div className="mt-10 grid grid-cols-1 gap-5 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-8">
          {aboutHeroStats.map((item) => (
            <StatCard key={item} title={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
