"use client";
import React from "react";

const Pagination = ({ page, handlePage }) => {
  return (
    <nav
      className="navigation pagination"
      style={{ marginBottom: "40px", marginTop: "20px" }}
    >
      <div className="nav-links">
        {page > 1 && (
          <span
            className="prev page-numbers"
            onClick={() => handlePage(page - 1)}
            style={{ cursor: "pointer" }}
          >
            ← Previous page
          </span>
        )}

        <span
          className="next page-numbers"
          onClick={() => handlePage(page + 1)}
          style={{ cursor: "pointer" }}
        >
          Next page →
        </span>
      </div>
    </nav>
  );
};

export default Pagination;
