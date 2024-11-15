import El from "../utils/create-element";

export function Button({ text, className, ...rest }) {
    return El({
      element: "button",
      innerText: text,
      className:
        "rounded-3xl text-center" +
        className,
      ...rest,
    });
  }