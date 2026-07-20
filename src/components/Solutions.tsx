import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Solutions() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[var(--primary-text)] font-semibold uppercase tracking-wide">
            Our Solutions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Innovative Solutions.
            <br />
            Real Business Impact
          </h2>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative p-6">
                {/* Badge */}
                <span className="absolute -top-5 left-6 inline-flex rounded-full bg-[var(--primary-bg)] px-4 py-2 text-sm font-medium text-white shadow-md">
                  {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900 leading-snug min-h-[72px]">
                  {project.title}
                </h3>

                <Link
                  href={project.href}
                  className="mt-8 inline-flex items-center gap-2 text-[var(--primary-text)] font-semibold"
                >
                  View Case Study
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/*View more */}
        <div className="mt-14 text-center">
          <p className="mb-6 text-gray-600 text-lg ">
            Explore our complete range of software solutions and products.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 rounded-full bg-[var(--primary-bg)] px-6 py-3 text-lg font-semibold text-white transition hover:bg-[var(--primary-hover)]"
          >
            View More Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
