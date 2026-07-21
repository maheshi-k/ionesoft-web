import Image from "next/image";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";
import ServiceRightimg from "../../../public/images/service/Service-side.webp";
import HeroBg from "../../../public/images/service/hero-bg.webp";

export default function ServiceGrid() {
  return (
    <section>
      {/* Top Banner */}
      <div className="relative overflow-hidden py-16 lg:py-5">
        <Image
          src={HeroBg}
          alt=""
          fill
          priority
          className="z-10 object-cover"
        />

        <div className="relative z-10 container mx-auto max-w-[90%] px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="mb-4 lg:text-left md:text-center text-4xl font-bold text-black lg:text-5xl leading-tight">
                Smart Solutions.{" "}
                <span className="text-[var(--primary-text)]">
                  Stronger Businesses
                </span>
              </h2>

              <p className="max-w-lg text-lg text-gray-600">
                We provide innovative technology services that help businesses
                streamline operations, enhance productivity , and drive growth.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <Image
                src={ServiceRightimg}
                alt="Dashboard"
                width={1000}
                height={650}
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="lg:py-20">
        <div className="container mx-auto flex flex-col items-center max-w-7xl px-4">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--primary-text)]">
              What We Offer
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-3xl">
              Technology Services That Drive Results
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              From strategy to implementation, our services help businesses
              innovate, optimize, and grow with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 max-w-[80%] md:pb-10 gap-6 lg:grid-cols-1">
            {services.map((service) => (
              <ServiceCard key={service.id} services={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
