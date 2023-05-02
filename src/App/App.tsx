import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Promo } from "./components/Promo";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Promo />
      </main>
    </div>
  );
}
