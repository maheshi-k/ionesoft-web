import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCF6]">
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#7CB342]/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#7CB342]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex rounded-full bg-[#7CB342]/10 px-4 py-2 text-sm font-semibold text-[#7CB342]">
              Enterprise Software Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Our guaranteed <br className="hidden lg:block" />
              solution for <br className="hidden lg:block" />
              your business
              <span className="text-[#7CB342]"> needs</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
              Innovative software solutions designed to simplify operations,
              automate workflows and accelerate business growth.
            </p>

            <Link
              href="#products"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7CB342] px-6 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute inset-0 rounded-full bg-[#7CB342]/10 blur-2xl" />

            <Image
              src="/images/products/dashboard.png"
              alt="Software Dashboard"
              width={650}
              height={500}
              className="relative z-10 w-full object-contain"
            />

            <div className="absolute left-2 top-8 rounded-full bg-white p-3 shadow-xl md:p-4">
              🌐
            </div>

            <div className="absolute bottom-6 left-10 rounded-full bg-white p-3 shadow-xl md:left-20 md:p-4">
              📦
            </div>

            <div className="absolute bottom-20 right-2 rounded-full bg-white p-3 shadow-xl md:p-4">
              ✔️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
