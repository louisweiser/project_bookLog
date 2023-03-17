import "@/styles/globals.css";
import { MyProvider } from "../contexts/myContext.js";

import React from "react";
import App from "next/app";

/* export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
} */

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    );
  }
}

MyApp.layout = "previous";
