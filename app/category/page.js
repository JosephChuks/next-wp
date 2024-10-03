import RightSidebar from '@/components/RightSidebar';
import Link from 'next/link';
import settings from '@/settings';
import TitleBar from '@/components/TitleBar';
import FeaturedImage from '@/components/FeaturedImage';
import Spinner from '@/components/Spinner';
import { Suspense } from 'react';
import Image from 'next/image';
import Adsense from '@/components/Adsense';

export const metadata = {
  title: `Categories | ${settings.seo.title}`,
  canonical: `/category`,

  openGraph: {
    url: `/category`,
    title: `Categories | ${settings.seo.title}`,
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
};

export default async function AllCategoryPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const res = await fetch(`${settings.api}/categories?page=${page}`);
  const posts = await res.json();
  const hasNextPage = posts.length > 0;
  const hasPrevPage = page > 1;

  return (
    <main className="main">
      <TitleBar
        title="All Categories"
        day={new Date().getDate().toString().padStart(2, "0")}
        year={new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "2-digit",
        })}
      />
      <div className="detail">
        <div className="description">
          {posts.map((post) =>
            <article id={post.id} key={post.id} className="articles">
              <a href={`/category/${post.slug}`}>
                <figure className="articles__post">
                  <figcaption className="articles__post-content">
                    <Suspense fallback={<Spinner size="15px" />}>
                      {!post.featured_media || post.featured_media <= 0 ? <Image
                        width={150}
                        height={150}
                        src={settings.icon}
                        alt=""
                      /> : <FeaturedImage
                        id={post.featured_media}
                        height={150}
                        width={150}
                      />}
                    </Suspense>
                    <div
                      className="articles__title"
                      dangerouslySetInnerHTML={{ __html: post.name }}
                    />
                    <div className="articles__icon">Posts: {post.count}</div>
                  </figcaption>
                </figure>
              </a>
            </article>
          )}
           {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <Adsense id="googleadstwo" slot={settings.squareAd} />}
          <nav
            className="navigation pagination"
            style={{ marginBottom: "30px", marginTop: "5px" }}
          >
            <div className="nav-links">
              {hasPrevPage && (
                <Link href={`/category?page=${page - 1}`} className="prev page-numbers">
                  ← Previous page
                </Link>
              )}
              {hasNextPage && (
                <Link href={`/category?page=${page + 1}`} className="next page-numbers">
                  Next page →
                </Link>
              )}
            </div>
          </nav>
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}
