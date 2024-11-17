import { GetProducts } from "../api/Products";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import El from "../utils/create-element";
import FilterLinks from "./filtered-links";


export default function Productcard() {
  const Element = El({
    element: "div",
    className: "flex justify-between flex-wrap",
  });
  GetProducts().then((products) => {
    products.forEach((product) => {
      const productCard = ProductDisplay(product);
      Element.append(productCard);
    });
  });
  return Element;
}

