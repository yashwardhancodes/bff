const BASE_URL = 'https://bfffrozencorns.com'

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
    seoTitle: 'Sweet Corn Exporter from India | IQF Frozen Corn Kernels — BFF',
    seoDescription:
      'Sweet corn exporter from India — IQF organic frozen sweet corn kernels. Non-GMO, FSSAI certified, 18-month shelf life. Bulk supply to UAE, UK, USA & worldwide.',
    keywords: [
      'sweet corn exporter from India',
      'frozen sweet corn exporter from India',
      'IQF sweet corn bulk supplier India',
      'organic sweet corn kernels exporter India',
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
    seoTitle: 'Frozen Corn Cobs Exporter from India | IQF Corn Cob Bulk — BFF',
    seoDescription:
      'Frozen corn cob exporter from India — organic, IQF-frozen, pesticide-free. Bulk export to Middle East, Europe & USA. FSSAI & APEDA certified.',
    keywords: [
      'frozen corn cobs exporter from India',
      'sweet corn exporter from India',
      'whole corn cob bulk supplier India',
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
    seoTitle: 'Frozen Mixed Vegetables Exporter from India | IQF Blend — BFF',
    seoDescription:
      'Frozen mixed vegetables exporter from India — IQF carrots, peas, corn & green beans. FSSAI certified, no preservatives. Bulk supply worldwide.',
    keywords: [
      'frozen mixed vegetables exporter from India',
      'frozen vegetables exporter from India',
      'IQF mixed vegetables bulk supplier India',
      'organic frozen vegetables export India',
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
    seoTitle: 'Baby Corn Exporter from India | IQF Frozen Baby Corn Bulk — BFF',
    seoDescription:
      'Baby corn exporter from India — premium IQF organic frozen baby corn. Tender, pesticide-free. Bulk export to UAE, UK, USA & Asia. FSSAI certified. Min order 1 MT.',
    keywords: [
      'baby corn exporter from India',
      'frozen baby corn exporter from India',
      'IQF baby corn bulk supplier India',
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
    seoTitle: 'Green Peas Exporter from India | IQF Frozen Green Peas Bulk — BFF',
    seoDescription:
      'Green peas exporter from India — IQF organic frozen green peas. Non-GMO, FSSAI certified, 18-month shelf life. Bulk supply for importers & food processors worldwide.',
    keywords: [
      'green peas exporter from India',
      'frozen green peas exporter from India',
      'IQF green peas bulk supplier India',
      'organic frozen peas export India',
      'green peas manufacturer Maharashtra',
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
    seoTitle: 'Onion Exporter from India | Fresh Onions Bulk Supplier — BFF',
    seoDescription:
      'Onion exporter from India — farm-fresh Maharashtra onions. Sustainably grown, firm & flavourful. Bulk supply in 2 kg, 5 kg mesh bags. APEDA registered exporter.',
    keywords: [
      'onion exporter from India',
      'fresh onion exporter from India',
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
    seoTitle: 'Onion Powder Exporter from India | Dehydrated Onion Bulk — BFF',
    seoDescription:
      'Onion powder exporter from India — premium dehydrated onion powder, no additives, consistent flavour. Bulk export in 25 kg bags. Ideal for food manufacturers & spice blenders.',
    keywords: [
      'onion powder exporter from India',
      'onion exporter from India',
      'dehydrated onion powder bulk supplier India',
      'onion powder manufacturer Maharashtra',
      'dried onion powder export India',
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
