import Navigo from "navigo";
import changePage from "../utils/change-page";
import Onboarding from "../pages/Onboarding"
import HomePage from "../pages/Home";
import ProductPage from "../pages/Login";
import CartPage from "../pages/Checkout";
import CartPage from "../pages/Orders";
export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(Onboarding);
  })
  .on("/products/:id", ({ data }) => {
    changePage(HomePage);
  })
  .on("/cart", () => {
    changePage(CartPage);
  });