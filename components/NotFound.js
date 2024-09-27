"use client";
import RightSidebar from "@/components/RightSidebar";
import TitleBar from "@/components/TitleBar";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="main">
      <TitleBar
        title="Page not found"
        day={new Date().getDate().toString().padStart(2, "0")}
        year={new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "2-digit",
        })}
      />
      <div className="detail">
        <div className="description">
          <section class="section">
            <div class="section__content" style={{ textAlign: "center" }}>
              <div>
                <h3 class="fw-bold mb-4 text-center">
                  The link you followed is broken. Page not found!
                </h3>
                <a href="/" class="color-gold btn btn--primary">
                  Go to homepage
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
