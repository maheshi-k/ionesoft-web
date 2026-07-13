import { MenuItem } from "../types/menu";
import { services } from "./services";
import { products } from "./products";

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Products",
    url: "/products",
    children: [
      ...products
        .filter((products) => products.href)
        .map((products) => ({
          title: products.title,
          url: products.href,
        })),
    ],
  },
  {
    title: "Services",
    url: "/services",
    children: [
      ...services
        .filter((service) => service.singlehref)
        .map((service) => ({
          title: service.title,
          url: service.singlehref,
        })),
    ],
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];
