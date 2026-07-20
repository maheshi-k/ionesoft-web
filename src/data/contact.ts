import { products } from "./products";
import { services } from "./services";

export const contactData = {
  hero: {
    image: "/images/contact/contact-hero.webp",
    title: "Let’s Get In Touch",
    description: "Or just reach out manually to",
    email: "info@ionesoftsolutions.com",
  },

  form: {
    fields: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Select Product or Services",
      message: "Message",
    },
    buttonText: "Submit Form",

    options: [
      {
        label: "Products",
        items: products.map((product) => ({
          label: product.title,
          value: product.title,
        })),
      },
      {
        label: "Services",
        items: services.map((service) => ({
          label: service.title,
          value: service.title,
        })),
      },
    ],
  },

  visit: {
    title: "Visit Us",
    locations: [
      {
        country: "SINGAPORE",
        address: "59 Ubi Ave 1, Biz Link Centre, #06-11 Singapore, 408938",
      },
      {
        country: "SRI LANKA",
        address:
          "417, Rohana Wilathgamuwa Mawatha, Welivita, Kaduwela, Sri Lanka, 10640",
      },
    ],
  },

  contact: {
    title: "Contact Us",
    locations: [
      {
        country: "SINGAPORE",
        phone: "+65 6451 1312",
        email: "info@ionesoftsolutions.com",
      },
      {
        country: "SRI LANKA",
        phone: "(+94) 11 21 60050",
        email: "info@ionesoftsolutions.com",
      },
    ],
  },
};
