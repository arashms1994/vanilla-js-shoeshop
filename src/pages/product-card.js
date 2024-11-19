import { GetProducts } from "../api/Products";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import El from "../utils/create-element";
import FilterLinks from "./filtered-links";

//   ====== back and Img ========
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
  className: "absolute left-6 top-3 w-6 h-6",
});

const image = El({
  element: "div",
  className: "h-96 w-screen",
  children: [
    Img({
      src: product.images,
    }),
  ],
});

//   ====== Header ========
const Title = El({
  element: "h1",
  innerText: product.title,
  className: "font-bold text-[32px]",
});

const LikeIcon = El({
  element: "div",
  className: "w-5 h-5",
  children: [
    Img({
      src: "/assets/svg/heart-icon.svg",
    }),
  ],
});

const Header = El({
    element: "div",
    className: "flex items-center justify-between px-6",
    children: [Title, LikeIcon]
})
//   ====== Description ========
const DescriptionTitle = El({
    element: "h1",
    innerText: "Description",
    className: "font-bold text-xl",
  });

  const DescriptionParaph = El({
    element: "p",
    className: "text-sm font-normal",
    innerText: "In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorp view more..."
  })
const Description = El({
    element: "div",
    className: "px-6 flex flex-col items-start justify-start",
    children: [DescriptionTitle, DescriptionParaph]
})

// export default function Productcard() {
//   const Element = El({
//     element: "div",
//     className: "flex justify-between flex-wrap",
//   });
//   GetProducts().then((products) => {
//     products.forEach((product) => {
//       const productCard = ProductDisplay(product);
//       Element.append(productCard);
//     });
//   });
//   return Element;
// }
