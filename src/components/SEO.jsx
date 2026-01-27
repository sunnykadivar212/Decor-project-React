import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = 'Aangan Decor - Premium Interior & Decorative Solutions',
  description = 'Transform your spaces with Aangan Decor\'s premium plywood, laminates, and decorative items. Quality materials and exceptional craftsmanship since 2009.',
  keywords = 'interior design, plywood, laminates, decorative items, mandala art, home decor, aangan decor',
  image = '/og-image.jpg',
  url = 'https://aangangroup.in',
  type = 'website'
}) {
  const siteTitle = 'Aangan Decor';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Aangan Decor" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default SEO;
