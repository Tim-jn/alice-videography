import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  url?: string;
  image?: string;
  keywords?: string;
}

export default function SEO({
  title,
  description,
  type = "website",
  url = "https://alice-videography.com",
  image = "https://alice-videography.com/og-image.jpg",
  keywords = "videography, music video, corporate video, Belgium, alice j, video production, cinematography",
}: SEOProps) {
  const fullTitle = `${title} | Alice J. - Videography`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Alice J." />

      {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Alice J. Videography" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_BE" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
