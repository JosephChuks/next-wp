
import React from "react";
import settings from "@/settings.json";
import SinglePost from "@/components/SinglePost";

export const metadata = {
  title: `${settings.seo.title} | ${settings.seo.tagline}`,
  description: `${settings.seo.description}`,
  keywords: `${settings.seo.keywords}`,
  canonical: '/',
  image: `${settings.icon}`,
  author: `${settings.seo.tagline}`,
  robots: "index, follow",
  twitter: {
    handle: `${settings.seo.twitter}`,
    site: `${settings.seo.twitter}`,
    cardType: "summary_large_image",
  },

  openGraph: {
    url: '/',
    title: `${settings.seo.title} | ${settings.seo.tagline}`,
    description: `${settings.seo.description}`,
    images: [
      {
        url: `${settings.icon}`,
        width: 800,
        height: 600,
        alt: `${settings.seo.title}`,
        type: "image/jpeg",
      },
    ],
    siteName: `${settings.seo.tagline}`,
  },
  script: [
    {
      type: "application/ld+json",
      json: {
        "@context": "https://schema.org",
        "@type": "Website",
        headline: `${settings.seo.title} | ${settings.seo.tagline}`,
        description: `${settings.seo.description}`,
        author: {
          "@type": "Person",
          name: `${settings.seo.tagline}`,
          url: '/',
        },
        mainEntityOfPage: {
          "@type": "Website",
          "@id": '/',
        },
        image: `${settings.icon}`,
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
      },
    },
  ],
};

const SinglePostPage = async (req) => {
  const res = await fetch(
    `${settings.api}/posts?slug=${req.params.slug}`
  );
  const data = await res.json();

  metadata.title = `${data.at(0)?.title?.rendered || 'Post'} | ${
    settings.seo.title
  }`;
  metadata.openGraph.title = `${data.at(0)?.title?.rendered} | ${
    settings.seo.title
  }`;
  metadata.description = data.at(0)?.excerpt.rendered;
  metadata.openGraph.description = data.at(0)?.excerpt.rendered;
  metadata.openGraph.url = `/${req.params.slug}`;
  metadata.canonical = `/${req.params.slug}`;

  const rel = await fetch(
    `${settings.api}/posts?categories=${data
      .at(0)
      .categories.at(0)}&per_page=5`
  );
  const related = await rel.json();

  return (
    <main className="main">
      <SinglePost data={data} related={related} slug={req.params.slug} />
    </main>
  );
};
export default SinglePostPage;
