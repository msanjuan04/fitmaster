// Structured data JSON-LD para SEO
// LocalBusiness + Organization + WebSite + Person + FAQPage
export default function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthClub', 'SportsActivityLocation'],
    '@id': 'https://fitmaster.es/#business',
    name: 'Fitmaster',
    legalName: 'Fitmaster Gijón',
    description:
      'Ecosistema fitness en Gijón que une asesoramiento personalizado, suplementación estratégica y seguimiento real para transformar tu físico con criterio y resultados medibles.',
    url: 'https://fitmaster.es',
    logo: 'https://fitmaster.es/logo_fit.webp',
    image: 'https://fitmaster.es/opengraph-image',
    telephone: '+34722624740',
    email: 'fitmastergijon@gmail.com',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida de Portugal, 9, Bajo',
      addressLocality: 'Gijón',
      addressRegion: 'Asturias',
      postalCode: '33207',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Actualizar con coordenadas exactas de Google Maps: Avenida de Portugal 9, Gijón
      latitude: 43.5271,
      longitude: -5.6797,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:30',
        closes: '13:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '17:30',
        closes: '20:30',
      },
    ],
    sameAs: ['https://www.instagram.com/fitmastergijon'],
    hasMap: 'https://maps.google.com/?q=Avenida+de+Portugal+9+Gijón+Asturias',
    areaServed: [
      { '@type': 'City', name: 'Gijón' },
      { '@type': 'AdministrativeArea', name: 'Asturias' },
      { '@type': 'Country', name: 'España' },
    ],
    founder: { '@id': 'https://fitmaster.es/#pablo' },
    serviceType: [
      'Asesoramiento fitness personalizado',
      'Planes de entrenamiento',
      'Planes nutricionales',
      'Venta de suplementación deportiva',
    ],
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://fitmaster.es/#organization',
    name: 'Fitmaster',
    url: 'https://fitmaster.es',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fitmaster.es/logo_fit.webp',
      width: 1170,
      height: 1170,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34722624740',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    sameAs: ['https://www.instagram.com/fitmastergijon'],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://fitmaster.es/#website',
    url: 'https://fitmaster.es',
    name: 'Fitmaster',
    description: 'Ecosistema fitness en Gijón — Método, Disciplina, Resultados',
    publisher: {
      '@id': 'https://fitmaster.es/#organization',
    },
    inLanguage: 'es-ES',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fitmaster.es/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://fitmaster.es/#pablo',
    name: 'Pablo Álvarez',
    givenName: 'Pablo',
    familyName: 'Álvarez',
    jobTitle: 'Entrenador Personal y Fundador de Fitmaster',
    worksFor: { '@id': 'https://fitmaster.es/#organization' },
    url: 'https://fitmaster.es/pablo-alvarez',
    sameAs: [
      'https://www.instagram.com/fitmastergijon',
      'https://fitmaster.es/pablo-alvarez',
      'https://fitmaster.es/sobre-nosotros',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certificado de Profesionalidad — Actividades de Fitness',
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'SEPE — Servicio Público de Empleo Estatal',
      },
    },
    knowsAbout: [
      'Entrenamiento de fuerza',
      'Nutrición deportiva',
      'Culturismo natural',
      'Transformación física',
      'Suplementación deportiva',
      'Preparación para competición',
    ],
    award: 'Campeón de España de Culturismo',
    description:
      'Pablo Álvarez, Campeón de España de Culturismo, entrenador personal certificado y fundador de Fitmaster Gijón. Más de 250 personas transformadas con un método basado en criterio, seguimiento real y resultados medibles.',
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Para quién es el asesoramiento de Fitmaster?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Para cualquier persona que quiera dejar de improvisar y avanzar con un sistema claro: ya sea alguien que empieza desde cero, alguien que lleva tiempo entrenando sin ver resultados, o alguien que quiere prepararse para competición.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el plan de asesoramiento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Incluye plan de entrenamiento personalizado, plan nutricional adaptado a tu objetivo, seguimiento periódico con revisiones y ajustes, y acceso directo al entrenador para resolver dudas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde está Fitmaster en Gijón?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fitmaster está en Avenida de Portugal 9, Bajo, 33207 Gijón, Asturias. Horario de lunes a viernes de 10:30 a 13:30 y de 17:30 a 20:30.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué suplementos vende Fitmaster?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fitmaster es distribuidor oficial de Life Pro Nutrition, una de las marcas de suplementación deportiva de mayor calidad en España. Proteínas, creatina, pre-entrenos, vitaminas y más, con recomendación personalizada y posibilidad de probar sabores antes de comprar.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo puedo contactar con Fitmaster?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puedes contactar por WhatsApp al 722 624 740, por email a fitmastergijon@gmail.com, o visitarnos directamente en nuestra tienda en Avenida de Portugal 9, Gijón.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
