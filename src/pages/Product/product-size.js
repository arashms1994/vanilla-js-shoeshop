import El from "../../utils/create-element";

export function ProductSizes() {
  El({
    element: "div",
    className: "flex gap-2 mt-2",
    children: product.sizes.map((size) =>
      El({
        element: "button",
        innerText: size,
        className:
          "border border-gray-300 rounded px-2 py-1 text-sm hover:{bg-black-200 text-white}",
      })
    ),
  });
  return element
}
