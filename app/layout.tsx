import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "DojoPass - India's Fastest Digital Pass Store",
  description:
    "Buy ChatGPT Plus, Spotify Premium, Domains, Netflix & more with instant UPI payments. India's fastest digital pass delivery platform.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/pass/dojopass.png', sizes: '32x32', type: 'image/png' },
      { url: '/pass/dojopass.png', sizes: '16x16', type: 'image/png' },
      { url: '/pass/dojopass.png', sizes: 'any' },
    ],
    apple: [{ url: '/pass/dojopass.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/pass/dojopass.png', sizes: '192x192', type: 'image/png' },
      { url: '/pass/dojopass.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>{children}</CartProvider>
          </AuthProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
