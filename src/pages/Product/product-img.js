import { Img } from "../../components/Img";
import El from "../../utils/create-element";

export function ProductImg() {
  El({
    element: "div",
    children: [
      Img({
        src: product.image,
      }),
    ],
    className: "w-full h-96",
  });
}
