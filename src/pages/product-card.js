export let exportedProduct = null;
import { router } from "../routes/Router";
import quantityFunc from "./Product/product-quantity";
import { addToCart } from "../api/users";
import El from "../utils/create-element";
import { GetProductsId } from "../api/Products";
import renderSizes from "./Product/product-size";
import renderColors from "./Product/product-color";
import priceCalc from "./Product/product-price";
import { getColor, getSize } from "./Product/send-product";
import { Link } from "../components/Link";
import { Img } from "../components/Img";

export default async function productCard(productId) {
  if (!productId) {
    const url = window.location.pathname;
    return;
  }

  try {
    const product = await GetProductsId(productId);

    exportedProduct = product;

    document.title = product.title;
    const quantityBox = await quantityFunc();

    //Quantity set

    const quantityTitle = El({
      element: "h3",
      children: "Quantity",
      className: "text-[24px] font-semibold",
    });

    const quantity = El({
      element: "div",
      children: [quantityTitle, quantityBox],
      className: "flex gap-4 items-center mt-[24px]",
    });

    const priceNum = await priceCalc();
    const totalPrice = El({
      element: "p",
      children: "Total price",
      className: "text-[#152536a6] text-[14px]",
    });
    const price = El({
      element: "div",
      children: [totalPrice, priceNum],
      className: "grid",
    });

    const addToCartBtn = El({
      element: "div",
      children: [
        El({
          element: "img",
          src: "/assets/svg/white-cart-icon.svg",
        }),
        El({
          element: "h3",
          children: "Add to Cart",
          className: "text-[20px] font-semibold",
        }),
      ],
      className:
        "px-[25px] py-[10px] bg-black flex justify-center items-center text-white gap-[15px] h-[90%] rounded-[50px] w-[220px] cursor-pointer",
      id: "ad-to-cart",
      eventListener: [
        {
          event: "click",
          callback: () => {
            let userLogin = localStorage.getItem("userId");
            let userLoginTemp = sessionStorage.getItem("userId");
            if (!userLogin || userLoginTemp) {
              router.navigate("/Login");
            } else {
              const cartProduct = {
                ...product,
                qty: document.getElementById("quantity").textContent,
                ttlPrice:
                  product.price *
                  document.getElementById("quantity").textContent,
                selectedColor: getColor(),
                selectedSize: getSize(),
                productId: productId,
                shipping: "Pending",
              };
              addToCart(cartProduct);
              console.log(cartProduct);
            }
          },
        },
      ],
    });

    const cart = El({
      element: "div",
      children: [price, addToCartBtn],
      className: "flex gap-[35px] items-center",
    });

    //Renders the colors on the product page.

    function noSize() {
      if (!selectedSize) {
        console.log("No size selected, using default:", selectedSize);
      }
    }
    function noColor() {
      if (!selectedColor) {
        console.log("No size selected, using default:", selectedColor);
      }
    }
    const { colorElement, selectedColor } = await renderColors(product.color);
    const { sizeElements, selectedSize } = await renderSizes(product.size);
    const colorBox = El({
      element: "div",
      children: colorElement,
      className: "flex gap-[10px] ",
    });
    const color = El({
      element: "div",
      children: [
        El({
          element: "p",
          children: "Colors",
          className: "text-[24px] font-semibold",
        }),
        colorBox,
      ],
      className: "grid gap-[15px]",
    });

    const sizeBox = El({
      element: "div",
      children: sizeElements,
      className: "flex gap-[10px]",
    });

    const size = El({
      element: "div",
      children: [
        El({
          element: "h3",
          children: "Size",
          className: "text-[24px] font-semibold",
        }),
        sizeBox,
      ],
      className: "grid gap-[15px]",
    });
    const options = El({
      element: "div",
      children: [size, color],
      className: "flex mt-[10px] gap-[40px]",
    });
    const span = El({
      element: "span",
      children: "view more..",
      className: "text-[#152536] font-semibold",
    });
    const descriptionText = El({
      element: "p",
      children: [
        `Lorem ipsum dolor sit amet, consectrtur adipiscing elit, sed do ejusmod tempor incididunt ut labore et `,
        span,
      ],
      className: "text-[#152536a6] text-[15px]",
    });
    const descriptionTitle = El({
      element: "h3",
      children: "Description",
      className: "text-[24px] font-semibold",
    });
    const description = El({
      element: "div",
      children: [descriptionTitle, descriptionText],
      className: "grid gap-[10px] ",
    });
    const hr = El({
      element: "hr",
      className: "my-5 mr-4",
    });
    const hr2 = El({
      element: "hr",
      className: "my-3 mr-4",
    });
    const reviews = El({
      element: "p",
      children: "0 (No reviews)",
      className: "text-[16px] text-[#152536]",
    });
    const star = El({
      element: "img",
      src: "/assets/svg/star-icon.svg",
      className: "w-[25px]",
    });
    const rating = El({
      element: "div",
      children: [star, reviews],
      className: "flex gap-4 ml-4 items-center",
    });
    const sold = El({
      element: "div",
      children: `${product.order} sold`,
      className: "bg-slate-200 px-[10px] py-[5px] rounded-[5px]",
    });
    const superDetail = El({
      element: "div",
      children: [sold, rating],
      className: "flex mt-4 gap-[10px]",
    });
    const heart = El({
      element: "img",
      src: "/assets/svg/heart-icon.svg",
      className: "w-[35px]",
      id: "product-img",
    });
    const title = El({
      element: "h1",
      children: product.title,
      className: "font-bold text-[32px] text-[#152536]",
      id: "product-title",
    });
    const header = El({
      element: "div",
      children: [title, heart],
      className: "flex pr-[24px] justify-between mt-[24px]",
    });
    const detail = El({
      element: "section",
      children: [
        header,
        superDetail,
        hr,
        description,
        options,
        quantity,
        hr2,
        cart,
      ],
      className: "grid pl-[24px]",
    });

    const back = El({
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
      className: "m-3 absolute",
    });
    const img = El({
      element: "img",
      src: product.images,
      className: "h-[380px] w-screen",
    });
    const brandPage = El({
      element: "section",
      children: [back, img, detail],
      className: " relative",
    });
    document.body.innerHTML = "";
    document.body.appendChild(brandPage);
  } catch (error) {
    console.error("Failed to fetch product data:", error);
  }
}