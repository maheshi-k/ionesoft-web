import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ionesoft.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.ionesoft.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.ionesoft.com/services",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.ionesoft.com/contact",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
