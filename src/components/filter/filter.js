import { GetProducts } from "../../api/Products";
import El from "../../utils/create-element";
import { Img } from "../Img";
import { Link } from "../Link";

export default function filterBrands(brandName) {
  const BackIcon = El({
    element: "div",
    children: [
      Link({
        children: [
          Img({
            src: "/assets/svg/back-icon.svg",
          }),
        ],
        href: "/Home",
      }),
    ],
    className: "w-6 h-6",
  });

  const Title = El({
    element: "h1",
    children: brandName,
    className: "font-semibold text-xl text-[#152536]",
  });
  const Header = El({
    element: "div",
    children: [BackIcon, Title],
    className: "flex justify-start items-center gap-3",
  });

  GetProducts()
    .then((products) => {
      const brandProduct =
        brandName === "all"
          ? products
          : products.filter(
              (product) => product.brand && product.brand === brandName
            );
      const productElements = brandProduct.map((product) =>
        El({
          element: "div",
          children: [
            El({
              element: "div",
              className: "rounded-3xl",
              children: [
                Img({
                  src: product.images,
                  className: "rounded-3xl",
                }),
              ],
              className:
                "w-[182px] h-[182px] justify-center items-center rounded-3xl",
            }),
            El({
              element: "h3",
              children: product.title,
              className: "font-bold text-[20px]",
            }),
            El({
              element: "p",
              children: `$ ${product.price}`,
              className: "font-semibold text[16px] mb-4",
            }),
          ],
          className: "flex flex-col justify-start gap-1",
        })
      );

      const ProductContainer = El({
        element: "div",
        children: productElements,
        className:
          "flex flex-wrap justify-around items-center pt-5 gap-3 w-full",
      });

      const container = El({
        element: "div",
        children: [Header, ProductContainer],
        className: "px-6 pt-6 w-full",
      });

      const appContainer = document.getElementById("app");
      appContainer.innerHTML = "";
      appContainer.appendChild(container);
    })
    .catch((error) => {
      console.error("Failed to fetch products:", error);
      const errorMessage = El({
        element: "div",
        children: "Failed to load products. Please try again later.",
        className: "text-red-500",
      });

      document.getElementById("app").innerHTML = "";
      document.getElementById("app").appendChild(errorMessage);
    });
}
