import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block font-semibold uppercase tracking-wider text-[var(--primary-text)]">
            Our Services
          </span>

          <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 md:text-3xl lg:text-4xl">
            End-to-End IT Solutions
            <br />
            Built for Your Success
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e7f0d7]">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {service.description}
              </p>

              <Link
                href={service.singlehref}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--primary-text)]"
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
