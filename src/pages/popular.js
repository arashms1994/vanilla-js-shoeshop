import { GetProducts } from "../api/Products";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import FilterLinks from "../layout/filtered-links";
import El from "../utils/create-element";
import ProductsContainer from "../layout/products-display";

//   -------- Header --------
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
  children: "Most Popular",
  className: "font-semibold text-xl text-[#152536]",
});
const Header = El({
  element: "div",
  children: [BackIcon, Title],
  className: "flex gap-3 pl-1 justify-start items-center mb-3",
});

// ==== Filter ======
function FilterPopular() {
  const filterContainer = El({
    element: "div",
  });
  
  GetProducts()
    .then((data) => data.filter((product) => product.popular))
    .then((data) => filterContainer.append(ProductsContainer(data)));
  return filterContainer;
}

export default function popular() {
  return El({
    element: "div",
    className: "px-6 flex flex-col pt-4",
    children: [Header, FilterLinks(), FilterPopular()],
  });
}
