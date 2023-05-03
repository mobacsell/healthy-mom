import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Promo } from "./components/Promo";
import { GoodNutrition } from "./components/GoodNutrition";
import { HealthSlider } from "./components/HealthSlider";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Promo />
        <GoodNutrition />
        <HealthSlider />
      </main>
    </div>
  );
}
