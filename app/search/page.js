import RightSidebar from '@/components/RightSidebar';
import Link from 'next/link';
import settings from '@/settings';
import TitleBar from '@/components/TitleBar';
import Adsense from '@/components/Adsense';

export const metadata = {
  title: `Search Results | ${settings.seo.title}`,
  canonical: `/search`,

  openGraph: {
    url: `/search`,
    title: `Search Results | ${settings.seo.title}`,
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


export default async function Search({ searchParams }) {

  const page = parseInt(searchParams.page || '1', 10);
  const query = searchParams.q;

  metadata.title = `${query ||
    settings.seo.title} | ${settings.seo.title
    }`;
  metadata.openGraph.title = `${query} | ${settings.seo.title
    }`;
  metadata.description = `Search results: ${query || settings.seo.name} archive`;
  metadata.openGraph.description = `Search results: ${query || settings.seo.name} archive`;
  metadata.openGraph.url = `/search/?q=${query}`;
  metadata.canonical = `/search/?q=${query}`;

  const res = await fetch(`${settings.api}/search?search=${query}&page=${page}`);
  const posts = await res.json();
  const hasNextPage = posts.length > 0;
  const hasPrevPage = page > 1;

  console.log(posts);

  return (
    <main className="main">
      <TitleBar
        title={`Search results: ${query}`}
        day={new Date().getDate().toString().padStart(2, "0")}
        year={new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "2-digit",
        })}
      />
      <div className="detail">
        <div className="description">
          {posts.length > 0 ?
            <>
              {posts.map((post) =>
                <article id={post.id} key={post.id} className="articles">
                  <a href={`/${new URL(post.url).pathname.replace(/^\/|\/$/g, '')}`}>
                    <figure className="articles__post">
                      <figcaption className="articles__post-content">
                        <div
                          className="articles__title"
                          dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                      </figcaption>
                    </figure>
                  </a>
                </article>
              )}
              <nav
                className="navigation pagination"
                style={{ marginBottom: "30px", marginTop: "5px" }}
              >
                <div className="nav-links">
                  {hasPrevPage && (
                    <Link href={`/search/?q=${query}/?page=${page - 1}`} className="prev page-numbers">
                      ← Previous page
                    </Link>
                  )}
                  {hasNextPage && (
                    <Link href={`/search/?q=${query}/?page=${page + 1}`} className="next page-numbers">
                      Next page →
                    </Link>
                  )}
                </div>
              </nav>
            </>
            :
            <article className="articles">
              <section class="section">
                <div class="section__content" style={{ textAlign: "center" }}>
                  <div>
                    <h3 class="fw-bold mb-4 text-center">
                      No Post Found
                    </h3>
                    <a href="/" class="btn btn--primary text-white">
                      Go to homepage
                    </a>
                  </div>
                </div>
              </section>
            </article>}
          {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <Adsense id="googleadstwo" slot={settings.squareAd} />}
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}

