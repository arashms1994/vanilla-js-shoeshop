import { Button } from "../components/button";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import El from "../utils/create-element";

const SlideImg = El({
  element: "div",
  children: [
    Img({
      src: "/assets/img/onboarding-bg-3.jpg",
    }),
  ],
  className: "w-[430px] h-[657px]",
});
const SlideTitle = El({
  element: "h1",
  innerText: "Let’s fulfill your fashion needs with shoearight now!",
  className: "text-[32px] text-black font-semibold mb-16",
});
const SlideIndicator = El({
  element: "div",
  children: [
    El({
      element: "div",
      className: "w-8 h-1 bg-gray-500",
    }),
    El({
      element: "div",
      className: "w-8 h-1 bg-gray-500",
    }),
    El({
      element: "div",
      className: "w-8 h-1 bg-black",
    }),
  ],
  className: "flex justify-center items-center gap-2 mb-10",
});
const SlideBtn = Button({
  children: [
    Link({
      children: "Get Started",
      href: "/Login",
      className: "text-white",
    }),
  ],
  className: "font-medium text-sm w-96 h-12 py-3 bg-[#212529]",
});

export default function slide3() {
  return El({
    element: "div",
    children: [SlideImg, SlideTitle, SlideIndicator, SlideBtn],
    className: "flex flex-col items-center justify-center text-center",
  });
}
