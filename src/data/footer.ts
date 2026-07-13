import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export const footerData = {
  company: {
    name: "iOneSoft",
    tagline: "Your Solution",
    description:
      "At iOneSoft Solutions, we provide desired and smart solutions to meet key business challenges and achieve specific outcomes.",
    logo: "/images/Logo.webp",
  },

  offices: [
    {
      country: "Singapore",
      address: "59 Ubi Ave 1, Biz Link Centre, #06-11 Singapore, 408938",
      phone: ["(+65) 6451 1312", "(+65) 6692 9021"],
      email: "info@ionesoftsolutions.com",
    },
    {
      country: "Sri Lanka",
      address: "417, Rohana Wilathgamuwa Mawatha, Welivita Kaduwela, Sri Lanka",
      postalCode: "10640",
      phone: ["(+94) 11 21 6050"],
      email: "info@ionesoftsolutions.com",
    },
  ],

  links: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Careers", href: "/join-us" },
  ],

  socials: [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/iOneSoftSolutionspteltd",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/ionesoft-solutions-pte-ltd",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:info@ionesoftsolutions.com",
    },
  ],
};
