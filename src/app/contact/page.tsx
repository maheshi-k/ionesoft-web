import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ContactHero from "@/src/components/contact/ContactHero";
import ContactInfo from "@/src/components/contact/ContactInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact iOnesoft | Get in touch | Support",

  description:
    "Contact iOnesoft :59 Ubi Ave 1, 06-11 Singapore 408938 Tel/Fax : +65 6451 1312. Tel: (+94) 11 21 60050 Email: info@ionesoftsolutions.com. Contact now!",

  keywords: [],

  alternates: {
    canonical: "https://www.ionesoftsolutions.com/contact-us",
  },

  openGraph: {
    title: "Contact iOnesoft | Get in touch | Support",
    description:
      "Contact iOnesoft :59 Ubi Ave 1, 06-11 Singapore 408938 Tel/Fax : +65 6451 1312. Tel: (+94) 11 21 60050 Email: info@ionesoftsolutions.com. Contact now!",
    url: "https://www.ionesoftsolutions.com/contact-us",
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
    title: "Contact iOnesoft | Get in touch | Support",
    description:
      "Contact iOnesoft :59 Ubi Ave 1, 06-11 Singapore 408938 Tel/Fax : +65 6451 1312. Tel: (+94) 11 21 60050 Email: info@ionesoftsolutions.com. Contact now!",
    images: [
      "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <ContactHero />
        <ContactInfo />
      </main>

      <Footer />
    </>
  );
}
