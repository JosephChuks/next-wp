"use client";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import RightSidebar from "@/components/RightSidebar";
import TitleBar from "@/components/TitleBar";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import settings from "@/settings.json";

const Categories = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${settings.api}/categories?page=${page}`
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

  return (
    <main className="main">
      <TitleBar
        title="Categories"
        day={new Date().getDate().toString().padStart(2, "0")}
        year={new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "2-digit",
        })}
      />
      <div className="detail">
        <div className="description">
          {!isLoading && posts.length === 0 && (
            <div className="not-found">
              <p className="not-found__text">
                Sorry, no categories were found!
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoading && <Spinner loading={true} size="30px" />}
            {!isLoading && posts.length > 0 && (
              <>
                {posts.map((post) => (
                  <PostItem key={post.id} post={post} type="categories" />
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
    </main>
  );
};

export default Categories;
