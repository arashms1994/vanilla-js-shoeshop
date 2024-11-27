import { Img } from "../components/Img";
import { Input } from "../components/Input";
import El from "../utils/create-element";

export function SearchContainer() {
  const SearchIcon = El({
    element: "div",
    children: [
      Img({
        src: "/assets/svg/search-icon.svg",
      }),
    ],
    className: "w-5 h-5",
  });
  const SearchInput = Input({
    placeholder: "Search",
    type: "search",
    id: "search",
    className: "w-80 h-9",
  });
  const Result = El({
    element: "div",
    id: "result",
    className: "hidden h-full w-full z-50",

  })
  return El({
    element: "div",
    children: [SearchIcon, SearchInput],
    className: "flex justify-start items-center px-2 bg-slate-200 rounded-md",
  });
}
