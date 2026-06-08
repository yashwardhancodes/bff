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
          {/* Server-rendered SEO header — Google indexes this immediately */}
          <div className="bg-amber-50 border-b border-amber-100 pt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
                <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
                <span className="mx-2">›</span>
                <a href="/#products" className="hover:text-amber-600 transition-colors">Products</a>
                <span className="mx-2">›</span>
                <span className="text-gray-800 font-medium">{product.name}</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.name} — Export-Quality IQF from India
              </h1>
              <p className="text-lg text-gray-600 mb-5 max-w-3xl leading-relaxed">
                {product.seoDescription}
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                {[
                  `🌿 ${product.category}`,
                  `📦 Shelf Life: ${product.shelfLife}`,
                  '✓ FSSAI Certified',
                  '✓ APEDA Registered',
                  '🚢 Min Order: 1 MT',
                  '🇮🇳 Origin: Maharashtra, India',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-amber-200 text-gray-700 text-sm px-3 py-1.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl">
                {product.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <ProductClient />
    </>
  )
}
