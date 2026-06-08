'use client'

import { useState } from 'react'
import { Menu, X, Leaf, Phone, Mail, MapPin, Star, Globe, ShieldCheck, Truck, Award, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

 
// Import image files with proper TypeScript typing
import corn from '@/public/logo.png'
import frozen from '@/public/frozen.jpg'
import cob from '@/public/cob.png'
import mixed from '@/public/mixed.png'
import babycorn from '@/public/babycorn.png'
import maize from '@/public/maize.png'
import onion from '@/public/onion.png'
import onionPowder from '@/public/onionPowder.jpg'
import peas from '@/public/peas.png'

// Define TypeScript interface for product data
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(true)

    const generateWhatsAppLink = (productName: string) => {
        const phoneNumber = '+917559258750'
        const message = encodeURIComponent(`Hello, I'm interested in enquiring about ${productName}. Can you provide more details?`)
        return `https://wa.me/${phoneNumber}?text=${message}`
    }

  // Product data with organic and farm-sourced emphasis
  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Sweet Corn Kernels',
      description: 'Organic, farm-sourced sweet corn kernels, flash-frozen to preserve their natural sweetness.',
      image: frozen,
      details: 'Sourced from our sustainable family farms, our Organic Sweet Corn Kernels are harvested at peak ripeness and flash-frozen to lock in farm-fresh flavor and nutrition. Perfect for organic soups, salads, and side dishes.',
      highlights: [
        '100% organic and non-GMO',
        'Sourced from sustainable family farms',
        'Rich in fiber and vitamins',
        'Available in 1lb and 5lb packages',
      ],
      nutrition: {
        servingSize: '1 cup (134g)',
        calories: 80,
        totalFat: '1g',
        sodium: '15mg',
        totalCarbs: '17g',
        protein: '3g',
      },
      storage: {
        instructions: 'Store in freezer at 0°F (-18°C) or below. Use within recommended timeframe.',
        shelfLife: '18 months from production date',
        usageTips: [
          'Add to organic casseroles or stir-fries',
          'Steam for 3-5 minutes as a farm-fresh side dish',
          'Perfect for wholesome corn chowder',
        ],
      },
    },
    {
      id: 2,
      name: 'Farm-Fresh Frozen Corn Cobs',
      description: 'Sustainably grown whole corn cobs, flash-frozen to retain their farm-fresh taste.',
      image: cob,
      details: 'Our Farm-Fresh Frozen Corn Cobs are sourced from the heart of our organic farms, carefully selected for maximum flavor and tenderness. Flash-frozen to preserve their natural sweetness, they’re ideal for grilling, boiling, or roasting.',
      highlights: [
        'Sustainably grown on family farms',
        'Organic and pesticide-free',
        'Perfect for BBQs and family meals',
        'Available in packs of 4, 8, or 12',
      ],
      nutrition: {
        servingSize: '1 cob (125g)',
        calories: 90,
        totalFat: '1g',
        sodium: '10mg',
        totalCarbs: '19g',
        protein: '3g',
      },
      storage: {
        instructions: 'Store in freezer at 0°F (-18°C) or below. Use within recommended timeframe.',
        shelfLife: '18 months from production date',
        usageTips: [
          'Grill for 10-12 minutes with organic butter',
          'Boil for 5-7 minutes for a farm-fresh taste',
          'Great for sustainable summer barbecues',
        ],
      },
    },
    {
      id: 3,
      name: 'Organic Mixed Vegetables',
      description: 'A vibrant blend of organic, farm-sourced carrots, peas, corn, and green beans.',
      image: mixed,
      details: 'Our Organic Mixed Vegetables combine the best of nature’s bounty, sourced from sustainable family farms. This carefully crafted blend of tender carrots, sweet peas, crisp corn kernels, and fresh green beans is flash-frozen at peak ripeness. Perfect for busy families seeking organic, farm-fresh nutrition without the prep work.',
      highlights: [
        '100% organic, four premium vegetables',
        'Flash-frozen for maximum nutrition',
        'Sourced from sustainable farms',
        'No washing or chopping required',
      ],
      nutrition: {
        servingSize: '1 cup (134g)',
        calories: 54,
        totalFat: '0.1g',
        sodium: '38mg',
        totalCarbs: '12g',
        protein: '2.8g',
      },
      storage: {
        instructions: 'Store in freezer at 0°F (-18°C) or below. Use within recommended timeframe.',
        shelfLife: '18 months from production date',
        usageTips: [
          'Add directly to organic soups and stews',
          'Steam for 4-6 minutes as a wholesome side dish',
          'Great for farm-fresh fried rice and pasta dishes',
          'Perfect for sustainable meal prep',
        ],
      },
    },
    {
      id: 4,
      name: 'Organic Frozen Baby Corns',
      description: 'Tender, organic baby corns, sustainably sourced and frozen for gourmet dishes.',
      image: babycorn,
      details: 'Sourced from our organic farms, our Organic Frozen Baby Corns are hand-picked at peak freshness and flash-frozen to maintain their crisp texture. Ideal for gourmet stir-fries, salads, and appetizers with a farm-fresh taste.',
      highlights: [
        'Organic and rich in antioxidants',
        'Sourced from sustainable family farms',
        'Perfect for Asian-inspired cuisine',
        'Available in 12oz and 2lb bags',
      ],
      nutrition: {
        servingSize: '1/2 cup (85g)',
        calories: 25,
        totalFat: '0g',
        sodium: '0mg',
        totalCarbs: '5g',
        protein: '1g',
      },
      storage: {
        instructions: 'Store in freezer at 0°F (-18°C) or below. Use within recommended timeframe.',
        shelfLife: '18 months from production date',
        usageTips: [
          'Stir-fry with organic soy sauce and garlic',
          'Add to farm-fresh salads for crunch',
          'Perfect for gourmet appetizers',
        ],
      },
    },
    {
      id: 5,
      name: 'Organic Green Peas',
      description: 'Sweet, tender organic green peas, flash-frozen to preserve their natural flavor and nutrients.',
      image: peas,
      details: 'Sourced from our sustainable family farms, these Organic Green Peas are harvested at peak ripeness and flash-frozen to lock in their sweetness and nutrition. Perfect for soups, curries, salads, and side dishes.',
      highlights: [
        '100% organic and non-GMO',
        'Sourced from sustainable family farms',
        'Rich in protein and fiber',
        'Available in 1lb and 5lb packages',
      ],
      nutrition: {
        servingSize: '1 cup (134g)',
        calories: 79,
        totalFat: '0.4g',
        sodium: '7mg',
        totalCarbs: '14g',
        protein: '5g',
      },
      storage: {
        instructions: 'Store in freezer at 0°F (-18°C) or below. Use within recommended timeframe.',
        shelfLife: '18 months from production date',
        usageTips: [
          'Add to organic curries and stir-fries',
          'Steam for 3-5 minutes as a side dish',
          'Perfect for wholesome pea soup or pulao',
        ],
      },
    },
    {
      id: 6,
      name: 'Fresh Onions',
      description: 'Farm-fresh onions, harvested from sustainable fields for everyday cooking.',
      image: onion,
      details: 'Our Fresh Onions are grown on our family farms using sustainable practices. These firm, flavorful onions are perfect for daily Indian cooking, curries, salads, and as a base for many dishes. Not frozen — kept fresh for maximum versatility.',
      highlights: [
        'Freshly harvested from family farms',
        'Sustainably grown',
        'Essential for everyday cooking',
        'Available in 2kg and 5kg mesh bags',
      ],
      nutrition: {
        servingSize: '1 medium onion (110g)',
        calories: 44,
        totalFat: '0.1g',
        sodium: '4mg',
        totalCarbs: '10g',
        protein: '1.2g',
      },
      storage: {
        instructions: 'Store in a cool, dry, well-ventilated place. Keep away from direct sunlight.',
        shelfLife: '4-6 weeks when stored properly',
        usageTips: [
          'Use as a base for curries and gravies',
          'Add raw to salads and raita',
          'Perfect for sautéing with spices',
        ],
      },
    },
    {
      id: 7,
      name: 'Dry Mature Maize',
      description: 'Full matured and dry maize cobs, sustainably sourced from family farms.',
      image: maize,
      details: 'Our Dry Mature Maize is harvested at full maturity and naturally dried on our sustainable family farms. These hard, golden cobs are ideal for grinding into maize flour, making popcorn, or traditional uses. Delivered dry, not frozen or fresh sweet corn.',
      highlights: [
        'Fully matured and naturally dried',
        'Sustainably grown on family farms',
        'Perfect for flour, popcorn and traditional recipes',
        'Available in packs of 5kg and 10kg',
      ],
      nutrition: {
        servingSize: '100g (dry kernels)',
        calories: 365,
        totalFat: '4.7g',
        sodium: '35mg',
        totalCarbs: '74g',
        protein: '9g',
      },
      storage: {
        instructions: 'Store in a cool, dry place in an airtight container. Keep away from moisture.',
        shelfLife: '12 months from production date',
        usageTips: [
          'Grind into fresh maize flour (makka atta)',
          'Use for making popcorn or roasted snacks',
          'Ideal for traditional Indian recipes and animal feed',
        ],
      },
    },
    {
      id: 8,
      name: 'Onion Powder',
      description: 'Premium dehydrated onion powder, processed from farm-fresh onions with no additives.',
      image: onionPowder,
      details: 'Our Onion Powder is carefully processed from premium farm-fresh onions grown across Maharashtra. The onions are hygienically cleaned, sliced, dehydrated at controlled temperatures, and finely ground to deliver a consistent flavour and aroma. Free from artificial additives and preservatives, it is ideal for food manufacturers, spice blenders, restaurants, and export markets worldwide.',
      highlights: [
        'Made from 100% farm-fresh onions',
        'No artificial additives or preservatives',
        'Fine texture with consistent flavour',
        'Available in bulk export packaging (25 kg bags)',
      ],
      nutrition: {
        servingSize: '1 tsp (3g)',
        calories: 9,
        totalFat: '0g',
        sodium: '1mg',
        totalCarbs: '2g',
        protein: '0.3g',
      },
      storage: {
        instructions: 'Store in a cool, dry place in an airtight container. Keep away from moisture, heat, and direct sunlight.',
        shelfLife: '18 months from production date',
        usageTips: [
          'Use as a seasoning in soups, gravies, and marinades',
          'Ideal for spice blends, ready-to-cook mixes, and snack coatings',
          'Perfect for food processing and industrial use',
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation (Unchanged) */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                          <Link href="/">
                            <Image
                                src={corn}
                                alt="BFF Frozen Corns Logo"
                                height={50}
                                className="rounded-md transform"
                            />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                                About
                            </a>
                            <a href="#export" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                                Export
                            </a>
                            <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">
                                Products
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                                Contact
                            </a>
                            <a
                                href="/Baliraja.pdf"
                                download="Baliraja_Farm_Fresh_Brochure.pdf"
                                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2 rounded-md transition-colors"
                            >
                                <Download className="h-4 w-4" />
                                Download Brochure
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-amber-600"
                                type="button"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                                <a
                                    href="/"
                                    className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                                >
                                    About
                                </a>
                                <a
                                    href="#export"
                                    className="block px-3 py-2 text-amber-600 font-semibold hover:text-amber-700"
                                >
                                    Export
                                </a>
                                <a
                                    href="#products"
                                    className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                                >
                                    Products
                                </a>
                                <a
                                    href="#contact"
                                    className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                                >
                                    Contact
                                </a>
                                <a
                                    href="/brochure.pdf"
                                    download="Baliraja_Farm_Fresh_Brochure.pdf"
                                    className="flex items-center justify-center gap-2 w-full mt-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2.5 rounded-md transition-colors"
                                >
                                    <Download className="h-4 w-4" />
                                    Download Brochure
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background — gradient darker on left for readability, vivid corn visible on right */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest mb-7">
                Est. 1985 · India
              </span>

              <h1 className="font-extrabold text-white leading-tight mb-5">
                <span className="block text-4xl md:text-6xl">Frozen Vegetables</span>
                <span className="block text-4xl md:text-6xl text-amber-400">Exporter from India</span>
              </h1>

              <p className="text-lg text-white/75 mb-10">
                Sweet corn, baby corn, onion, green peas &amp; mixed vegetables — FSSAI certified, APEDA registered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#products">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 font-semibold px-8 h-12 w-full sm:w-auto">
                    View Products
                  </Button>
                </Link>
                <a
                  href="mailto:exports@bfffrozencorns.com?subject=Export%20Inquiry%20-%20Organic%20Frozen%20Vegetables"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:border-amber-400 hover:text-amber-400 font-semibold px-8 h-12 rounded-md transition-colors"
                >
                  <Globe className="h-5 w-5" />
                  Export Inquiry
                </a>
              </div>
            </div>

            {/* RIGHT — stats card */}
            <div className="hidden lg:flex justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-xs">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { number: '38+',  label: 'Years' },
                    { number: '10+',  label: 'Countries' },
                    { number: '7',    label: 'Products' },
                    { number: '18mo', label: 'Shelf Life' },
                  ].map(({ number, label }) => (
                    <div key={label} className="bg-white/10 rounded-xl p-4 text-center">
                      <div className="text-3xl font-extrabold text-amber-400">{number}</div>
                      <div className="text-xs text-white/70 mt-1">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/15 space-y-1.5">
                  {['FSSAI Certified', 'APEDA Registered', '100% Organic'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/75 text-sm">
                      <span className="text-amber-400">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              India&apos;s Trusted Frozen Vegetables Exporter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Baliraja Farm Fresh is a FSSAI certified, APEDA registered frozen vegetables exporter
              from Maharashtra, India — supplying IQF frozen sweet corn, baby corn, green peas,
              mixed vegetables and onion powder to global buyers since 1985.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      IQF Frozen Vegetables — 50 MT/Day
                    </h3>
                    <p className="text-gray-600">
                      Advanced IQF processing plant with 50 MT daily capacity — frozen sweet corn,
                      baby corn, green peas and mixed vegetables processed and packed to international food safety standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      2000+ Farmer Network — Maharashtra
                    </h3>
                    <p className="text-gray-600">
                      Sourcing from 2000+ farmers across Maharashtra ensures year-round
                      supply of fresh raw material with full traceability — from farm to
                      export-ready frozen food packaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      2000 MT Cold Storage — Export Ready
                    </h3>
                    <p className="text-gray-600">
                      Temperature-controlled cold storage of 2000 MT capacity with 5 blast
                      freezers ensures product quality from our facility in Ahilyanagar,
                      Maharashtra to any global destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Organic corn harvest"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section id="export" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
              Global Export
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frozen Vegetables Exporter from India — Bulk Supply Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We export IQF frozen sweet corn, baby corn, frozen green peas, mixed vegetables
              and onion powder to importers, distributors and food-service chains across the
              Middle East, Europe, North America and Southeast Asia.
            </p>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { Icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-100', label: 'FSSAI Certified', desc: 'Indian Food Safety Compliant' },
              { Icon: Award, color: 'text-amber-600', bg: 'bg-amber-100', label: 'APEDA Registered', desc: 'Agri Export Approved' },
              { Icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-100', label: 'Organic Certified', desc: 'Non-GMO & Pesticide-Free' },
              { Icon: Truck, color: 'text-blue-600', bg: 'bg-blue-100', label: 'Cold Chain Logistics', desc: 'Farm to Port — Integrity Assured' },
            ].map(({ Icon, color, bg, label, desc }) => (
              <div key={label} className="bg-white rounded-xl p-6 text-center shadow-sm border border-amber-100">
                <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{label}</h3>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            ))}
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
            {[
              { number: '50 MT', label: 'Daily Production' },
              { number: '2000+', label: 'Farmer Network' },
              { number: '2000 MT', label: 'Cold Storage' },
              { number: '10+', label: 'Countries Exported' },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">{number}</div>
                <div className="text-gray-600 text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* Export Markets */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">We Export To</h3>
            <p className="text-gray-500 text-sm text-center mb-8">Supplying importers &amp; food manufacturers across 10+ countries</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { code: 'ae', name: 'UAE', region: 'Middle East' },
                { code: 'sa', name: 'Saudi Arabia', region: 'Middle East' },
                { code: 'qa', name: 'Qatar', region: 'Middle East' },
                { code: 'gb', name: 'United Kingdom', region: 'Europe' },
                { code: 'us', name: 'USA', region: 'North America' },
                { code: 'de', name: 'Germany', region: 'Europe' },
                { code: 'ca', name: 'Canada', region: 'North America' },
                { code: 'sg', name: 'Singapore', region: 'Asia' },
                { code: 'au', name: 'Australia', region: 'Asia Pacific' },
                { code: 'jp', name: 'Japan', region: 'Asia' },
              ].map(({ code, name, region }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 hover:shadow-sm transition-all duration-200"
                >
                  <img
                    src={`https://flagcdn.com/w80/${code}.png`}
                    alt={`${name} flag`}
                    width={52}
                    height={35}
                    className="rounded-md shadow-sm object-cover w-13 h-9"
                  />
                  <span className="text-gray-800 font-semibold text-sm text-center leading-tight">{name}</span>
                  <span className="text-gray-400 text-xs text-center">{region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-10 text-white">
            <h3 className="text-xl font-bold mb-6 text-center">Why Global Buyers Choose BFF</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Consistent quality across seasons — farm-controlled harvest',
                'Customisable packaging and labelling for international markets',
                'Competitive pricing with flexible MOQ for bulk orders',
                'Cold chain logistics from farm gate to port of origin',
                'Full documentation: Phytosanitary, COA, HACCP &amp; more',
                'Three generations of organic farming — zero compromise on quality',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold mt-0.5">✓</span>
                  <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: point }} />
                </div>
              ))}
            </div>
          </div>

          {/* Export CTA */}
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:exports@bfffrozencorns.com?subject=Export%20Inquiry%20-%20Organic%20Frozen%20Vegetables"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <Mail className="h-5 w-5" />
              Send Export Inquiry
            </a>
            <a
              href="https://wa.me/917559258750?text=Hello%20BFF%20Frozen%20Corns%2C%20I%20am%20interested%20in%20bulk%20export%20of%20your%20organic%20frozen%20vegetables.%20Please%20share%20your%20product%20catalogue%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <Phone className="h-5 w-5" />
              WhatsApp for Bulk Orders
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frozen Vegetables for Export — Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IQF frozen sweet corn, baby corn, green peas, mixed vegetables and onion powder —
              all export-ready from our certified processing facility in Maharashtra, India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter((_, index) => showMore || index < 3).map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/products/${product.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="text-center mt-10">
            <Button
              variant="default"
              onClick={() => setShowMore(!showMore)}
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              {showMore ? 'Show Less' : 'Explore All Products'}
            </Button>
          </div>
        </div>
      </section>

      {/* Product Spotlight Section — keyword-rich content for Google */}
      <section id="product-categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              India&apos;s Premier Frozen Vegetable Exporter — Product Details
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed export specifications for international importers, food manufacturers and distributors.
            </p>
          </div>

          <div className="space-y-16">

            {/* Sweet Corn */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pb-16 border-b border-gray-100">
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Sweet Corn Exporter from India — IQF Frozen Corn Kernels &amp; Cobs
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Baliraja Farm Fresh is one of India&apos;s top exporters of IQF frozen sweet corn kernels and whole corn cobs.
                  Our sweet corn is harvested from 2000+ contracted farmers across Maharashtra and frozen within hours of harvest
                  using Individual Quick Freezing (IQF) technology — locking in natural sweetness, bright yellow colour and full
                  nutritional value. We supply frozen sweet corn in bulk to food manufacturers, supermarket chains and importers in
                  UAE, Saudi Arabia, UK, USA, Germany and across Asia-Pacific.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {[
                    'Non-GMO, organic and pesticide-free sweet corn from Maharashtra',
                    'IQF-frozen within hours of harvest at our Ahilyanagar facility',
                    '50 MT daily processing capacity — consistent bulk supply guaranteed',
                    'Available in 1 kg, 5 kg consumer packs and bulk export bags',
                    'Custom labelling and private label for international markets',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
                <Link href="/products/1" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700 text-sm">
                  View Frozen Sweet Corn Details →
                </Link>
              </div>
              <div className="lg:col-span-2 bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Export Specifications</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ['Product', 'IQF Frozen Sweet Corn Kernels / Cobs'],
                    ['Origin', 'Maharashtra, India'],
                    ['Processing', 'Individual Quick Freezing (IQF)'],
                    ['Shelf Life', '18 months at -18°C'],
                    ['Certifications', 'FSSAI, APEDA, Organic'],
                    ['Min Order', '1 MT per product'],
                    ['Packing', '1 kg, 5 kg, bulk export bags'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-gray-500 font-medium w-28 flex-shrink-0">{k}:</span>
                      <span className="text-gray-800">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Baby Corn */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pb-16 border-b border-gray-100">
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Baby Corn Exporter from India — Organic Frozen Baby Corn Bulk Supplier
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our organic frozen baby corn is hand-picked at the ideal stage of maturity and IQF-frozen at our
                  Ahilyanagar facility within hours of harvest. One of the highest-demand export products for Asian
                  cuisine, our baby corn is sourced directly from farmer networks across Maharashtra and processed
                  under strict FSSAI and APEDA guidelines. We supply frozen baby corn to importers in UAE, UK, USA,
                  Singapore, Japan and Australia — perfect for food service, retail and food manufacturing.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {[
                    '100% organic, hand-picked baby corn from Maharashtra farms',
                    'Tender, crisp texture — ideal for stir-fries, salads, Asian cuisine',
                    'IQF-frozen at peak freshness — no browning or sogginess',
                    'Available in 500 g, 1 kg consumer packs and bulk export bags',
                    'Phytosanitary certificate and full export documentation provided',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
                <Link href="/products/4" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700 text-sm">
                  View Baby Corn Details →
                </Link>
              </div>
              <div className="lg:col-span-2 bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Export Specifications</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ['Product', 'IQF Organic Frozen Baby Corn'],
                    ['Origin', 'Maharashtra, India'],
                    ['Processing', 'Individual Quick Freezing (IQF)'],
                    ['Shelf Life', '18 months at -18°C'],
                    ['Certifications', 'FSSAI, APEDA, Organic'],
                    ['Min Order', '1 MT per product'],
                    ['Packing', '500 g, 1 kg, bulk export bags'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-gray-500 font-medium w-28 flex-shrink-0">{k}:</span>
                      <span className="text-gray-800">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mixed Veg & Green Peas */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start pb-16 border-b border-gray-100">
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Frozen Mixed Vegetables &amp; Green Peas Exporter from India
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our IQF frozen mixed vegetables — a blend of carrots, peas, sweet corn and green beans — and
                  standalone frozen green peas are processed from organically grown produce sourced across Maharashtra.
                  Both products are IQF-frozen at peak ripeness with no preservatives or additives. Ideal for ready-meal
                  manufacturers, food service companies, and retail chains in the Middle East, Europe and North America,
                  our frozen mixed vegetables and green peas are export-ready with full certification and cold chain logistics
                  from our facility in Ahilyanagar to any global destination.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {[
                    '100% organic, four-vegetable blend — no preservatives',
                    'IQF-frozen green peas — rich in protein and dietary fibre',
                    'Consistent grading and sizing for retail and food service',
                    'No washing or prep required — cook straight from frozen',
                    'Available in 1 kg consumer packs and bulk export bags',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Link href="/products/3" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700 text-sm">
                    View Mixed Vegetables →
                  </Link>
                  <Link href="/products/5" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700 text-sm">
                    View Green Peas →
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-2 bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Export Specifications</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ['Products', 'Mixed Veg Blend / IQF Green Peas'],
                    ['Origin', 'Maharashtra, India'],
                    ['Processing', 'Individual Quick Freezing (IQF)'],
                    ['Shelf Life', '18 months at -18°C'],
                    ['Certifications', 'FSSAI, APEDA, Organic'],
                    ['Min Order', '1 MT per product'],
                    ['Packing', '1 kg, 5 kg, bulk export bags'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-gray-500 font-medium w-28 flex-shrink-0">{k}:</span>
                      <span className="text-gray-800">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Onion Powder */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Onion Exporter from India — Fresh Onions &amp; Dehydrated Onion Powder
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Baliraja Farm Fresh also exports premium dehydrated onion powder processed from farm-fresh onions
                  grown across Maharashtra. Our onion powder is hygienically cleaned, sliced, dehydrated at controlled
                  temperatures and finely ground to deliver a consistent flavour, aroma and fine texture.
                  Free from artificial additives, it is ideal for food manufacturers, spice blenders, restaurant chains
                  and FMCG brands worldwide. We also export fresh onions and dry mature maize in bulk.
                  All export shipments come with full documentation including COA, Phytosanitary Certificate and HACCP records.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  {[
                    'Made from 100% farm-fresh Maharashtra onions — no additives',
                    'Fine, uniform texture with consistent pungency and aroma',
                    'Available in 25 kg bulk export bags for food manufacturers',
                    'Also available: fresh onions (5 kg mesh bags) and dry maize (bulk sacks)',
                    'APEDA registered — full export documentation provided',
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
                <Link href="/products/8" className="inline-flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-700 text-sm">
                  View Onion Powder Details →
                </Link>
              </div>
              <div className="lg:col-span-2 bg-amber-50 rounded-xl p-6 border border-amber-100">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Export Specifications</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ['Product', 'Dehydrated Onion Powder'],
                    ['Origin', 'Maharashtra, India'],
                    ['Processing', 'Dehydration & Fine Grinding'],
                    ['Shelf Life', '18 months (sealed)'],
                    ['Certifications', 'FSSAI, APEDA'],
                    ['Min Order', '1 MT'],
                    ['Packing', '25 kg bulk export bags'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-gray-500 font-medium w-28 flex-shrink-0">{k}:</span>
                      <span className="text-gray-800">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything importers and distributors ask about our frozen vegetables export from India.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Are you a sweet corn exporter from India?',
                a: 'Yes. Baliraja Farm Fresh (BFF) is a leading sweet corn exporter from India. We export IQF frozen sweet corn kernels and whole corn cobs processed at our Ahilyanagar, Maharashtra facility. Our sweet corn is organic, non-GMO and supplied to importers in UAE, UK, USA, Germany and across Asia.',
              },
              {
                q: 'Are you an onion exporter from India?',
                a: 'Yes. Baliraja Farm Fresh exports fresh onions and dehydrated onion powder from Maharashtra, India. Our fresh onions are sustainably grown in Maharashtra and available in 2 kg and 5 kg mesh bags. Our onion powder is available in 25 kg bulk export bags — ideal for food manufacturers and spice blenders worldwide.',
              },
              {
                q: 'Are you a baby corn exporter from India?',
                a: 'Yes. We export organic IQF frozen baby corn from India. Hand-picked at peak freshness from Maharashtra farms and frozen within hours of harvest. Available in consumer packs and bulk export bags — perfect for Asian cuisine, food service and supermarket chains in UAE, UK, Singapore, Japan and beyond.',
              },
              {
                q: 'Are you a green peas exporter from India?',
                a: 'Yes. Baliraja Farm Fresh exports IQF organic frozen green peas from India. Harvested at peak ripeness and flash-frozen to lock in nutrition and sweetness. Available in 500 g, 1 kg, 5 kg and bulk export bags. We supply importers, food processors and distributors worldwide.',
              },
              {
                q: 'Which frozen vegetables do you export from India?',
                a: 'We are a frozen vegetables exporter from India supplying IQF sweet corn kernels, frozen corn cobs, organic baby corn, frozen green peas, mixed vegetables, fresh onions, dry maize and onion powder — all processed at our certified facility in Ahilyanagar, Maharashtra, India.',
              },
              {
                q: 'Are you a FSSAI certified and APEDA registered frozen food exporter?',
                a: 'Yes. Baliraja Farm Fresh is FSSAI certified and APEDA registered. All our frozen vegetables are processed under strict quality control and international food safety standards, making them export-ready for the Middle East, Europe, USA and other markets.',
              },
              {
                q: 'What is the minimum order quantity for frozen vegetables export?',
                a: 'Our minimum order quantity for export is typically 1 MT per product. We offer flexible bulk packaging options and can customise labelling and pack sizes to meet the requirements of your market.',
              },
              {
                q: 'Which countries do you export frozen sweet corn and vegetables to?',
                a: 'We export frozen vegetables to UAE, Saudi Arabia, Qatar, United Kingdom, USA, Germany, Canada, Singapore, Australia and Japan, among others. We supply importers, distributors, supermarket chains and food processors worldwide.',
              },
              {
                q: 'What is your production capacity for frozen vegetables?',
                a: 'Our processing facility has a daily capacity of 50 MT with 5 blast freezers (10 MT each), IQF processing at 2 MT per hour, and cold storage capacity of 2000 MT — ensuring consistent bulk supply throughout the year.',
              },
              {
                q: 'What export documentation do you provide?',
                a: 'We provide all standard export documentation including Phytosanitary Certificate, Certificate of Analysis (COA), HACCP records, packing list, invoice and bill of lading. Our team handles complete documentation support for hassle-free import clearance.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3 text-base">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
   <section id="contact" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-16">

      {/* ✅ Image Added Here */}
      <div className="flex justify-center mb-6">
        <img
          src="/logo2.png" // replace with your image path
          alt="Contact Us"
          className="w-52 h-52 object-cover"
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Get In Touch
      </h2>

      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Ready to partner with us? Contact our team for export pricing, product catalogue,
        MOQ details, and custom packaging for your market.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
          <p className="text-gray-300">
            <a href="tel:+917559258750" className="hover:text-amber-400 transition-colors">+91 75592 58750</a>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
          <p className="text-gray-300">
            <a href="mailto:exports@bfffrozencorns.com" className="hover:text-amber-400 transition-colors">
              exports@bfffrozencorns.com
            </a>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Sakharwadi, Talegaon Male,<br />
            Ahilyanagar, Maharashtra – 413708<br />
            India
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src={corn}
              alt="BFF Frozen Corns Logo"
              height={40}
              className="rounded-md transform"
            />
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://wa.me/917559258750?text=Hello%20BFF%20Frozen%20Corns%2C%20I%20have%20an%20export%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2026 BFF Frozen Corns — Baliraja Farm Fresh. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}