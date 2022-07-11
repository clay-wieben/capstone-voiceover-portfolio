import React from "react";
import { Link } from "react-router-dom";

export default function InvalidLink() {
  return (
    <div>
      <h2>We couldn't find the page you're looking for...</h2>
      <Link to="/">Return to Home</Link>
    </div>
  );
}
