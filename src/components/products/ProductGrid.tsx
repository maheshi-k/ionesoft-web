import Image from "next/image";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import ProductRightimg from "../../../public/images/products/product-side.webp";
import HeroBg from "../../../public/images/products/hero-bg.webp";

export default function ProductGrid() {
  return (
    <section>
      {/* Top Banner */}
      <div className="relative overflow-hidden py-16 lg:py-0">
        <Image
          src={HeroBg}
          alt=""
          fill
          priority
          className="-z-10 object-cover"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:py-20">
          {/* Left */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-bold text-black md:text-5xl">
              Innovative And Integrative Solutions
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Innovative software solutions designed to simplify operations,
              enhance productivity, and drive growth.
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={ProductRightimg}
              alt="Dashboard"
              width={900}
              height={600}
              loading="eager"
              className="w-full max-w-[650px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="lg:py-20 md:py-10 sm:py-5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--primary-text)]">
              Our Solutions
            </p>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-3xl">
              Powerful Solutions For Every Business Need
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              From automation to management, our products are built to empower
              your business at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
