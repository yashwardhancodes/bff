'use client'

import { useState } from 'react'
import { Menu, X, Mail, Download, Phone } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

import corn from '@/public/logo.png'
import frozen from '@/public/frozen.jpg'
import cob from '@/public/cob.png'
import mixed from '@/public/mixed.png'
import babycorn from '@/public/babycorn.png'
import peas from '@/public/peas.png'
import onion from '@/public/onion.png'
import maize from '@/public/maize.png'
import onionPowder from '@/public/onionPowder.jpg'

interface Product {
  id: number
  name: string
  description: string
  image: StaticImageData
  details: string
  highlights: string[]
  nutrition: {
    servingSize: string
    calories: number
    totalFat: string
    sodium: string
    totalCarbs: string
    protein: string
  }
  storage: {
    instructions: string
    shelfLife: string
    usageTips: string[]
  }
}

const products: Product[] = [
  {
    id: 1,
    name: 'Organic Sweet Corn Kernels',
    description: 'Organic, farm-sourced sweet corn kernels, IQF-frozen to preserve natural sweetness and nutrition.',
    image: frozen,
    details: 'Sourced from our sustainable family farms across Maharashtra, our Organic Sweet Corn Kernels are harvested at peak ripeness and IQF-frozen to lock in farm-fresh flavour and nutrition. Perfect for soups, salads, ready meals and side dishes.',
    highlights: [
      '100% organic and non-GMO',
      'IQF-frozen at peak ripeness',
      'Rich in fibre and vitamins',
      'Available in 1 kg, 5 kg and bulk export packs',
    ],
    nutrition: { servingSize: '1 cup (134g)', calories: 80, totalFat: '1g', sodium: '15mg', totalCarbs: '17g', protein: '3g' },
    storage: {
      instructions: 'Store in freezer at -18°C or below.',
      shelfLife: '18 months from production date',
      usageTips: ['Add to casseroles or stir-fries', 'Steam for 3–5 minutes as a side dish', 'Perfect for corn chowder and soups'],
    },
  },
  {
    id: 2,
    name: 'Farm-Fresh Frozen Corn Cobs',
    description: 'Sustainably grown whole corn cobs, IQF-frozen to retain farm-fresh taste and texture.',
    image: cob,
    details: 'Our Farm-Fresh Frozen Corn Cobs are sourced from our organic farms, carefully selected for maximum flavour and tenderness. IQF-frozen to preserve natural sweetness — ideal for grilling, boiling or roasting.',
    highlights: [
      'Sustainably grown on family farms',
      'Organic and pesticide-free',
      'Ideal for retail and food service',
      'Available in packs of 4, 8, 12 or bulk',
    ],
    nutrition: { servingSize: '1 cob (125g)', calories: 90, totalFat: '1g', sodium: '10mg', totalCarbs: '19g', protein: '3g' },
    storage: {
      instructions: 'Store in freezer at -18°C or below.',
      shelfLife: '18 months from production date',
      usageTips: ['Grill for 10–12 minutes', 'Boil for 5–7 minutes', 'Great for BBQs and family meals'],
    },
  },
  {
    id: 3,
    name: 'Organic Mixed Vegetables',
    description: 'A vibrant blend of organic carrots, peas, corn and green beans — IQF-frozen at peak ripeness.',
    image: mixed,
    details: 'A carefully crafted blend of tender carrots, sweet peas, crisp corn kernels and fresh green beans — sourced from sustainable farms and IQF-frozen at peak ripeness. No preservatives, no additives. Ready to cook straight from frozen.',
    highlights: [
      '100% organic, four premium vegetables',
      'IQF-frozen for maximum nutrition',
      'No preservatives or additives',
      'Available in 1 kg and bulk export packs',
    ],
    nutrition: { servingSize: '1 cup (134g)', calories: 54, totalFat: '0.1g', sodium: '38mg', totalCarbs: '12g', protein: '2.8g' },
    storage: {
      instructions: 'Store in freezer at -18°C or below.',
      shelfLife: '18 months from production date',
      usageTips: ['Add directly to soups and stews', 'Steam for 4–6 minutes as a side dish', 'Great for fried rice and pasta dishes'],
    },
  },
  {
    id: 4,
    name: 'Organic Frozen Baby Corns',
    description: 'Tender, organic baby corns — hand-picked and IQF-frozen for gourmet and export-quality use.',
    image: babycorn,
    details: 'Hand-picked at peak freshness from our organic farms and IQF-frozen to maintain crisp texture. Ideal for stir-fries, salads, appetizers and Asian cuisine. Popular with food manufacturers and supermarket chains worldwide.',
    highlights: [
      'Organic, tender and rich in antioxidants',
      'IQF-frozen within hours of harvest',
      'Perfect for Asian cuisine and food service',
      'Available in 500 g, 1 kg and bulk bags',
    ],
    nutrition: { servingSize: '1/2 cup (85g)', calories: 25, totalFat: '0g', sodium: '0mg', totalCarbs: '5g', protein: '1g' },
    storage: {
      instructions: 'Store in freezer at -18°C or below.',
      shelfLife: '18 months from production date',
      usageTips: ['Stir-fry with soy sauce and garlic', 'Add to salads for crunch', 'Perfect for gourmet appetizers'],
    },
  },
  {
    id: 5,
    name: 'Organic Green Peas',
    description: 'Sweet, tender organic green peas — IQF-frozen to preserve natural flavour and nutrients.',
    image: peas,
    details: 'Harvested at peak ripeness from our sustainable family farms and IQF-frozen to lock in sweetness and nutrition. Perfect for soups, curries, salads and side dishes. Rich in protein and dietary fibre.',
    highlights: [
      '100% organic and non-GMO',
      'Rich in protein and dietary fibre',
      'No added preservatives',
      'Available in 500 g, 1 kg, 5 kg and bulk packs',
    ],
    nutrition: { servingSize: '1 cup (134g)', calories: 79, totalFat: '0.4g', sodium: '7mg', totalCarbs: '14g', protein: '5g' },
    storage: {
      instructions: 'Store in freezer at -18°C or below.',
      shelfLife: '18 months from production date',
      usageTips: ['Add to curries and stir-fries', 'Steam for 3–5 minutes as a side dish', 'Perfect for pea soup or pulao'],
    },
  },
  {
    id: 6,
    name: 'Fresh Onions',
    description: 'Farm-fresh onions from Maharashtra — sustainably grown, firm and flavourful.',
    image: onion,
    details: 'Grown on our family farms in Maharashtra using sustainable practices. Firm, flavourful onions harvested at the right maturity — ideal for daily cooking, curries, salads and export markets.',
    highlights: [
      'Freshly harvested from family farms',
      'Sustainably grown in Maharashtra',
      'Firm texture and strong flavour',
      'Available in 2 kg and 5 kg mesh bags',
    ],
    nutrition: { servingSize: '1 medium onion (110g)', calories: 44, totalFat: '0.1g', sodium: '4mg', totalCarbs: '10g', protein: '1.2g' },
    storage: {
      instructions: 'Store in a cool, dry, well-ventilated place away from direct sunlight.',
      shelfLife: '4–6 weeks when stored properly',
      usageTips: ['Use as a base for curries and gravies', 'Add raw to salads and raita', 'Perfect for sautéing with spices'],
    },
  },
  {
    id: 7,
    name: 'Dry Mature Maize',
    description: 'Fully matured and naturally dried maize — sustainably sourced from family farms in Maharashtra.',
    image: maize,
    details: 'Harvested at full maturity and naturally sun-dried on our sustainable farms. Hard, golden kernels ideal for grinding into maize flour, making popcorn or industrial starch production.',
    highlights: [
      'Fully matured and naturally dried',
      'Sustainably grown on family farms',
      'Ideal for flour, popcorn and starch',
      'Available in 5 kg, 10 kg and bulk sacks',
    ],
    nutrition: { servingSize: '100g (dry kernels)', calories: 365, totalFat: '4.7g', sodium: '35mg', totalCarbs: '74g', protein: '9g' },
    storage: {
      instructions: 'Store in a cool, dry place in an airtight container. Keep away from moisture.',
      shelfLife: '12 months from production date',
      usageTips: ['Grind into fresh maize flour (makka atta)', 'Use for popcorn or roasted snacks', 'Ideal for traditional recipes'],
    },
  },
  {
    id: 8,
    name: 'Onion Powder',
    description: 'Premium dehydrated onion powder — processed from farm-fresh Maharashtra onions with no additives.',
    image: onionPowder,
    details: 'Processed from premium farm-fresh onions — hygienically cleaned, sliced, dehydrated at controlled temperatures and finely ground for consistent flavour and aroma. Free from artificial additives and preservatives.',
    highlights: [
      'Made from 100% farm-fresh onions',
      'No artificial additives or preservatives',
      'Fine texture with consistent flavour',
      'Available in 25 kg bulk export bags',
    ],
    nutrition: { servingSize: '1 tsp (3g)', calories: 9, totalFat: '0g', sodium: '1mg', totalCarbs: '2g', protein: '0.3g' },
    storage: {
      instructions: 'Store in a cool, dry airtight container away from moisture, heat and sunlight.',
      shelfLife: '18 months from production date',
      usageTips: ['Use in soups, gravies and marinades', 'Ideal for spice blends and snack coatings', 'Perfect for food processing'],
    },
  },
]

