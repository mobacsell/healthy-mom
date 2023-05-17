import { Header } from "./components/Header";
import { Promo } from "./components/Promo";
import { GoodNutrition } from "./components/GoodNutrition";
import { HealthSlider } from "./components/HealthSlider";
import { Advantages } from "./components/Advantages";
import { Instagram } from "./components/Instagram";
import { OrderForm } from "./components/OrderForm";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <GoodNutrition />
        <HealthSlider />
        <Advantages />
        <Instagram />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
