import { HeroSection } from "../types/Hero";
import { ArrowRight } from "lucide-react";
import DotPattern from "./DotPattern";

type HeroProps = {
  data: HeroSection;
};

export default function Hero({ data }: HeroProps) {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6 relative">
      <div className="absolute lg:left-[8%] left-[3%] lg:top-20 top-[1%]">
        <DotPattern />
      </div>

      <div className="absolute md:right-[8%] right-[3%] md:bottom-10 bottom-[1%]">
        <DotPattern />
      </div>
      <div className="flex flex-col md:max-w-[80%]">
        {/* Badge */}
        <p className="text-lg md:text-xl lg:text-[28px] text-[var(--primary-text)] font-semibold uppercase tracking-wide mb-4">
          {data.badge}
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[90px] font-bold leading-tight">
          {data.title.line1}{" "}
          <span className="text-[var(--primary-text)]">
            {data.title.highlight}
          </span>
          <br />
          {data.title.line2}
        </h1>

        {/* Description */}
        <p className="mt-6 text-[var(--text-light)] text-[24px]">
          {data.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 mt-8 justify-center md:flex-row">
          <a
            href={data.primaryButton.url}
            className="bg-[var(--primary-bg)] text-xl text-white px-6 py-3 rounded-full font-semibold flex items-center gap-3 hover:bg-[var(--primary-hover)] transition"
          >
            {data.primaryButton.label} <ArrowRight size={18} />
          </a>

          <a
            href={data.secondaryButton.url}
            className="border border-[var(--primary-bg)] text-xl text-[var(--primary-text)] px-6 py-3 rounded-full flex items-center gap-3 font-semibold hover:bg-[var(--primary-hover-opc)] transition"
          >
            {data.secondaryButton.label}
          </a>
        </div>
      </div>
    </section>
  );
}
