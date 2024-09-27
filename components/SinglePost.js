"use client";
import { useEffect, useState } from "react";
import TitleBar from "./TitleBar";
import RightSidebar from "./RightSidebar";
import Image from "next/image";
import ShareButton from "./ShareButtons";
import Spinner from "./Spinner";
import AdSlot from "./AdSlot";
import { timeAgo } from "./timeAgo";
import settings from "@/settings.json";

const SinglePost = ({ data, related, slug }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentPage, setCommentPage] = useState(1);
  const [postDate, setPostDate] = useState(null);

  const post = data.at(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (post) {
          const res = await fetch(
            `${settings.api}/comments?post=${post.id}&page=${commentPage}`
          );
          const data = await res.json();

          const formattedData = data.map((comment) => ({
            ...comment,
            date: timeAgo(comment.date_gmt),
          }));

          setComments(formattedData);
          setPostDate(timeAgo(post.date_gmt));
        }
      } catch (e) {
        setComments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [commentPage, post]);

  if (!data || !related || !slug) {
    <div className="detail">
      <div className="description">
        <div className="description__article">
          <Spinner />
        </div>
      </div>
    </div>;
  }

  return (
    <>
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
                Published <span className="color-primary">{postDate}</span> By{" "}
                <span className="color-primary">
                  Admin
                </span>{" "}
              </div>
              <div className="overview__socials">
                <ShareButton
                  title={post.title.rendered}
                  url={`${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`}
                />
              </div>
            </div>
            <div id={post.id} className="description__article-body">
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                className="entry-content"
              />
              {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <AdSlot id="adsbygooglebannertwo" slot={settings.adSlotTwo} />}
              <div className="entry-content">
                <div className="overview__socials mt3">
                  <p>Click any of the icons to share this post: </p>&nbsp;
                  <ShareButton
                    title={post.title.rendered}
                    url={`${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`}
                  />
                </div>
              </div>
            </div>

            <div className="description__post-nav">
              <a href="/" className="post-nav__link prev">
                &larr; Previous Post
              </a>
              <a href="/" className="post-nav__link next">
                Next Post &rarr;
              </a>
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

          {settings.comments.show && comments.length > 0 && <div id="comments" className="description__comments">
            <div className="right-sidebar__title"> Comments</div>
            {isLoading ? (
              <>
                <div className="description__article">
                  <Spinner />
                </div>
              </>
            ) : (
              <ol className="comment-list">
                {comments.map((comment) => (
                  <li
                    className="comment even thread-even depth-1"
                    id={`comment-${comment.id}`}
                    key={comment.id}
                  >
                    <div
                      id={`div-comment-${comment.id}`}
                      className="comment-body"
                    >
                      <div className="comment-author vcard">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                          }}
                        >
                          <Image
                            alt="avatar"
                            src={comment.author_avatar_urls["48"]}
                            width={150}
                            height={150}
                            className="avatar avatar-42 photo"
                            style={{
                              width: "42px",
                              height: "42px",
                            }}
                          />
                          <cite className="fn">{comment.author_name}:</cite>
                        </div>
                        <span>{comment.date}</span>
                      </div>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: comment.content.rendered,
                        }}
                        className="entry-content"
                      />
                    </div>
                  </li>
                ))}
              </ol>
            )}

            <nav
              className="navigation pagination"
              style={{ marginBottom: "40px", marginTop: "20px" }}
            >
              <div className="nav-links">
                {commentPage > 1 && (
                  <span
                    className="prev page-numbers"
                    onClick={() => setCommentPage(commentPage - 1)}
                    style={{ cursor: "pointer" }}
                  >
                    &larr; Newer Comments
                  </span>
                )}

                <span
                  className="next page-numbers"
                  onClick={() => setCommentPage(commentPage + 1)}
                  style={{ cursor: "pointer" }}
                >
                  Older Comments &rarr;
                </span>
              </div>
            </nav>
          </div>}
          {settings.comments.post &&
            <div id="respond" className="comment-respond">
              <div className="right-sidebar__title">
                Do you want to post a comment?
              </div>
              <a
                href={`${post.link}/#commentform`}
                className="btn btn--primary submit"
                target="_blank"
              >
                Post Comment →
              </a>
            </div>
          }
          <div className="mt3">&nbsp;</div>
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default SinglePost;
