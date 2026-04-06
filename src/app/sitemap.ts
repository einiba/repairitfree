import type { MetadataRoute } from "next";
import { guides, getBrandsForCategory } from "@/data/guides";
import { errorCodes } from "@/data/error-codes";
import { categories } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://repairitfree.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/diagnose`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  // Category pages: /guides/washing-machines
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/guides/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Brand pages: /guides/washing-machines/whirlpool
  const brandPages: MetadataRoute.Sitemap = [];
  for (const cat of categories) {
    const brands = getBrandsForCategory(cat.slug);
    for (const brand of brands) {
      brandPages.push({
        url: `${baseUrl}/guides/${cat.slug}/${brand.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }
  }

  // Individual guide pages: /guides/washing-machines/whirlpool/f21-error-code
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.categorySlug}/${guide.brandSlug}/${guide.problemSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Error code device type pages: /error-codes/dishwasher
  const errorCodeDevicePages: MetadataRoute.Sitemap = [
    ...new Set(errorCodes.map((e) => e.deviceTypeSlug)),
  ].map((slug) => ({
    url: `${baseUrl}/error-codes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Individual error code pages: /error-codes/dishwasher/e24
  const errorCodePages: MetadataRoute.Sitemap = errorCodes.map((code) => ({
    url: `${baseUrl}/error-codes/${code.deviceTypeSlug}/${code.codeSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...brandPages,
    ...guidePages,
    ...errorCodeDevicePages,
    ...errorCodePages,
  ];
}
