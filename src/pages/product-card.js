import { GetProducts, GetProductsId } from "../api/Products";
import { Back } from "../components/Back";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import El from "../utils/create-element";
import FilterLinks from "./filtered-links";

// ====== GEt Producy DAta =========
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
if (productId) {
  GetProductsId(productId)
    .then(product => {

      document.getElementById('product-name').innerText = product.name;
      document.getElementById('product-description').innerText = product.description;
      document.getElementById('product-price').innerText = `$${product.price}`;
      
    })
    .catch(error => {
      console.error('خطا در دریافت اطلاعات محصول:', error);
      document.body.innerHTML = `<h1>خطا: محصول یافت نشد</h1>`;
    });
} else {
  document.body.innerHTML = `<h1>خطا: آیدی محصول موجود نیست</h1>`;
}




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
  children: [Title, LikeIcon],
});
//   ====== Description ========
const DescriptionTitle = El({
  element: "h1",
  innerText: "Description",
  className: "font-bold text-xl",
});

const DescriptionParaph = El({
  element: "p",
  className: "text-sm font-normal",
  innerText:
    "In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorp view more...",
});
const Description = El({
  element: "div",
  className: "px-6 flex flex-col items-start justify-start",
  children: [DescriptionTitle, DescriptionParaph],
});

const Size = (product) => {

}