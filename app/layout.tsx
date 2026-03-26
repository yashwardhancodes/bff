import './globals.css';
import './whatsapp-icon.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
 
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BFF Frozen Corns - Premium Frozen Corn Products',
  description:
    'Premium frozen corn products delivered fresh from farm to freezer. Serving restaurants, retailers, and food service providers nationwide since 1985.',
     icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <a
          href="https://wa.me/919673963283?text=Hello%20Baliraja%20Farm%20Fresh,%20I%20have%20an%20inquiry%20about%20your%20frozen%20corn%20and%20vegetable%20products."
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <Image
            src="/whatsapp.png" // <-- ensure this path is correct
            alt="WhatsApp"
            width={70}   // adjust size as needed
            height={70}  // adjust size as needed
          />
        </a>
      </body>
    </html>
  );
}
