// src/pages/_app.jsx
import "../styles/globals.css"; // Make sure this path is correct
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
