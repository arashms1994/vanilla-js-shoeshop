import { Img } from "../components/Img";
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
  className: "w-12 h-12 bg-white",
  children: [
    Img({
      src: "../assets/svg/spinner.svg",
      className: "animate-spin",
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

//------  Slides Page ----------
const Slides = El({
  element: "div",
  children: [
    El({
      element: "h1",
      innerText: "hello",
      className: "text-5xl"
    })
  ],
})



export default function OnboardingPage() {
  const container = El({
    element: "div",
    children: [Loading],
  });

  setTimeout(() => {
    container.replaceWith(welcome);
  }, 3000);

  setTimeout(() => {
    const Slide = Slides;
    container.innerHTML = "";
    container.appendChild(Slide);
    console.log(container);
  }, 5000);

  return container;
}
