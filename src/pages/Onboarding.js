import { Button } from "../components/button";
import { Img } from "../components/Img";
import { Link } from "../components/Link";
import { router } from "../routes/Router";
import El from "../utils/create-element";

//--------  Welcome Page -------
const welcomeTitle = El({
  element: "h2",
  innerText: "Welcome To 👋",
  className: "text-white text-4xl font-semibold mb-4",
});
const welcomeBrandName = El({
  element: "h1",
  innerText: "Shoea",
  className: "font-bold text-white text-7xl mb-7",
});
const welcomeDescription = El({
  element: "p",
  innerText:
    "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
  className: "text-base font-semibold text-white",
});
const welcome = El({
  element: "div",
  className:
    "bg-[url('../assets/img/welcome-bg.jpg')] pt-[629px] h-screen px-8 object-fill flex flex-col justify-center",
  children: [welcomeTitle, welcomeBrandName, welcomeDescription],
});

//-------  Loading Page ----------
const logoIcon = El({
  element: "div",
  children: [
    Img({
      src: "../assets/svg/logo.svg",
    }),
  ],
  className: "w-[59px] h-[59px] rounded-full bg-black py-2 px-4",
});
const logoTitle = El({
  element: "div",
  children: [
    El({
      element: "h1",
      innerText: "Shoea",
      className: "font-bold text-5xl text-black",
    }),
  ],
});
const spinner = El({
  element: "div",
  className: "w-12 h-12 bg-white animate-spin",
  children: [
    Img({
      src: "../assets/svg/spinner.svg",
    }),
  ],
});
const logo = El({
  element: "div",
  children: [logoIcon, logoTitle],
  className: "flex gap-3 justify-center items-center mb-80",
});
const Loading = El({
  element: "div",
  children: [logo, spinner],
  className: "flex flex-col justify-center items-center pt-96 px-24",
});

//------  Slide1 Page ----------
const SlideImg = El({
  element: "div",
  children: [
    Img({
      src: "/assets/img/onboarding-bg-1.jpg",
    }),
  ],
  className: "w-[430px] h-[657px]",
});
const SlideTitle = El({
  element: "h1",
  innerText: "We provide high quality products just for you",
  className: "text-[32px] text-black font-semibold mb-16",
});
const SlideIndicator = El({
  element: "div",
  children: [
    El({
      element: "div",
      className: "w-8 h-1 bg-black",
    }),
    El({
      element: "div",
      className: "w-8 h-1 bg-gray-500",
    }),
    El({
      element: "div",
      className: "w-8 h-1 bg-gray-500",
    }),
  ],
  className: "flex justify-center items-center gap-2 mb-10",
});
const SlideBtn = Button({
  children: [
    Link({
      innerText: "Next",
      href: "/Slide2",
      className: "text-white",
    }),
  ],
  className: "font-medium text-sm w-96 h-12 py-3 bg-[#212529]",
});
const Slide = El({
  element: "div",
  children: [SlideImg, SlideTitle, SlideIndicator, SlideBtn],
  className: "flex flex-col items-center justify-center text-center",
});

//------  Onboarding Page ----------
export default function onBoarding() {
  const container = El({
    element: "div",
    children: [Loading],
  });

  setTimeout(() => {
    container.innerHTML = "";
    container.append(welcome);
  }, 3000);

  setTimeout(() => {
    container.innerHTML = "";
    container.append(Slide);
  }, 5000);

  return container;
}
