import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="description" content="Créez votre site web professionnel à Strasbourg et développez votre activité locale." />
        <meta name="keywords" content="création site web, strasbourg, PME, artisans, site vitrine, e-commerce, SEO local" />
        <link rel="canonical" href="https://www.votresite.com/" />
        <meta property="og:title" content="Création de Site Web Professionnel à Strasbourg | Agence Web Locale" />
        <meta property="og:description" content="Boostez votre visibilité locale avec un site web sur-mesure. Experts en SEO et design pour PME et artisans à Strasbourg." />
        <meta property="og:image" content="https://www.votresite.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.votresite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}