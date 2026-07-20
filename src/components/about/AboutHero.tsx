import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import StatCard from "./StatCard";
import { aboutHeroStats } from "../../data/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-15">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="text-lg md:text-xl lg:text-[20px] text-[var(--primary-text)] font-semibold uppercase tracking-wide mb-4">
              About Us
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-[60px] font-bold leading-tight">
              Innovating Today for a
              <span className="block text-[var(--primary-text)]">
                Smarter Tomorrow
              </span>
            </h1>

            <div className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              <p>
                iOneSoft Solutions is a Singapore software development company
                and information technology (IT) firm incorporated in August
                2012.
              </p>
              <br></br>

              <p>
                {" "}
                Our team consists of consultants with more than 15 years of
                industry expertise, while our development center in Sri Lanka is
                made up of young, vibrant professionals with strong technical
                expertise. Together, we provide cost-effective software
                solutions, consulting, implementation, and maintenance services
                across a wide range of industries and applications.
              </p>
              <br></br>

              <p>
                {" "}
                Today, we collaborate with established partners to deliver
                out-of-the-box solutions to clients across Singapore and the
                Asia-Pacific region, reducing total cost of ownership while
                providing responsive local support for their business needs.
              </p>
              <br></br>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {aboutHeroStats.map((item) => (
                <StatCard key={item} title={item} />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            <div className="absolute h-90 w-90 rounded-full bg-[#649B27]/10 blur-3xl"></div>

            <Image
              src="/images/about/about-hero.webp"
              alt="About iOneSoft"
              width={1000}
              height={900}
              priority
              className="relative z-10 w-full max-w-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
