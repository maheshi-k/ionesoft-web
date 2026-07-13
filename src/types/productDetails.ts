import { Feature } from "../types/Feature";
import { LucideIcon } from "lucide-react";

export interface ProductDetail {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;

  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;

  features?: {
    title: string;
    icon: any;
  }[];

  sections?: ProductSection[];

  seo?: {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    robots?: {
      index: boolean;
      follow: boolean;
    };
  };
}

export interface ProductSection {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  media?: {
    type: "image" | "youtube";
    src: string;
  };
  imagePosition?: "left" | "right";
  features?: {
    title: string;
    icon: any;
  }[];
  lists?: {
    title?: string;
    description?: string;
    image?: string;
    items: string[];
  }[];
  buttonCards?: {
    title: string;
    href: string;
    icon: any;
  }[];
}
