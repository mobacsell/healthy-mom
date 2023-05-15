import { Header } from "./components/Header";
import { Promo } from "./components/Promo";
import { GoodNutrition } from "./components/GoodNutrition";
import { HealthSlider } from "./components/HealthSlider";
import { Advantages } from "./components/Advantages";
import { Instagram } from "./components/Instagram";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Promo />
        <GoodNutrition />
        <HealthSlider />
        <Advantages />
        <Instagram />
      </main>
    </div>
  );
}
