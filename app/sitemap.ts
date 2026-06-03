import { MetadataRoute } from 'next';

const BASE_URL = 'https://bfffrozencorns.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8];

  const productRoutes: MetadataRoute.Sitemap = productIds.map((id) => ({
    url: `${BASE_URL}/products/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...productRoutes,
  ];
}
