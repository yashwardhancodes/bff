'use client'

import { useState } from 'react'
import { Menu, X, Leaf, Phone, Mail, MapPin, Star } from 'lucide-react'
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
  const [showMore, setShowMore] = useState<boolean>(false)

    const generateWhatsAppLink = (productName: string) => {
        const phoneNumber = '+919673963283'
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
  ]

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
                            <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">
                                Products
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                                Contact
                            </a>
                             <Button className="w-full mt-2 bg-amber-500 hover:bg-amber-600">
                                    <a
                                        href={generateWhatsAppLink("forzen products")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Inquiry
                                    </a>
                                </Button>
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
                                <Button className="w-full mt-2 bg-amber-500 hover:bg-amber-600">
                                    <a
                                        href={generateWhatsAppLink("forzen products")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Get Inquiry
                                    </a>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Organic Frozen Corn
              <span className="block text-amber-400">Sourced from the Farm</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              From our sustainable family farms to your freezer, we deliver organic,
              farm-fresh corn products to restaurants, retailers, and food service
              providers nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="#products">
              <Button size="lg"  className="bg-amber-500 hover:bg-amber-600 text-lg px-8 py-3">
                View Products
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farm-Fresh Quality 
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three generations of organic farming excellence, delivering sustainably
              sourced, farm-fresh frozen corn products with unmatched flavor and quality.
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
                      Organic Quality
                    </h3>
                    <p className="text-gray-600">
                      Hand-selected, organic corn varieties sourced from our farms, frozen
                      at peak freshness to preserve nutrition and flavor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Sustainable Farming
                    </h3>
                    <p className="text-gray-600">
                      Committed to organic, environmentally responsible farming practices
                      and sustainable sourcing from family farms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Reliable Service
                    </h3>
                    <p className="text-gray-600">
                      Nationwide distribution of farm-fresh products with timely delivery
                      and exceptional customer service.
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

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Organic Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of organic, sustainably sourced corn and vegetable
              products, fresh from the farm to your table.
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

      {/* Contact Section */}
   <section id="contact" className="py-20 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Get In Touch
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Ready to partner with us? Contact our team for pricing, availability, and
        custom organic solutions sourced from our farms.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
          <p className="text-gray-300">+919673963283 / +919021297956</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
          <p className="text-gray-300">pankajtupke14@gmail.com</p>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
          <p className="text-gray-300">Baliraja Farm Fresh</p>
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
              href="https://wa.me/1234567890" // Replace with actual WhatsApp number
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
          <p className="text-gray-400">© 2025 BFF Frozen Corns. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}