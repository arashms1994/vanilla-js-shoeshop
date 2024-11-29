import El from "../utils/create-element";
import { Link } from "../components/Link";
import { Img } from "../components/Img";

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
    className: "flex flex-col justify-start w-[182px] h-[244px] gap-1 my-3",
  });
};

export default ProductDisplay;
