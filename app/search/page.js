import Search from "@/components/Search";
import settings from "@/settings.json";

export const metadata = {
  title: `Search | ${settings.seo.title}`,
  canonical: "/search",

  openGraph: {
    url: "/search",
    title: `Search | ${settings.seo.title}`,
    images: [
      {
        url: `${settings.icon}`,
        width: 800,
        height: 600,
        alt: `${settings.seo.tagline}`,
        type: "image/jpeg",
      },
    ],
    siteName: `${settings.seo.title}`,
  },
  script: [
    {
      type: "application/ld+json",
      json: {
        "@context": "https://schema.org",
        "@type": "Website",
        headline: `${settings.seo.tagline} | ${settings.seo.title}`,
        description: `${settings.seo.description}`,
        author: {
          "@type": "Person",
          name: `${settings.seo.title}`,
          url: ``,
        },
        mainEntityOfPage: {
          "@type": "Search",
          "@id": "/search",
        },
        image: `${settings.icon}`,
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
      },
    },
  ],
};
export default async function SearchPage() {
  return <Search />;
}
