"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import { timeAgo } from "./timeAgo";
import settings from "@/settings.json";


const Comments = ({ post }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [commentPage, setCommentPage] = useState(1);

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
                }
            } catch (e) {
                setComments([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchComments();
    }, [post, commentPage]);

    if (!post) {
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
            {settings.comments.show && comments.length > 0 && 
            <div id="comments" className="description__comments">
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
                                                src={settings.icon}
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

        </>
    );
};

export default Comments;
