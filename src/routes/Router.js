import { changePage } from "../utils/change-page";
import Navigo from "navigo";
import onBoarding from "../pages/onBoarding";
import slide2 from "../pages/slide2";
import slide3 from "../pages/slide3";
import login from "../pages/Login";
import home from "/src/pages/home";

export const router = new Navigo("/");

router
  .on("/", () => {
    changePage(onBoarding);
  })
  .on("/Slide2", () => {
    changePage(slide2);
  })
  .on("/Slide3", () => {
    changePage(slide3);
  })
  .on("/Login", () => {
    changePage(login);
  })
  .on("/Home", () => {
    changePage(home);
  })
  .on("/Products/:brand", (params) => {
    changePage(productsBrand, params);
  })
  .on("/Products/:brand/:id", (params) => {
    changePage(productDetail, params);
  })
  .on("/Cart", () => {
    changePage(cart);
  })
  .on("/Orders", () => {
    changePage(orders);
  })
  .on("/Wallet", () => {
    changePage(wallet);
  })
  .on("/Profile", () => {
    changePage(profile);
  });
