import { router } from "../routes/Router";
import El from "../utils/create-element";

export function Img({ src, className, ...rest }) {
    return El({
      element: "img",
      className: "w-full h-full" +
      className,
      src,
      ...rest,
    });
  }