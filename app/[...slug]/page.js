
import React from "react";
import settings from "@/settings.json";
import TitleBar from "@/components/TitleBar";
import { timeAgo } from "@/components/timeAgo";
import ShareButton from "@/components/ShareButtons";
import RightSidebar from "@/components/RightSidebar";
import Comments from "@/components/Comments";
import Link from "next/link";
import Adsense from "@/components/Adsense";

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

const SinglePostPage = async ({ params }) => {
  const res = await fetch(
    `${settings.api}/posts?slug=${params.slug}`
  );
  const data = await res.json();

  if (!data || data.length > 0) {

    metadata.title = `${data.at(0)?.title?.rendered ||
      settings.seo.title} | ${settings.seo.title
      }`;
    metadata.openGraph.title = `${data.at(0)?.title?.rendered} | ${settings.seo.title
      }`;
    metadata.description = data.at(0)?.excerpt.rendered;
    metadata.openGraph.description = data.at(0)?.excerpt.rendered;
    metadata.openGraph.url = `/${params.slug}`;
    metadata.canonical = `/${params.slug}`;

    const rel = await fetch(
      `${settings.api}/posts?categories=${data
        .at(0)
        .categories.at(0)}&per_page=5`
    );

    const related = await rel.json();
    const post = data.at(0);

    return (
      <main className="main">
        <TitleBar
          title={post.title.rendered}
          day={new Date().getDate().toString().padStart(2, "0")}
          year={new Date().toLocaleDateString("en-US", {
            month: "long",
            year: "2-digit",
          })}
        />
        <div className="detail">
          <div className="description">
            <div className="description__article">
              <div className="description__article-header">
                <div className="description__artcile-meta">
                  Published <span className="color-primary">{timeAgo(post.date_gmt)}</span> By{" "}
                  <span className="color-primary">
                    Admin
                  </span>{" "}
                </div>
                <div className="overview__socials">
                  <ShareButton
                    title={post.title.rendered}
                    url={`${settings.api}/${post.slug}`}
                  />
                </div>
              </div>
              <div id={post.id} className="description__article-body">
                <div
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  className="entry-content"
                />
                {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <Adsense id="googleadstwo" slot={settings.squareAd} />}
                <div className="entry-content">
                  <div className="overview__socials mt3">
                    <p>Click any of the icons to share this post: </p>&nbsp;
                    <ShareButton
                      title={post.title.rendered}
                      url={`${settings.api}/${post.slug}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="related-posts">
              <div className="right-sidebar__title">You may also like</div>
              {related.map((item) => (
                <div className="articles" key={item.id}>
                  <a href={`/${item.slug}`}>
                    <figure className="articles__post">
                      <div className="articles__post-content">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.title.rendered,
                          }}
                          className="articles__title"
                        />
                        <div className="articles__icon">&gt;</div>
                      </div>
                    </figure>
                  </a>
                </div>
              ))}
            </div>
            <Comments post={post} />
            <div className="mt3">&nbsp;</div>
          </div>
          <div className="right-sidebar">
            <RightSidebar />
          </div>
        </div>
      </main>
    );

  } else {
    return (
      <main className="main">
        <TitleBar
          title="Page not found"
          day={new Date().getDate().toString().padStart(2, "0")}
          year={new Date().toLocaleDateString("en-US", {
            month: "long",
            year: "2-digit",
          })}
        />
        <div className="detail">
          <div className="description">
            <section class="section">
              <div class="section__content" style={{ textAlign: "center" }}>
                <div>
                  <h3 class="fw-bold mb-4 text-center">
                    The link you followed is broken. Page not found!
                  </h3>
                  <Link href="/" class="btn btn--primary text-white">
                    Go to homepage
                  </Link>
                </div>
              </div>
            </section>
          </div>
          <div className="right-sidebar">
            <RightSidebar />
          </div>
        </div>
      </main>
    );
  }
};
export default SinglePostPage;

