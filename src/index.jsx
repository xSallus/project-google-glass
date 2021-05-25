import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { HeaderProvider } from "./contexts/HeaderContext";

import "./styles/globals.css";

ReactDOM.render(
  <HeaderProvider>
    <React.StrictMode>
      <Header />
      <App />
      <Footer />
    </React.StrictMode>
  </HeaderProvider>,
  document.getElementById("root")
);
