import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "../../types/services";

interface Props {
  services: Service;
}

export default function ServiceCard({ services }: Props) {
  return (
    <Link href={services.singlehref}>
      <article className="group flex h-full items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#78B62A] hover:shadow-lg">
        {/* Left Icon */}
        <div className="flex h-25 w-25 shrink-0 items-center justify-center rounded-full bg-[#78B62A]/10">
          <Image
            src={services.icon}
            alt={services.title}
            width={100}
            height={80}
            className="h-20 w-20 object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            {services.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {services.description}
          </p>

          <span className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-[var(--primary-text)] opacity-0 transition duration-300 group-hover:opacity-100">
            Learn More
            <ArrowRight size={16} />
          </span>
        </div>

        {/* Right Illustration */}
        {services.image && (
          <div className="hidden shrink-0 lg:block">
            <Image
              src={services.image}
              alt={services.title}
              width={110}
              height={90}
              className="h-40 w-40 object-contain transition duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </article>
    </Link>
  );
}
