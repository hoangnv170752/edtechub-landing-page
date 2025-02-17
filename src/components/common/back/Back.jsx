import React from "react";
import { useLocation } from "react-router-dom";
import "./back.css"; // Ensure this file contains the styles

const Back = ({ title }) => {
  const location = useLocation();
  const pageName = location.pathname.split("/")[1] || "Home";

  return (
    <>
      <section className="back">
        <h2 className="breadcrumb">Home / {pageName}</h2>
        <h1 className="title">{title}</h1>
        <p className="about-text">
          <strong>Edtech Hub Uganda</strong> is transforming education
        </p>
        <ul className="about-list">
          <li>✔ Integrating <strong>AI & technology</strong> into classrooms</li>
          <li>✔ Training <strong>youth</strong> with in-demand IT skills</li>
          <li>✔ Providing <strong>affordable internet & devices</strong></li>
          <li>✔ Creating <strong>localized educational content</strong></li>
          <li>✔ Supporting <strong>teachers</strong> with digital solutions</li>
        </ul>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Back;