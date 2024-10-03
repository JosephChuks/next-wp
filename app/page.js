import RightSidebar from '@/components/RightSidebar';
import Link from 'next/link';
import settings from '@/settings';
import TitleBar from '@/components/TitleBar';
import FeaturedImage from '@/components/FeaturedImage';
import Spinner from '@/components/Spinner';
import { Suspense } from 'react';
import Image from 'next/image';
import Adsense from '@/components/Adsense';

function randomPosts(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default async function HomePage({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const res = await fetch(`${settings.api}/posts?page=${page}`);

    const data = await res.json();
    const posts = randomPosts(data);
    const hasNextPage = posts.length > 0;
    const hasPrevPage = page > 1;

    return (
      <main className="main">
        <TitleBar
          title="Latest Posts"
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
                    <a href={`/${post.slug}`}>
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
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
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
                      <Link href={`/?page=${page - 1}`} className="prev page-numbers">
                        ← Previous page
                      </Link>
                    )}
                    {hasNextPage && (
                      <Link href={`/?page=${page + 1}`} className="next page-numbers">
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
