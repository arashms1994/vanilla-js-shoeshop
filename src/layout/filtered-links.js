import { router } from "../routes/Router";
import El from "../utils/create-element";

const Brands = [
  { icon: "/assets/brands-logo/Nike.svg", name: "Nike", href: "/Nike" },
  { icon: "/assets/brands-logo/Adidas.svg", name: "Adidas", href: "/Adidas" },
  { icon: "/assets/brands-logo/Puma.svg", name: "Puma", href: "/Puma" },
  { icon: "/assets/brands-logo/Asics.svg", name: "Asics", href: "/Asics" },
  { icon: "/assets/brands-logo/Reebok.svg", name: "Reebok", href: "/Reebok" },
  { icon: "/assets/brands-logo/NewBalance.svg", name: "New Ba...", href: "/Newbalance" },
  { icon: "/assets/brands-logo/Converse.svg", name: "Converse", href: "/Converse" },
  { icon: "/assets/brands-logo/More.svg", name: "More", href: "/More" },
];

const All = El({
  element: "div",
  innerText: "All",
  className:
    "font-semibold text-white bg-[#343A40] text-base rounded-3xl px-5 py-2",
  eventListener: [
    {
      event: "click",
      callback: () => {
        router.navigate("/All");
      },
    },
  ],
});
const createBrandFilter = (brand) =>
  El({
    element: "div",
    innerText: brand.name,
    className:
      "font-semibold border-[#343A40] border-[2px] text-[#343A40] text-base rounded-3xl px-5 py-2",
    eventListener: [
      {
        event: "click",
        callback: () => {
          router.navigate(brand.href);
        },
      },
    ],
  });

export default function FilterLinks() {
  const BrandsFilter = Brands.map(createBrandFilter);
  return El({
    element: "div",
    children: [All, ...BrandsFilter],
    className: "flex justify-between items-center gap-3 overflow-scroll mb-3",
  });
}
