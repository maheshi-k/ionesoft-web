import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ctaData } from "../data/cta";

export default function CTA() {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-lime-700 via-green-900 to-lime-700">
          {/* Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 -bottom-32 w-[500px] h-[500px] rounded-full bg-lime-500/10" />

            <div className="absolute left-1/4 -top-56 w-[700px] h-[700px] rounded-full border border-white/5" />

            <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-green-700/20" />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              {/* Left Content */}
              <div className="text-center lg:text-left max-w-xl">
                <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">
                  {ctaData.title}
                </h2>

                <p className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed">
                  {ctaData.description}
                </p>
              </div>

              {/* Right Stats */}
              <div className="w-full lg:w-auto">
                <div className="grid grid-cols-3 gap-6 md:gap-10">
                  {ctaData.stats.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={index} className="text-center text-white">
                        <Icon
                          size={40}
                          strokeWidth={1.8}
                          className="mx-auto mb-4"
                        />

                        <h3 className="text-3xl md:text-4xl font-bold">
                          {item.value}
                        </h3>

                        <p className="mt-2 text-sm md:text-base text-white/90 leading-snug">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-10 text-center lg:text-left">
              <Link
                href={ctaData.buttonLink}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform duration-300"
              >
                {ctaData.buttonText}
                <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
