import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={product.href} className="h-full">
      <div className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:flex-row lg:gap-4">
        <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[var(--bg-light-gray)] lg:mb-0 lg:h-24 lg:w-24">
          <Image
            src={product.image}
            alt={product.title}
            width={75}
            height={75}
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-1 flex-col">
          <div>
            <h3 className="mb-3 text-xl font-semibold leading-tight">
              {product.title}
            </h3>

            <p className="text-sm leading-7 text-gray-600">
              {product.description}
            </p>
          </div>

          <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-[var(--primary-text)]">
            Learn More
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
