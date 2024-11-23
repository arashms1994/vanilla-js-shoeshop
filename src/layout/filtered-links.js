import { GetProducts } from "../api/Products";
import { router } from "../routes/Router";
import El from "../utils/create-element";

const Brands = [
  {
    icon: "/assets/brands-logo/Nike.svg",
    name: "Nike",
    href: "nike",
  },
  {
    icon: "/assets/brands-logo/Adidas.svg",
    name: "Adidas",
    href: "adidas",
  },
  {
    icon: "/assets/brands-logo/Puma.svg",
    name: "Puma",
    href: "puma",
  },
  {
    icon: "/assets/brands-logo/Asics.svg",
    name: "Asics",
    href: "asics",
  },
  {
    icon: "/assets/brands-logo/Reebok.svg",
    name: "Reebok",
    href: "reebok",
  },
  {
    icon: "/assets/brands-logo/NewBalance.svg",
    name: "New Ba...",
    href: "newbalance",
  },
  {
    icon: "/assets/brands-logo/Converse.svg",
    name: "Converse",
    href: "converse",
  },
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
        filterProductsByBrand("All");
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
          filterProductsByBrand(brand.href);
          console.log(brand.href);
        },
      },
    ],
  });

async function filterProductsByBrand(brand) {

  const Products = await GetProducts();

  Products.forEach((product) => {
    const productElement = document.querySelector(`#product-${product.id}`);
    if (brand === "All" || product.brand === brand) {
    productElement.classList.remove("hidden");
    } else {
    productElement.classList.add("hidden");
    }
  });
}


export default function FilterLinks() {
  const BrandsFilter = Brands.map(createBrandFilter);
  return El({
    element: "div",
    children: [All, ...BrandsFilter],
    className: "flex justify-between items-center gap-3 overflow-scroll mb-3",
  });
}

