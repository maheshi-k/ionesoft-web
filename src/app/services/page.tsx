import NavBar from "../../components/Navbar";
import ServiceGrid from "../../components/Services/ServiceGrid";
import Footer from "@/src/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Custom Built Software | COTS | iOnesoftsolutions",

  description:
    "We provide Custom built software, Digital marketing, Website design, Mobile app, FB marketing services for enable customers to reach out to their customers.",

  keywords: [
    "services",
    "our services",
    "customised software",
    "search engine optimisation",
    "search engine management",
    "website development",
    "mobile development",
    "PIC",
    "CDG",
    "online",
  ],

  alternates: {
    canonical: "https://www.ionesoftsolutions.com/services",
  },

  openGraph: {
    title: "Services | Custom Built Software | COTS | iOnesoftsolutions",
    description:
      "We provide Custom built software, Digital marketing, Website design, Mobile app, FB marketing services for enable customers to reach out to their customers.",
    url: "https://www.ionesoftsolutions.com/services",
    images: [
      {
        url: "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Custom Built Software | COTS | iOnesoftsolutions",
    description:
      "We provide Custom built software, Digital marketing, Website design, Mobile app, FB marketing services for enable customers to reach out to their customers.",
    images: [
      "https://int.oef.mybluehost.me/.website_277972c5/wp-content/uploads/2023/04/cropped-cropped-ione-logo-text-1.png",
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function ServicePage() {
  return (
    <main>
      <NavBar />
      <ServiceGrid />
      <Footer />
    </main>
  );
}
