import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | iOnesoft Solutions",

  description:
    "Disclaimer. Not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use.",

  keywords: [],

  alternates: {
    canonical: "https://www.ionesoftsolutions.com/disclaimer",
  },

  openGraph: {
    title: "Disclaimer | iOnesoft Solutions",
    description:
      "Disclaimer. Not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use.",
    url: "https://www.ionesoftsolutions.com/disclaimer",
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
    title: "Disclaimer | iOnesoft Solutions",
    description:
      "Disclaimer. Not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use.",
    images: [
      "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

const disclaimerSections = [
  {
    title: "General Information",
    description:
      "The information provided on this website is for general informational purposes only. While iOneSoft Solutions makes every effort to ensure the accuracy and completeness of the information, we make no warranties or representations of any kind regarding its accuracy, reliability, or suitability for any purpose.",
  },
  {
    title: "No Professional Advice",
    description:
      "The content on this website should not be considered professional, legal, financial, or technical advice. Visitors should seek appropriate professional guidance before making decisions based on the information provided on this website.",
  },
  {
    title: "Third-Party Links",
    description:
      "Our website may contain links to third-party websites for your convenience. iOneSoft Solutions has no control over the content, privacy policies, or practices of these external websites and accepts no responsibility for any loss or damage arising from their use.",
  },
  {
    title: "Limitation of Liability",
    description:
      "Under no circumstances shall iOneSoft Solutions be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or inability to use, this website or its content.",
  },
  {
    title: "Intellectual Property",
    description:
      "All trademarks, logos, text, graphics, software, and other content displayed on this website are the property of iOneSoft Solutions or their respective owners. Unauthorized reproduction, distribution, or use of any content is strictly prohibited without prior written permission.",
  },
  {
    title: "Website Availability",
    description:
      "We strive to keep this website available and up to date. However, we do not guarantee uninterrupted access and reserve the right to modify, suspend, or discontinue any part of the website without prior notice.",
  },
  {
    title: "Changes to This Disclaimer",
    description:
      "iOneSoft Solutions reserves the right to update or modify this disclaimer at any time without prior notice. Continued use of this website constitutes acceptance of any changes made to this disclaimer.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        {/* Hero */}
        <section className="text-center">
          <span className="font-semibold text-[var(--primary-text)]">
            Website Disclaimer
          </span>

          <h1 className="mt-3 text-4xl font-bold uppercase text-gray-900 md:text-5xl">
            Disclaimer
          </h1>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            Please read this disclaimer carefully before using the iOneSoft
            Solutions website. By accessing and using this website, you
            acknowledge and agree to the terms outlined below.
          </p>
        </section>

        {/* Disclaimer Content */}
        <section className="mt-14 space-y-10">
          {disclaimerSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                {section.title}
              </h2>

              <p className="leading-8 text-gray-600">{section.description}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
