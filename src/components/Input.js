import El from "../utils/create-element";

export function Input({ text, className, type, ...rest }) {
    return El({
      element: "Input",
      type,
      className:
        "rounded-md py-2 px-3 text-[#BAB8BC] bg-slate-200 w-full h-full" +
        className,
      ...rest,
    });
  }
