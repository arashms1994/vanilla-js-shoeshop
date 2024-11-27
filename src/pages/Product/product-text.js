import { Img } from "../../components/Img";
import El from "../../utils/create-element";

const ProductTitle = El({
    element: "h1",
    innerText: product.title,
    className:"font-bold text-3xl"
})

const ProductHeartIcon = El({
element: "div",
children: [
    Img({
        src: "/assets/svg/heart-icon.svg"
    })
],
className: "w-10 h-10"
})

const ProductHeader = El({
        element: "div",
        children: [ProductTitle, ProductHeartIcon],
        className: "flex justify-between items-center border-b-2 border-gray-400 pt-5 mb-4"
})

const ProductDes = El({
    element: "h1",
    innerText: product.description,
    className:"font-normal text-base text-[#68717A]"
})

export function ProductText() {
El({
    element: "div",
    children: [ProductHeader, ProductDes],
    className: "flex flex-col"
})
}