import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CircleCheck } from "lucide-react";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { careerData } from "@/src/data/careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Come and Join us | iOnesoft Solutions",

  description:
    "Join us! Jobs in Software Development exploring your career potential. Looking for a company that thrives on innovation, commitment, team work, creativity.",

  keywords: [
    "Come and Join us",
    "career",
    "iOnesoft",
    "Sri Lanka",
    "Singapore",
  ],

  alternates: {
    canonical: "https://www.ionesoftsolutions.com/join-us",
  },

  openGraph: {
    title: "Career | Come and Join us | iOnesoft Solutions",
    description:
      "Join us! Jobs in Software Development exploring your career potential. Looking for a company that thrives on innovation, commitment, team work, creativity.",
    url: "https://www.ionesoftsolutions.com/join-us",
    siteName:
      "iOnesoft Solutions - Singapore based IT firm with 15 years expertise in Engineering, Manufacturing, Supply Chain, Business Process, Quality, Fire Safety and Security industry.",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
        secureUrl:
          "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
        width: 1200,
        height: 630,
        alt: "iOnesoft Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Career | Come and Join us | iOnesoft Solutions",
    description:
      "Join us! Jobs in Software Development exploring your career potential. Looking for a company that thrives on innovation, commitment, team work, creativity.",
    images: [
      "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function CareerPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <Image
            src={careerData.hero.backgroundImage}
            alt=""
            fill
            priority
            className="-z-10 object-cover"
          />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-20">
            <div>
              <span className="font-semibold text-[var(--primary-text)]">
                {careerData.hero.eyebrow}
              </span>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                {careerData.hero.title}{" "}
                <span className="text-[var(--primary-text)]">
                  {careerData.hero.highlight}
                </span>
              </h1>

              <p className="mt-5 max-w-xl leading-8 text-gray-600">
                {careerData.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={careerData.hero.primaryButton.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary-bg)] px-7 py-4 font-semibold text-white"
                >
                  {careerData.hero.primaryButton.text}
                  <ChevronDown size={18} />
                </Link>

                <Link
                  href={careerData.hero.secondaryButton.href}
                  className="rounded-xl border border-[var(--primary-bg)] px-7 py-4 font-semibold text-[var(--primary-text)]"
                >
                  {careerData.hero.secondaryButton.text}
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={careerData.hero.image}
                alt={careerData.hero.highlight}
                width={680}
                height={460}
                className="w-full max-w-[650px] rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Work */}
        <section
          id="why-work"
          className="mx-auto max-w-7xl px-6 lg:py-20 md:py-10 text-center"
        >
          <span className="font-semibold text-[var(--primary-text)]">
            {careerData.whyWork.eyebrow}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            {careerData.whyWork.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            {careerData.whyWork.description}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {careerData.whyWork.cards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <Icon className="mx-auto h-12 w-12 text-[#649B27]" />

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Open Positions */}
        <section
          id="open-positions"
          className="mx-auto max-w-7xl px-6 py-10 text-center"
        >
          <span className="font-semibold text-[var(--primary-text)]">
            {careerData.positions.eyebrow}
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            {careerData.positions.title}
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {careerData.positions.jobs.map((job) => {
              const Icon = job.icon;

              return (
                <div
                  key={job.title}
                  className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 text-left shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary-cover-bg)]">
                      <Icon className="h-8 w-8 text-[var(--primary-text)]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600">{job.type}</p>
                    </div>
                  </div>

                  <h4 className="mt-8 font-semibold text-gray-900">
                    Opportunities available for:
                  </h4>

                  <ul className="mt-5 space-y-3">
                    {job.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CircleCheck className="h-4 w-4 text-[var(--primary-text)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={job.buttonHref}
                    className="mt-7 flex items-center justify-center rounded-[10px] border border-[var(--primary-bg)] p-[10px] font-semibold text-[var(--primary-text)]"
                  >
                    {job.buttonText}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 relative overflow-hidden h-[340px]">
          <Image
            src={careerData.cta.image}
            alt={careerData.cta.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute md:inset-0 md:bg-white/50 lg:bg-white/20 " />

          <div className="relative mx-auto flex min-h-[420px] max-w-7xl md:items-center px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold leading-tight text-gray-900">
                {careerData.cta.title}
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">
                {careerData.cta.description}
              </p>

              <Link
                href={careerData.cta.button.href}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--primary-bg)] px-10 py-5 font-semibold text-white"
              >
                {careerData.cta.button.text}
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
