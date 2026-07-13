import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { privacyPolicyData } from "@/src/data/privacypolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | iOnesoft Solutions",

  description:
    "iOnesoft Solutions pledge to protect their customers and users privacy online.",

  keywords: [],

  alternates: {
    canonical: "https://www.ionesoftsolutions.com/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | iOnesoft Solutions",
    description:
      "iOnesoft Solutions pledge to protect their customers and users privacy online.",
    url: "https://www.ionesoftsolutions.com/privacy-policy",
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
    title: "Privacy Policy | iOnesoft Solutions",
    description:
      "iOnesoft Solutions pledge to protect their customers and users privacy online.",
    images: [
      "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        <section className="text-center">
          <span className="font-semibold text-[var(--primary-text)]">
            {privacyPolicyData.eyebrow}
          </span>

          <h1 className="mt-3 text-4xl font-bold uppercase text-gray-900 md:text-5xl">
            {privacyPolicyData.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            {privacyPolicyData.intro}
          </p>
        </section>

        <section className="mt-14 space-y-10">
          {privacyPolicyData.sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-lg font-bold text-gray-900">
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
