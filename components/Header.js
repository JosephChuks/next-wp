"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import settings from "@/settings.json";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      router.push(`/search/?q=${searchQuery}`);
    }
  }, [searchQuery, router]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchQuery(formData.get("s"));
  };

  return (
    <header className="header">
      <div className="header-items">
        <a href="/">
          <Image
            src={settings.logo}
            alt={settings.seo.title}
            className="logo"
            width={300}
            height={300}
            priority
          />
        </a>
        <div
          className="gtranslate_wrapper"
          style={{ marginRight: "15px" }}
        ></div>
        <form onSubmit={handleSearch} className="search">
          <input
            type="text"
            inputMode="predictOn"
            name="s"
            className="search__input"
            placeholder="Enter Search Keyword"
          />
          <button type="submit" className="search__button">
            <FaSearchPlus className="search__icon" />
          </button>
        </form>
      </div>
      <div className="menu-mobile-container">
        <ul id="menu-mobile" className="mobile-nav">
        {settings.mobileMenu.map(menu => <>
            <li>
            <a href={menu.url} aria-current="page">
              {menu.label}
            </a>
          </li>
          </>)}    
        </ul>
      </div>
    </header>
  );
};

export default Header;
