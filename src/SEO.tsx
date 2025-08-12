import { Helmet } from 'react-helmet-async'

const site = {
  name: 'Kidsyu',
  url: 'https://kidsyu.example',
  twitter: '@kidsyu',
  description:
    "Kidsyu is a children's entertainment platform creating high-quality, meaningful animated songs and rhymes using world-class technology.",
}

export function SEO({ title, description, path = '/', image = '/kidsyu_logo.png' }: { title?: string; description?: string; path?: string; image?: string }) {
  const pageTitle = title ? `${title} — ${site.name}` : `${site.name} — Songs, Rhymes, and Smiles`
  const pageUrl = `${site.url}${path}`
  const pageDesc = description ?? site.description

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kidsyu',
    url: site.url,
    logo: image,
    sameAs: [
      'https://youtube.com/@igottabubu?si=nozlhVV5c4mQIAuB',
      'https://www.instagram.com/kidsyuyt/',
    ],
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={image} />

      {/* PWA hints */}
      <meta name="theme-color" content="#22c55e" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

