import El from "../../utils/create-element";

export function ProductColors() {
  // bg-rose-700 bg-emerald-700 bg-red-700 bg-gray-700 bg-teal-700
  El({
    element: "div",
    className: "flex gap-2 mt-2",
    children: product.colors.map((color) =>
      El({
        element: "div",
        className: `w-6 h-6 rounded-full border border-gray-300 bg-${color}-700`,
      })
    ),
  });
}
