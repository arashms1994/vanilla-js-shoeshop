import { Img } from "../components/Img";
import { Link } from "../components/Link";
import ProductsContainer from "../layout/products-display";
import { router } from "../routes/Router"
import El from "../utils/create-element"

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
    children: "All",
    className: "font-semibold text-xl text-[#152536]"
  })
  const Header = El({
    element: "div",
    children: [BackIcon, Title],
    className: "flex gap-3 pl-1 justify-start items-center mb-3"
  })


export function products(){
    return El({
        element: "div",
        children:[Header, ProductsContainer()],
        className: "px-6 flex flex-col pt-3"
    })
}