import { Img } from "../components/Img";
import { Input } from "../components/Input";
import { SearchContainer } from "/src/layout/search";
import { GeneralLinks } from "../layout/general-links";
import El from "../utils/create-element";
import Footer from "/src/layout/footer";
import Header from "/src/layout/header";
import HeroLinks from "/src/layout/hero-links";
import FilterLinks from "../layout/filtered-links";
import ProductsContainer from "/src/layout/products-display";

export default function homePage() {
  return El({
    element: "div",
    children: [
      Header(),
      SearchContainer(),
      HeroLinks(),
      GeneralLinks(),
      FilterLinks(),
      ProductsContainer(),
      Footer(),
    ],
    className: "px-6 flex flex-col",
  });
}
