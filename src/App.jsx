import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="pepperoni, cheese"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="MeatLovers"
        description="sausage, pepperoni, ham, cheese"
        image={"/public/pizzas/big_meat.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="pineapple, ham"
        image={"/public/pizzas/hawaiian.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
