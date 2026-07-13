import { Feature } from "../types/Feature";
import { LucideIcon } from "lucide-react";

export interface ServiceSection {
  title?: string;
  description?: string;
  image?: string;
  imagePosition?: "left" | "right";

  lists?: {
    title?: string;
    image?: string;
    description?: string;
    imagePosition?: "left" | "right";
    items: string[];
  }[];
}

export interface ServiceDetail {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;

  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;

  sections?: ServiceSection[];

  seo?: {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    openGraph?: {
      title: string;
      description: string;
      url: string;
      siteName?: string;
      locale?: string;
      type?: "website" | "article";
      images?: {
        url: string;
        secureUrl?: string;
        width?: number;
        height?: number;
        alt?: string;
      }[];
    };
    twitter?: {
      card: "summary" | "summary_large_image";
      title: string;
      description: string;
      images?: string[];
    };
    robots?: {
      index: boolean;
      follow: boolean;
    };
  };
}
