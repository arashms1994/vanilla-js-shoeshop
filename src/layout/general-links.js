import El from "../utils/create-element";

const mostPopular = El({
  element: "p",
  innerText: "Most Popular",
  className: "font-semibold text-[#152536] text-xl",
  eventListener: [
    {
      event: "click",
      callback: () => {
        console.log("mostPopular");
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
        console.log("seeAll");
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
