"use client";
import a from "next/link";
import FeaturedImage from "./FeaturedImage";
import { Suspense } from "react";
import Spinner from "./Spinner";
import Image from "next/image";
import settings from "@/settings.json";


const PostItem = ({ post, type = "posts" }) => {
  if (type === "search") {
    const url = post.url.replace(window.location.href, "");
    return (
      <article id={post.id} className="articles">
        <a href={`/${url}`}>
          <figure className="articles__post">
            <figcaption className="articles__post-content">
              <div
                className="articles__title"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <div className="articles__icon">&gt;</div>
            </figcaption>
          </figure>
        </a>
      </article>
    );
  }

  if (type === "categories")
    return (
      <article id={post.id} className="articles">
        <a href={`/category/${post.slug}`}>
          <figure className="articles__post">
            <figcaption className="articles__post-content">
              <Image
                width={150}
                height={150}
                src={settings.icon}
                className="attachment-thumbnail size-thumbnail wp-post-image"
                alt=""
              />
              <div
                className="articles__title"
                dangerouslySetInnerHTML={{ __html: post.name }}
              />
              <div className="articles__icon">Posts: {post.count}</div>
            </figcaption>
          </figure>
        </a>
      </article>
    );

    if (type === "sidebar")
      return (
        <article id={post.id} className="articles">
          <a href={`/${post.slug}`}>
            <figure className="articles__post">
              <figcaption className="articles__post-content">
                <div
                  className="articles__title"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </figcaption>
            </figure>
          </a>
        </article>
      );

  if (type === "posts")
    return (
      <article id={post.id} className="articles">
        <a href={`/${post.slug}`}>
          <figure className="articles__post">
            <figcaption className="articles__post-content">
              <Suspense fallback={<Spinner size="15px" />}>
                {!post.featured_media || post.featured_media <= 0 ? <Image
                  width={150}
                  height={150}
                  src={settings.icon}
                  className="attachment-thumbnail size-thumbnail wp-post-image"
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
              <div className="articles__icon">&gt;</div>
            </figcaption>
          </figure>
        </a>
      </article>
    );
};

export default PostItem;
