"use client";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import TitleBar from "@/components/TitleBar";
import RightSidebar from "@/components/RightSidebar";
import settings from "@/settings.json";

const Search = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!searchQuery) return router.push("/");
        const res = await fetch(
          `${settings.api}/search?search=${searchQuery}&page=${page}`
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
  }, [page, router, searchQuery]);

  function handlePage(page) {
    setPage(page);
  }

  return (
    <>
      <main className="main">
        <TitleBar
          title="Search Results"
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
              {!isLoading && posts.length > 0 && (
                <>
                  {posts.map((post) => (
                    <PostItem key={post.id} post={post} type="search" />
                  ))}
                </>
              )}

              {!isLoading && posts.length === 0 && (
                <p className="not-found__text">
                  Sorry, no posts were found! <br />
                  <a href="/">CLICK HERE FOR LATEST POSTS</a>
                </p>
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
    </>
  );
};

export default Search;
