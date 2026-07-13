import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import Client from "../components/Clients";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BackToTop from "../components/BackTop";
import { heroData } from "../data/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Automation Software: A Complete Cloud Based Management System",

  description:
    "iOneSoft Solutions Provides Hotel Self Service Check-in Kiosk via Bluetooth, Hotel Automation Software, Integrated Spa Solutions, Software for Online Appointment, Cloud Based Device Management Tool.",

  keywords: [
    "Hotel software",
    "hotel management software",
    "hotel booking software",
    "software for hotel management system",
    "reservation software for hotels",
  ],

  alternates: {
    canonical: "https://www.ionesoftsolutions.com/",
  },

  openGraph: {
    title: "Cloud Based Hotel Management System Software",
    description: "Cloud Based Hotel Management System Software Description",
    url: "https://www.ionesoftsolutions.com/",
    siteName: "iOneSoft Home",
    type: "website",
    images: [
      {
        url: "https://www.ionesoftsolutions.com/wp-content/uploads/2023/04/ione-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero data={heroData} />
        <Features />
        <Services />
        <Solutions />
        <Client />
        <CTA />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
