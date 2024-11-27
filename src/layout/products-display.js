import { GetProducts } from "../api/Products";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import El from "../utils/create-element";
import FilterLinks from "./filtered-links";

const ProductDisplay = (product) => {
  const ProductImg = El({
    element: "div",
    children: [
      Img({
        src: product.images,
        className: "rounded-3xl",
      }),
    ],
    className: "w-[182px] h-[182px] rounded-3xl overflow-hidden",
  });
  const ProductTitle = El({
    element: "p",
    innerText: product.title,
    className: "text-xl text-[#152536] font-bold",
  });
  const ProductPrice = El({
    element: "p",
    innerText: `$ ${product.price}`,
    className: "text-base text-[#152536] font-semibold",
  });

  return Link({
    element: "div",
    children: [ProductImg, ProductTitle, ProductPrice],
    href: `/products/${product.id}`,
    className: `flex flex-col justify-start w-[182px] h-[244px] gap-1 my-3 ${product.title}`,
    id: `${product.id}`,
  });
};

export default function ProductsContainer() {
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
