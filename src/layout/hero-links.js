import El from "../utils/create-element";
import { Button } from "../components/button";
import { Img } from "../components/Img";
import { router } from "../routes/Router";

const Brands = [
  { icon: "/assets/brands-logo/Nike.svg", name: "Nike", href: "/nike" },
  { icon: "/assets/brands-logo/Adidas.svg", name: "Adidas", href: "/adidas" },
  { icon: "/assets/brands-logo/Puma.svg", name: "Puma", href: "/puma" },
  { icon: "/assets/brands-logo/Asics.svg", name: "Asics", href: "/asics" },
  { icon: "/assets/brands-logo/Reebok.svg", name: "Reebok", href: "/reebok" },
  {
    icon: "/assets/brands-logo/NewBalance.svg",
    name: "New Ba...",
    href: "/newbalance",
  },
  {
    icon: "/assets/brands-logo/Converse.svg",
    name: "Converse",
    href: "/converse",
  },
  { icon: "/assets/brands-logo/More.svg", name: "More", href: "/Products" },
];

const createBrandLink = (brand) => {
  const brandLogo = El({
    element: "div",
    className: "bg-[#ECECEC] rounded-full w-[60px] h-[60px] overflow-hidden",
    children: [
      Img({
        src: brand.icon,
        className: "w-8 h-5 mt-5",
        eventListener: [
          {
            event: "click",
            callback: () => router.navigate(`/Home${brand.href}`),
          },
        ],
      }),
    ],
  });
  const brandName = El({
    element: "p",
    innerText: brand.name,
    className: "font-semibold text-sm text-[#152536] mt-1",
  });
  return El({
    element: "div",
    children: [brandLogo, brandName],
    className:
      "w-[60px] h-[80px]flex flex-col items-center justify-center py-1 text-center gap-3",
  });
};

// console.log(BrandsLinks);
export default function HeroLinks() {
  const BrandsLinks = Brands.map(createBrandLink);
  return El({
    element: "div",
    className: "px-2 py-4 flex flex-wrap gap-10",
    children: BrandsLinks,
  });
}
