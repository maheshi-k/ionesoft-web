// app/services/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleCheck } from "lucide-react";
import type { Metadata } from "next";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { serviceDetails } from "../../../data/serviceDetails";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) return {};

  return {
    title: service.seo?.title ?? service.title,
    description: service.seo?.description ?? service.description,
    keywords: service.seo?.keywords,
    alternates: {
      canonical: service.seo?.canonical,
    },
    openGraph: {
      title: service.seo?.title ?? service.title,
      description: service.seo?.description ?? service.description,
      url: service.seo?.canonical,
      siteName: "iOneSoft Solutions",
      type: "website",
    },
  };
}

function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`mt-4 space-y-3 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="mb-3 flex break-inside-avoid items-start gap-3 text-sm leading-7 text-gray-700"
        >
          <CircleCheck
            size={17}
            className="mt-1 shrink-0 text-[var(--primary-text)]"
          />
          <span className="text-[15px]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ListBlock({
  list,
  multiColumn = false,
}: {
  list: any;
  multiColumn?: boolean;
}) {
  return (
    <div>
      {list.title && (
        <h3 className="mb-3 text-lg font-semibold text-gray-900">
          {list.title}
        </h3>
      )}

      {list.description && (
        <p className="mb-4 leading-7 text-slate-600">{list.description}</p>
      )}

      {list.items && (
        <BulletList
          items={list.items}
          className={
            multiColumn ? "grid sm:grid-cols-2 lg:grid-cols-2 gap-x-8" : ""
          }
        />
      )}
    </div>
  );
}

function ServiceMedia({ section }: { section: any }) {
  return (
    <div>
      {section.image && (
        <Image
          src={section.image}
          alt={section.title}
          width={700}
          height={500}
          className="mx-auto w-full max-w-[520px] rounded-3xl object-contain"
        />
      )}

      {section.media?.type === "image" && (
        <Image
          src={section.media.src}
          alt={section.title}
          width={800}
          height={600}
          className="mx-auto w-full max-w-[520px] rounded-3xl object-contain"
        />
      )}

      {section.media?.type === "youtube" && (
        <iframe
          className="aspect-video w-full rounded-3xl"
          src={section.media.src}
          title={section.title}
          allowFullScreen
        />
      )}
    </div>
  );
}

function ServiceContent({ section }: { section: any }) {
  return (
    <div>
      {section.eyebrow && (
        <span className="font-semibold text-[var(--primary-text)]">
          {section.eyebrow}
        </span>
      )}

      {section.title && (
        <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          {section.title}
        </h2>
      )}

      {section.description && (
        <p className="mt-5 leading-8 text-slate-600">{section.description}</p>
      )}

      {section.lists && (
        <div
          className={`mt-8 grid gap-8 ${
            section.lists.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {section.lists.map((list: any, index: number) => {
            const fullWidth =
              section.lists.length % 2 === 1 &&
              index === section.lists.length - 1;

            return (
              <div key={index} className={fullWidth ? "md:col-span-2" : ""}>
                <ListBlock list={list} multiColumn={fullWidth} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ListWithImagesSection({ section }: { section: any }) {
  return (
    <section className="my-16">
      {section.title && (
        <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl">
          {section.title}
        </h2>
      )}

      <div className="space-y-16">
        {section.lists.map((list: any, index: number) => {
          const imageLeft =
            list.imagePosition === "left" ||
            (!list.imagePosition && index % 2 === 0);

          const ImageSide = (
            <div className="flex justify-center">
              {list.image && (
                <Image
                  src={list.image}
                  alt={list.title ?? section.title}
                  width={520}
                  height={380}
                  className="w-full max-w-md object-contain"
                />
              )}
            </div>
          );

          const TextSide = <ListBlock list={list} />;

          return (
            <section
              key={index}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div
                className={
                  imageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"
                }
              >
                {ImageSide}
              </div>

              <div
                className={
                  imageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"
                }
              >
                {TextSide}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

function SectionContent({ section }: { section: any }) {
  const hasMainMedia = Boolean(section.image || section.media);
  const listsHaveImages = section.lists?.some((list: any) => list.image);

  if (listsHaveImages) {
    return <ListWithImagesSection section={section} />;
  }

  if (hasMainMedia) {
    const imageLeft = section.imagePosition === "left";

    const Content = <ServiceContent section={section} />;
    const Media = <ServiceMedia section={section} />;

    return (
      <section className="my-16 grid items-center gap-10 lg:grid-cols-2">
        <div
          className={imageLeft ? "order-2 lg:order-1" : "order-2 lg:order-2"}
        >
          {Media}
        </div>

        <div
          className={imageLeft ? "order-1 lg:order-2" : "order-1 lg:order-1"}
        >
          {Content}
        </div>
      </section>
    );
  }

  return (
    <section className="my-16">
      <ServiceContent section={section} />
    </section>
  );
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) notFound();

  return (
    <div className="w-full max-w-full overflow-x-clip">
      <Navbar />

      <main className="mx-auto w-full overflow-x-hidden px-5 py-8 sm:px-6 lg:max-w-[75%] lg:px-0 lg:py-0">
        {/* Hero */}
        <section className="grid w-full items-center gap-8 lg:grid-cols-2">
          {/* Hero content */}
          <div className="min-w-0 text-center lg:text-left">
            <span className="block font-semibold uppercase tracking-wide text-[var(--primary-text)]">
              {service.subtitle}
            </span>

            <h1 className="mt-3 break-words text-4xl font-bold leading-[1.1] sm:text-5xl lg:mb-6 lg:text-6xl">
              {service.title}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              {service.description}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              {service.primaryButtonText && (
                <Link
                  href={service.primaryButtonHref ?? "/contact"}
                  className="rounded-xl bg-[var(--primary-bg)] px-6 py-3 text-white transition hover:opacity-90 sm:px-7 sm:py-4"
                >
                  {service.primaryButtonText}
                </Link>
              )}

              {service.secondaryButtonText && (
                <Link
                  href={service.secondaryButtonHref ?? "/demo"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--primary-bg)] px-6 py-3 text-[var(--primary-text)] transition hover:bg-[#78B62A] hover:text-white sm:px-7 sm:py-4"
                >
                  {service.secondaryButtonText}
                </Link>
              )}
            </div>
          </div>

          {/* Hero image */}
          <div className="min-w-0">
            <Image
              src={service.heroImage}
              alt={service.title}
              width={600}
              height={500}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-2xl object-contain lg:rounded-3xl"
            />
          </div>
        </section>

        {/* Dynamic Sections */}
        {service.sections?.map((section: any, index: number) => (
          <SectionContent key={index} section={section} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
