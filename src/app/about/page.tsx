import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import AboutHero from "@/src/components/about/AboutHero";
import ValuesSection from "@/src/components/about/ValuesSection";
import SuccessStory from "@/src/components/about/SuccessStory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development, Business Process & Consulting Service",

  description:
    "iOneSoft Solutions adopt comprehensive set of established methodologies and processes such as Custom built software, branding and marketing - SEO, SEM, Google analytics, Website design and Mobile appiOneSoft Solutions is a Singapore Software Development company, headquartered Information Technology (IT) firm incorporated in August 2012. Our team consist of consultants with expertise of more than 15 years from various industry and our development centre in Sri Lanka consists of young and vibrant with technical expertise. With these expertise, we are able to provide",

  keywords: [
    "about us",
    "about",
    "agile",
    "innovative",
    "hotel development",
    "singapore software development",
    "singapore Tourism Board",
    "STB",
    "payment gateway",
  ],

  alternates: {
    canonical: "https://www.ionesoftsolutions.com/about-us",
  },

  openGraph: {
    title: "Software Development, Business Process & Consulting Service",
    description:
      "iOneSoft Solutions adopt comprehensive set of established methodologies and processes such as Custom built software, branding and marketing - SEO, SEM, Google analytics, Website design and Mobile app. iOneSoft Solutions is a Singapore Software Development company, headquartered Information Technology (IT) firm incorporated in August 2012. Our team consists of consultants with expertise of more than 15 years from various industries, and our development centre in Sri Lanka consists of young and vibrant technical experts. With these expertise, we are able to provide.",
    url: "https://www.ionesoftsolutions.com/about-us",
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
    title: "Software Development, Business Process & Consulting Service",
    description:
      "iOneSoft Solutions adopt comprehensive set of established methodologies and processes such as Custom built software, branding and marketing - SEO, SEM, Google analytics, Website design and Mobile app. iOneSoft Solutions is a Singapore Software Development company, headquartered Information Technology (IT) firm incorporated in August 2012. Our team consists of consultants with expertise of more than 15 years from various industries, and our development centre in Sri Lanka consists of young and vibrant technical experts. With these expertise, we are able to provide.",
    images: [
      "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <ValuesSection />
      <SuccessStory />
      <Footer />
    </main>
  );
}
