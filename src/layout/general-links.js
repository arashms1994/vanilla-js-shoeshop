import { router } from "../routes/Router";
import El from "../utils/create-element";

const mostPopular = El({
  element: "p",
  innerText: "Most Popular",
  className: "font-semibold text-[#152536] text-xl",
  id: "mostPopular",
  eventListener: [
    {
      event: "click",
      callback: () => {
        router.navigate("/Popular")
      },
    },
  ],
});
const seeAll = El({
  element: "p",
  innerText: "See All",
  className: "font-semibold text-[#152536] text-base",
  eventListener: [
    {
      event: "click",
      callback: () => {
        router.navigate("/Products");
      },
    },
  ],
});

export function GeneralLinks() {
  return El({
    element: "div",
    className: "flex items-center py-4 justify-between",
    children: [mostPopular, seeAll],
  });
}
