// app/products/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productDetails } from "../../../data/productDetails";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productDetails[slug];

  if (!product) {
    return {};
  }

  return {
    title: product.seo?.title ?? product.title,
    description: product.seo?.description ?? product.description,
    keywords: product.seo?.keywords,
    alternates: {
      canonical: product.seo?.canonical,
    },
    openGraph: {
      title: product.seo?.title ?? product.title,
      description: product.seo?.description ?? product.description,
      url: product.seo?.canonical,
      siteName: "iOneSoft Solutions",
      type: "website",
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productDetails[slug];

  if (!product) notFound();

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-6 py-10 lg:py-0">
        {/* Hero */}
        <section className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="font-semibold uppercase leading-8 tracking-wide text-[var(--primary-text)]">
              {product.subtitle}
            </span>

            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              {product.title}
            </h1>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              {product.primaryButtonText && (
                <Link
                  href={product.primaryButtonHref ?? "/contact"}
                  className="rounded-xl bg-[var(--primary-bg)] px-7 py-4 text-white transition hover:opacity-90"
                >
                  {product.primaryButtonText}
                </Link>
              )}

              {product.secondaryButtonText && (
                <Link
                  href={product.secondaryButtonHref ?? "/demo"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--primary-bg)] px-7 py-4 text-[var(--text-dark)] lg:text-[var(--primary-text)] transition hover:bg-[var(--primary-text)] hover:text-white"
                >
                  {product.secondaryButtonText}
                </Link>
              )}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src={product.heroImage}
              alt={product.title}
              width={600}
              height={500}
              className="w-full max-w-[560px] rounded-3xl object-contain"
              preload
              sizes="(max-width: 1024px) 100vw, 50vw"
              fetchPriority="high"
            />
          </div>
        </section>

        {/* Dynamic Sections */}
        {product.sections?.map((section, index) => {
          const imageLeft = section.imagePosition === "left";

          const Content = (
            <div className="my-10 lg:my-2">
              {section.eyebrow && (
                <span className="font-semibold text-[var(--primary-text)]">
                  {section.eyebrow}
                </span>
              )}

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                {section.title}
              </h2>

              {section.description && (
                <p className="mt-5 leading-8 text-slate-600">
                  {section.description}
                </p>
              )}

              {section.features && section.features.length > 0 && (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {section.features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex items-center gap-3 bg-white px-4 py-3"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-[var(--primary)]" />

                        <span className="font-medium text-gray-900">
                          {feature.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              {section.lists?.map((list, i) => (
                <div key={i} className="mt-8">
                  {list.title && (
                    <h3 className="mb-4 text-lg font-bold text-gray-900">
                      {list.title}
                    </h3>
                  )}

                  {list.description && (
                    <p className="mb-4 leading-8 text-slate-600">
                      {list.description}
                    </p>
                  )}

                  <ul className="space-y-3">
                    {list.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--primary-bg)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.buttonCards && (
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {section.buttonCards.map((button) => {
                    const Icon = button.icon;

                    return (
                      <Link
                        key={button.title}
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-white px-8 py-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#649B27] hover:shadow-xl"
                      >
                        <Icon className="h-9 w-9 text-[var(--primary-text)] transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-xl font-semibold text-[var(--primary-text)]">
                          {button.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );

          const Media = (
            <div>
              {section.image && (
                <Image
                  src={section.image}
                  alt={section.title}
                  width={700}
                  height={500}
                  className="mx-auto w-full rounded-3xl"
                />
              )}

              {section.media?.type === "image" && (
                <Image
                  src={section.media.src}
                  alt={section.title}
                  width={800}
                  height={600}
                  className="mx-auto w-full max-w-[520px] rounded-3xl"
                />
              )}

              {section.media?.type === "youtube" && section.media.src && (
                <iframe
                  className="aspect-video w-full rounded-3xl"
                  src={section.media.src}
                  title={section.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          );

          return (
            <section
              key={index}
              className={`lg:my-2 grid items-center gap-10 ${
                Media ? "lg:grid-cols-2" : "grid-cols-1"
              }`}
            >
              <div
                className={
                  imageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
                }
              >
                {Content}
              </div>

              {Media && (
                <div
                  className={
                    imageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }
                >
                  {Media}
                </div>
              )}
            </section>
          );
        })}
      </main>

      <Footer />
    </>
  );
}
