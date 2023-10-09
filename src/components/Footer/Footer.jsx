import React from "react";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`bg-light text-center text-lg-start ${Styles.footer}`}>
      {/* Copyright */}
      <div className="text-center p-3">
        © 2023 Copyright:
        <a className="text-dark">React Router v6.16</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
