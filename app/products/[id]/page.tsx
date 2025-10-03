'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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

// Mock product data (in a real app, this could come from an API or shared file)
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

export default function ProductPage() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const params = useParams()
    const productId = parseInt(params.id as string)
    const product = products.find((p) => p.id === productId)

    // WhatsApp API link generator
    const generateWhatsAppLink = (productName: string) => {
        const phoneNumber = '+919673963283'
        const message = encodeURIComponent(`Hello, I'm interested in enquiring about ${productName}. Can you provide more details?`)
        return `https://wa.me/${phoneNumber}?text=${message}`
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                {/* Navigation */}
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

                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                        <Button asChild variant="outline" className="bg-amber-500 hover:bg-amber-600 text-white">
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-black text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={corn}
                                    alt="BFF Frozen Corns Logo"
                                    height={40}
                                    className="rounded-md transform"
                                />
                            </div>
                            <p className="text-gray-400">© 2025 BFF Frozen Corns. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-2">
                            <Image
                                src={corn}
                                alt="BFF Frozen Corns Logo"
                                height={50}
                                className="rounded-md transform"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
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
                                    href="#home"
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

            {/* Product Content */}
            <div className="pt-24 pb-20 bg-gradient-to-b from-amber-50/30 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section with Product Image and Title */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-transparent rounded-2xl transform rotate-3"></div>
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white"
                            />
                        </div>

                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block">
                                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                                    🌱 Premium Organic Quality
                                </span>
                            </div>
                            <h1 className="text-5xl font-bold text-gray-900 leading-tight">{product.name}</h1>
                            <p className="text-xl text-gray-600 leading-relaxed">{product.description}</p>
                            <Button
                                asChild
                                className="bg-amber-500 hover:bg-amber-600 w-fit px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                <a
                                    href={generateWhatsAppLink(product.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Inquire About This Product
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="mb-16 bg-white p-10 rounded-2xl shadow-lg border-2 border-green-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-1 h-8 bg-green-600 mr-4 rounded-full"></span>
                            Product Details
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">{product.details}</p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose This Product</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {product.highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-md border-2 border-green-100 hover:shadow-lg hover:border-green-200 transition-all"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white font-bold">{index + 1}</span>
                                        </div>
                                        <p className="text-gray-700 text-lg pt-2">{highlight}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Two Column Layout for Nutrition and Storage */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Nutrition Information */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-green-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-1 h-6 bg-green-600 mr-3 rounded-full"></span>
                                Nutrition Facts
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-green-100">
                                    <span className="text-gray-600 font-medium">Serving Size</span>
                                    <span className="text-gray-900 font-semibold">{product.nutrition.servingSize}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-green-100">
                                    <span className="text-gray-600 font-medium">Calories</span>
                                    <span className="text-gray-900 font-semibold">{product.nutrition.calories}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-green-100">
                                    <span className="text-gray-600 font-medium">Total Fat</span>
                                    <span className="text-gray-900 font-semibold">{product.nutrition.totalFat}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-green-100">
                                    <span className="text-gray-600 font-medium">Sodium</span>
                                    <span className="text-gray-900 font-semibold">{product.nutrition.sodium}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-green-100">
                                    <span className="text-gray-600 font-medium">Total Carbs</span>
                                    <span className="text-gray-900 font-semibold">{product.nutrition.totalCarbs}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Protein</span>
                                    <span className="text-gray-900 font-semibold">{product.nutrition.protein}</span>
                                </div>
                            </div>
                        </div>

                        {/* Storage & Usage */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-amber-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-1 h-6 bg-amber-500 mr-3 rounded-full"></span>
                                Storage & Usage
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-600 font-medium mb-2">Storage Instructions</p>
                                    <p className="text-gray-700">{product.storage.instructions}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-medium mb-2">Shelf Life</p>
                                    <p className="text-gray-700">{product.storage.shelfLife}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 font-medium mb-3">Usage Tips</p>
                                    <div className="space-y-2">
                                        {product.storage.usageTips.map((tip, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700">{tip}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-amber-500 rounded-2xl p-12 text-center shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
                        <p className="text-amber-50 text-lg mb-8 max-w-2xl mx-auto">
                            Get in touch with us today to learn more about our organic products and place your order.
                        </p>
                        <Button
                            asChild
                            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all font-semibold"
                        >
                            <a
                                href={generateWhatsAppLink(product.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact Us Now
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

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
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://wa.me/+919673963283" // Replace with actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-tupke-1235a3367/"
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