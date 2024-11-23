import { GetProducts } from "../api/Products";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import ProductsContainer from "../layout/products-display";
import El from "../utils/create-element";

const Brands = [
  { icon: "/assets/brands-logo/Nike.svg", name: "Nike", href: "/Nike" },
  { icon: "/assets/brands-logo/Adidas.svg", name: "Adidas", href: "/Adidas" },
  { icon: "/assets/brands-logo/Puma.svg", name: "Puma", href: "/Puma" },
  { icon: "/assets/brands-logo/Asics.svg", name: "Asics", href: "/Asics" },
  { icon: "/assets/brands-logo/Reebok.svg", name: "Reebok", href: "/Reebok" },
  {
    icon: "/assets/brands-logo/NewBalance.svg",
    name: "New Ba...",
    href: "/Newbalance",
  },
  {
    icon: "/assets/brands-logo/Converse.svg",
    name: "Converse",
    href: "/Converse",
  },
  { icon: "/assets/brands-logo/More.svg", name: "More", href: "/Products" },
];

//   -------- All Products --------
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
  children: "All Brands",
  className: "font-semibold text-xl text-[#152536]",
});
const Header = El({
  element: "div",
  children: [BackIcon, Title],
  className: "flex gap-3 pl-1 justify-start items-center mb-3",
});

export function allProducts() {
  return El({
    element: "div",
    children: [Header, ProductsContainer()],
    className: "px-6 flex flex-col pt-3",
  });
}

let products= []
GetProducts().then((products) => {
products = products
const brands = products.map((product) => product.brand)
console.log(brands);
})