export default function ProductPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const params = useParams()
  const productId = parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  const generateWhatsAppLink = (productName: string) => {
    const message = encodeURIComponent(`Hello Baliraja Farm Fresh, I'm interested in an export inquiry for ${productName}. Please share pricing and MOQ details.`)
    return `https://wa.me/917559258750?text=${message}`
  }

  const NavBar = () => (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Image src={corn} alt="BFF Frozen Corns Logo" height={50} className="rounded-md" />
          </Link>

          <div className="hidden md:flex items-center space-x-7">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Home</Link>
            <Link href="/#about" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">About</Link>
            <Link href="/#export" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors text-sm">Export</Link>
            <Link href="/#products" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Products</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Contact</Link>
            <a
              href="/Baliraja.pdf"
              download="Baliraja_Farm_Fresh_Brochure.pdf"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2 rounded-md transition-colors"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-amber-600" type="button" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {[['/', 'Home'], ['/#about', 'About'], ['/#export', 'Export'], ['/#products', 'Products'], ['/#contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} className="block px-3 py-2 text-gray-700 hover:text-amber-600 text-sm" onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              ))}
              <a
                href="/Baliraja.pdf"
                download="Baliraja_Farm_Fresh_Brochure.pdf"
                className="flex items-center justify-center gap-2 w-full mt-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2.5 rounded-md transition-colors"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-500 mb-6">The product you are looking for does not exist.</p>
            <Link href="/#products" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Product Showcase */}
      <div className="pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-start">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Export Ready</span>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">FSSAI Certified</span>
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">APEDA Registered</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">{product.name}</h2>
              <p className="text-gray-500 text-base mb-5 leading-relaxed">{product.description}</p>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  ['Shelf Life', product.storage.shelfLife],
                  ['Min Order', '1 MT'],
                  ['Origin', 'Maharashtra, India'],
                  ['Certifications', 'FSSAI · APEDA'],
                ].map(([k, v]) => (
                  <div key={k} className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{k}</div>
                    <div className="text-sm font-semibold text-gray-800">{v}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={generateWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
                >
                  <FaWhatsapp size={18} /> WhatsApp Inquiry
                </a>
                <a
                  href={`mailto:exports@bfffrozencorns.com?subject=Export Inquiry — ${product.name}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-5 rounded-xl transition-colors"
                >
                  <Mail className="h-4 w-4" /> Email Inquiry
                </a>
              </div>

              <p className="text-xs text-gray-400 mt-3 text-center">
                Typical response within 24 hours · Custom packaging available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Details</h2>
          <p className="text-gray-600 leading-relaxed text-base max-w-3xl">{product.details}</p>
        </div>
      </div>

      {/* Highlights */}
      <div className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.highlights.map((highlight, index) => (
              <div key={index} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nutrition + Storage */}
      <div className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Nutrition */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-900 px-6 py-4">
                <h2 className="text-lg font-bold text-white">Nutrition Facts</h2>
                <p className="text-gray-400 text-xs mt-0.5">Per serving: {product.nutrition.servingSize}</p>
              </div>
              <div className="divide-y divide-gray-50">
                {[
                  ['Calories', product.nutrition.calories],
                  ['Total Fat', product.nutrition.totalFat],
                  ['Sodium', product.nutrition.sodium],
                  ['Total Carbohydrates', product.nutrition.totalCarbs],
                  ['Protein', product.nutrition.protein],
                ].map(([label, value]) => (
                  <div key={String(label)} className="flex justify-between items-center px-6 py-3">
                    <span className="text-gray-600 text-sm">{label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-amber-500 px-6 py-4">
                <h2 className="text-lg font-bold text-white">Storage & Usage</h2>
                <p className="text-amber-100 text-xs mt-0.5">Shelf life: {product.storage.shelfLife}</p>
              </div>
              <div className="px-6 py-5 space-y-5">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Storage Instructions</p>
                  <p className="text-gray-700 text-sm">{product.storage.instructions}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Usage Tips</p>
                  <ul className="space-y-2">
                    {product.storage.usageTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Export CTA */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Place a Bulk Export Order?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact our export team for pricing, MOQ details, custom packaging and full documentation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={generateWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              <FaWhatsapp size={20} /> WhatsApp Us Now
            </a>
            <a
              href={`mailto:exports@bfffrozencorns.com?subject=Export Inquiry — ${product.name}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              <Mail className="h-5 w-5" /> Send Email Inquiry
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            <a href="tel:+917559258750" className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> +91 75592 58750
            </a>
            <span className="mx-3">·</span>
            <a href="mailto:exports@bfffrozencorns.com" className="hover:text-amber-400 transition-colors">
              exports@bfffrozencorns.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/">
              <Image src={corn} alt="BFF Frozen Corns Logo" height={40} className="rounded-md" />
            </Link>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook size={22} />
              </a>
              <a href="https://wa.me/917559258750" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={22} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2026 BFF Frozen Corns — Baliraja Farm Fresh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
