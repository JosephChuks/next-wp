"use client";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useParams } from "next/navigation";
import TitleBar from "./TitleBar";
import RightSidebar from "./RightSidebar";
import settings from "@/settings.json";

const Category = () => {
  const params = useParams();

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${settings.api}/categories?slug=${params.slug}`
        );
        const data = await res.json();

        const getposts = await fetch(
          `${settings.api}/posts?categories=${data.at(0).id}`
        );
        const postdata = await getposts.json();

        setPosts(postdata);
      } catch (e) {
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page, params.slug]);

  function handlePage(page) {
    setPage(page);
  }

  return (
    <>
      <TitleBar
        title={params.slug.toUpperCase()}
        day={new Date().getDate().toString().padStart(2, "0")}
        year={new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "2-digit",
        })}
      />
      <div className="detail">
        <div className="description">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoading && <Spinner loading={true} size="30px" />}
            {!isLoading && posts.length === 0 && (
              <div className="not-found">
                <p className="not-found__text">
                  Unable to get posts. Please refresh page
                </p>
              </div>
            )}
            {!isLoading && posts.length > 0 && (
              <>
                {posts.map((post) => (
                  <PostItem key={post.id} post={post} />
                ))}
              </>
            )}
          </div>
          <div style={{ marginTop: "auto" }}>
            <Pagination page={page} handlePage={handlePage} />
          </div>
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Category;
