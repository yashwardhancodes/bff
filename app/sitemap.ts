import { MetadataRoute } from 'next';
import { productSeoData } from '@/lib/productData';

const BASE_URL = 'https://bfffrozencorns.com';
const LAST_UPDATED = '2026-06-08';

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes: MetadataRoute.Sitemap = productSeoData.map((product) => ({
    url: `${BASE_URL}/products/${product.id}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...productRoutes,
  ];
}
