"use client";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import settings from "@/settings.json";


const Posts = ({ sidebar = null }) => {
  const [page, setPage] = useState(Math.floor(Math.random() * 9) + 1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${settings.api}/posts?page=${page}`
        );
        const data = await res.json();

        setPosts(data);
      } catch (e) {
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  function handlePage(page) {
    setPage(page);
  }

  if (!isLoading && posts.length === 0)
    return (
      <div className="not-found">
        <p className="not-found__text">Sorry, no posts were found!</p>
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {isLoading && <Spinner loading={true} size="30px" />}
        {!isLoading && posts.length > 0 && (
          <>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} type={sidebar ? 'sidebar' : 'posts'} />
            ))}
          </>
        )}
      </div>
      {!isLoading && !sidebar && <div style={{ marginTop: "auto" }}>
        <Pagination page={page} handlePage={handlePage} />
      </div>}

    </>
  );
};

export default Posts;
