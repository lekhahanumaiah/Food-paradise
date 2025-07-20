import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ maxWidth: "600px", padding: "1rem" }}>
        <img
          src="/notFound.svg"
          alt="not found"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1rem",
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "500",
          }}
        >
          Back to Home
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
