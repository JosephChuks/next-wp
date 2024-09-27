"use client";
import TitleBar from "./TitleBar";
import RightSidebar from "./RightSidebar";
import Posts from "./Posts";

const Home = () => {
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
          <Posts />
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </main>
  );
};

export default Home;
