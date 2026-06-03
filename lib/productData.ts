const BASE_URL = 'https://www.bfffrozencorns.com'

export interface ProductSeoData {
  id: number
  name: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  details: string
  highlights: string[]
  shelfLife: string
  category: string
}

export const productSeoData: ProductSeoData[] = [
  {
    id: 1,
    name: 'Organic Sweet Corn Kernels',
    seoTitle: 'Organic Sweet Corn Kernels Exporter India | Baliraja Farm Fresh',
    seoDescription:
      'Export-quality IQF organic sweet corn kernels from India. Non-GMO, FSSAI certified, 18-month shelf life. Bulk supply for importers & food manufacturers worldwide.',
    keywords: [
      'organic sweet corn kernels exporter India',
      'IQF sweet corn bulk supplier',
      'frozen sweet corn export India',
      'sweet corn kernels wholesale India',
      'frozen corn kernels manufacturer India',
    ],
    details:
      'Sourced from sustainable family farms across Maharashtra, our Organic Sweet Corn Kernels are harvested at peak ripeness and IQF-frozen to lock in farm-fresh flavour and nutrition.',
    highlights: [
      '100% organic and non-GMO',
      'IQF frozen at peak ripeness',
      'Rich in fibre and vitamins',
      'Available in 1 kg, 5 kg and bulk export packs',
    ],
    shelfLife: '18 months',
    category: 'Frozen Sweet Corn',
  },
  {
    id: 2,
    name: 'Farm-Fresh Frozen Corn Cobs',
    seoTitle: 'Frozen Corn Cobs Exporter India | Baliraja Farm Fresh BFF',
    seoDescription:
      'Whole frozen corn cobs from India — organically grown, IQF-frozen, pesticide-free. Bulk export to Middle East, Europe & USA. FSSAI & APEDA certified.',
    keywords: [
      'frozen corn cobs exporter India',
      'whole corn cob bulk supplier',
      'IQF corn cob export India',
      'organic corn cob manufacturer Maharashtra',
    ],
    details:
      'Our Farm-Fresh Frozen Corn Cobs are sourced from the heart of our organic farms, carefully selected for maximum flavour and tenderness, then IQF-frozen to preserve natural sweetness.',
    highlights: [
      'Sustainably grown on family farms',
      'Organic and pesticide-free',
      'Ideal for retail and food service',
      'Available in packs of 4, 8, 12 or bulk',
    ],
    shelfLife: '18 months',
    category: 'Frozen Sweet Corn',
  },
  {
    id: 3,
    name: 'Organic Mixed Vegetables',
    seoTitle: 'Frozen Mixed Vegetables Exporter India | Baliraja Farm Fresh',
    seoDescription:
      'Export-quality IQF frozen mixed vegetables from India — carrots, peas, corn & green beans. FSSAI certified, no preservatives. Bulk supply worldwide.',
    keywords: [
      'frozen mixed vegetables exporter India',
      'IQF mixed vegetables bulk supplier India',
      'organic frozen vegetables export',
      'mixed vegetables manufacturer Maharashtra',
    ],
    details:
      'A carefully crafted blend of tender carrots, sweet peas, crisp corn kernels, and fresh green beans — sourced from sustainable farms and IQF-frozen at peak ripeness.',
    highlights: [
      '100% organic, four premium vegetables',
      'IQF-frozen for maximum nutrition',
      'No preservatives or additives',
      'Available in 1 kg and bulk export packs',
    ],
    shelfLife: '18 months',
    category: 'Frozen Mixed Vegetables',
  },
  {
    id: 4,
    name: 'Organic Frozen Baby Corns',
    seoTitle: 'Baby Corn Exporter India | Frozen Baby Corn Bulk Supplier BFF',
    seoDescription:
      'Premium IQF frozen baby corn from India. Organic, tender, pesticide-free. Bulk export to UAE, UK, USA & Asia. FSSAI certified. Min order 1 MT.',
    keywords: [
      'baby corn exporter India',
      'frozen baby corn bulk supplier',
      'IQF baby corn export India',
      'organic baby corn manufacturer Maharashtra',
      'baby corn wholesale India',
    ],
    details:
      'Hand-picked at peak freshness from our organic farms and IQF-frozen to maintain crisp texture. Ideal for stir-fries, salads, appetizers, and Asian cuisine.',
    highlights: [
      'Organic, tender and rich in antioxidants',
      'IQF-frozen within hours of harvest',
      'Perfect for Asian cuisine and food service',
      'Available in 500 g, 1 kg and bulk bags',
    ],
    shelfLife: '18 months',
    category: 'Frozen Baby Corn',
  },
  {
    id: 5,
    name: 'Organic Green Peas',
    seoTitle: 'Frozen Green Peas Exporter India | Baliraja Farm Fresh BFF',
    seoDescription:
      'Export-quality IQF organic frozen green peas from India. Non-GMO, FSSAI certified, 18-month shelf life. Bulk supply for importers & food processors worldwide.',
    keywords: [
      'frozen green peas exporter India',
      'IQF green peas bulk supplier India',
      'organic frozen peas export',
      'green peas manufacturer Maharashtra',
      'frozen peas wholesale India',
    ],
    details:
      'Harvested at peak ripeness from our sustainable farms and IQF-frozen to lock in sweetness and nutrition. Perfect for soups, curries, salads, and side dishes.',
    highlights: [
      '100% organic and non-GMO',
      'Rich in protein and dietary fibre',
      'No added preservatives',
      'Available in 500 g, 1 kg, 5 kg and bulk packs',
    ],
    shelfLife: '18 months',
    category: 'Frozen Green Peas',
  },
  {
    id: 6,
    name: 'Fresh Onions',
    seoTitle: 'Fresh Onions Exporter India | Baliraja Farm Fresh Maharashtra',
    seoDescription:
      'Farm-fresh onions exported from Maharashtra, India. Sustainably grown, firm & flavourful. Bulk supply in 2 kg, 5 kg mesh bags. APEDA registered exporter.',
    keywords: [
      'fresh onion exporter India',
      'onion bulk supplier Maharashtra',
      'Indian onion export',
      'farm fresh onion wholesale India',
    ],
    details:
      'Grown on our family farms in Maharashtra using sustainable practices. Firm, flavourful onions harvested at the right maturity — ideal for daily cooking and export markets.',
    highlights: [
      'Freshly harvested from family farms',
      'Sustainably grown in Maharashtra',
      'Firm texture and strong flavour',
      'Available in 2 kg and 5 kg mesh bags',
    ],
    shelfLife: '4–6 weeks',
    category: 'Fresh Vegetables',
  },
  {
    id: 7,
    name: 'Dry Mature Maize',
    seoTitle: 'Dry Maize Exporter India | Dry Corn Bulk Supplier Baliraja',
    seoDescription:
      'Naturally dried mature maize from Maharashtra, India. Ideal for maize flour, popcorn and starch processing. Bulk export, APEDA registered. Min order 1 MT.',
    keywords: [
      'dry maize exporter India',
      'dry corn bulk supplier India',
      'mature maize export Maharashtra',
      'maize grain wholesale India',
    ],
    details:
      'Harvested at full maturity and naturally sun-dried on our sustainable farms. Hard, golden kernels ideal for grinding into maize flour, popcorn or industrial starch production.',
    highlights: [
      'Fully matured and naturally dried',
      'Sustainably grown on family farms',
      'Ideal for flour, popcorn and starch',
      'Available in 5 kg, 10 kg and bulk sacks',
    ],
    shelfLife: '12 months',
    category: 'Dry Grains',
  },
  {
    id: 8,
    name: 'Onion Powder',
    seoTitle: 'Onion Powder Exporter India | Dehydrated Onion Powder Bulk BFF',
    seoDescription:
      'Premium dehydrated onion powder from India — no additives, consistent flavour. Bulk export in 25 kg bags. Ideal for food manufacturers, spice blenders & restaurants.',
    keywords: [
      'onion powder exporter India',
      'dehydrated onion powder bulk supplier',
      'onion powder manufacturer Maharashtra',
      'dried onion powder export India',
      'onion powder wholesale India',
    ],
    details:
      'Processed from premium farm-fresh onions — hygienically cleaned, sliced, dehydrated at controlled temperatures, and finely ground for consistent flavour and aroma.',
    highlights: [
      'Made from 100% farm-fresh onions',
      'No artificial additives or preservatives',
      'Fine texture with consistent flavour',
      'Available in 25 kg bulk export bags',
    ],
    shelfLife: '18 months',
    category: 'Dehydrated Products',
  },
]

export function getProductSeo(id: number): ProductSeoData | undefined {
  return productSeoData.find((p) => p.id === id)
}

export function buildProductJsonLd(product: ProductSeoData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.details,
    brand: {
      '@type': 'Brand',
      name: 'Baliraja Farm Fresh',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Baliraja Farm Fresh — BFF Frozen Corns',
      url: BASE_URL,
    },
    countryOfOrigin: 'IN',
    category: product.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: {
        '@type': 'Organization',
        name: 'Baliraja Farm Fresh',
        url: BASE_URL,
      },
    },
    additionalProperty: product.highlights.map((h) => ({
      '@type': 'PropertyValue',
      value: h,
    })),
  }
}

export function buildBreadcrumbJsonLd(productName: string, productId: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${BASE_URL}/#products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: productName,
        item: `${BASE_URL}/products/${productId}`,
      },
    ],
  }
}
