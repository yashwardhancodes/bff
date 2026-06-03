import type { Metadata } from 'next'
import { getProductSeo, buildProductJsonLd, buildBreadcrumbJsonLd, productSeoData } from '@/lib/productData'
import ProductClient from './ProductClient'

const BASE_URL = 'https://bfffrozencorns.com'

export function generateStaticParams() {
  return productSeoData.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductSeo(parseInt(id))

  if (!product) {
    return {
      title: 'Product Not Found | BFF Frozen Corns',
      robots: { index: false, follow: false },
    }
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.keywords,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `${BASE_URL}/products/${product.id}`,
      type: 'website',
      siteName: 'BFF Frozen Corns — Baliraja Farm Fresh',
      images: [
        {
          url: '/logo.png',
          width: 800,
          height: 800,
          alt: `${product.name} — Baliraja Farm Fresh India`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: product.seoTitle,
      description: product.seoDescription,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductSeo(parseInt(id))

  return (
    <>
      {product && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildProductJsonLd(product)),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildBreadcrumbJsonLd(product.name, product.id)),
            }}
          />
        </>
      )}
      <ProductClient />
    </>
  )
}
