import type { Metadata } from "next";
import NavBar from "../../components/Navbar";
import ProductGrid from "../../components/products/ProductGrid";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "iOneSoft Solutions Products For Business Management",
  description:
    "iOneSoft Solutions provides customized software products (COTS).Self Service Kiosks, , Spa, Salon Hotel Automation Cloud Base tools in Australia. Singapore, Canada and Srilanka",
  keywords: [
    "Hotel Self Check-in Kiosk",
    "Cloud Base device management tool",
    "Hotel Automation development",
  ],
  alternates: {
    canonical: "https://ionesoftsolutions.com/products/",
  },

  robots: {
    index: false,
    follow: false,
  },
};

export default function ProductsPage() {
  return (
    <main>
      <NavBar />
      <ProductGrid />
      <Footer />
    </main>
  );
}
