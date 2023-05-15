import { Header } from "./components/Header";
import { Promo } from "./components/Promo";
import { GoodNutrition } from "./components/GoodNutrition";
import { HealthSlider } from "./components/HealthSlider";
import { Advantages } from "./components/Advantages";
import { Instagram } from "./components/Instagram";
import { OrderForm } from "./components/OrderForm";

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
        <OrderForm />
      </main>
    </div>
  );
}
