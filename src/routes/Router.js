// import Navigo from "navigo";
// import { changePage } from "../utils/change-page";
// import Onboarding from "../pages/Onboarding";
// // import HomePage from "../pages/Home";
// // import ProductPage from "../pages/Login";
// // import Checkout from "../pages/Checkout";
// // import Orders from "../pages/Orders";
// export const router = new Navigo("/");

// router
//   .on("/", () => {
//     changePage(Onboarding);
//   })
//   .on("/products/:id", ({ data }) => {
//     // changePage(HomePage);
//   })
//   .on("/cart", () => {
//     // changePage(Checkout);
//   });

import Navigo from "navigo";
import OnBoardingPage from "../pages/Onboarding";
// import HomePage from "../pages/Home";
import { changePage } from "../utils/change-page";

export const router = new Navigo("/");

router
.on("/", () => {
changePage(OnBoardingPage);
})
.on("/Home", () => {
// changePage(HomePage); // Set the HomePage component for the "/home" route
});