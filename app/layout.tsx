import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/JsonLd'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-opensans',
  display: 'swap',
})

const BASE_URL = 'https://fitmaster.es'

export const viewport: Viewport = {
  themeColor: '#D7FB04',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Fitmaster — Método, Disciplina, Resultados',
    template: '%s | Fitmaster',
  },
  description:
    'Ecosistema fitness en Gijón: asesoramiento personalizado, suplementación estratégica y seguimiento real. Transforma tu físico con criterio y resultados medibles.',
  keywords: [
    'fitmaster',
    'fitmaster gijón',
    'asesoramiento fitness gijón',
    'entrenador personal gijón',
    'suplementación gijón',
    'nutrición deportiva gijón',
    'culturismo asturias',
    'plan de entrenamiento personalizado',
    'plan nutricional personalizado',
    'lifepro gijón',
    'tienda suplementos gijón',
    'equipo competición fitness',
  ],
  authors: [
    { name: 'Pablo Álvarez', url: `${BASE_URL}/sobre-nosotros` },
    { name: 'Fitmaster', url: BASE_URL },
  ],
  creator: 'Pablo Álvarez',
  publisher: 'Fitmaster',
  category: 'fitness',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'Fitmaster',
    title: 'Fitmaster — Método, Disciplina, Resultados',
    description:
      'Asesoramiento personalizado, suplementación estratégica y seguimiento real en Gijón. Deja de improvisar y empieza a avanzar con criterio.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Fitmaster — Ecosistema fitness en Gijón',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fitmaster — Método, Disciplina, Resultados',
    description:
      'Asesoramiento personalizado, suplementación estratégica y seguimiento real en Gijón.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'es-ES': BASE_URL,
      'x-default': BASE_URL,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon-32x32.png'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'google213352008a51681f',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
