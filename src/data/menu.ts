import { BriefcaseBusiness, Contact, Home, Info, Package } from "lucide-react";

import { MenuItem } from "../types/menu";
import { services } from "./services";
import { products } from "./products";

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About Us",
    url: "/about",
    icon: Info,
  },
  {
    title: "Products",
    url: "/products",
    icon: Package,
    children: products
      .filter((product) => product.href)
      .map((product) => ({
        title: product.title,
        url: product.href!,
      })),
  },
  {
    title: "Services",
    url: "/services",
    icon: BriefcaseBusiness,
    children: services
      .filter((service) => service.singlehref)
      .map((service) => ({
        title: service.title,
        url: service.singlehref!,
      })),
  },
  {
    title: "Contact Us",
    url: "/contact",
    icon: Contact,
  },
];
