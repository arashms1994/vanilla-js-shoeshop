import El from "../utils/create-element";

export default function Onboarding() {}

const Onboarding1 = El({
  element: "div",
  chidren: [logo(), spinner()],
  className: "flex flex-col justify-center items-center pt-96 px-24",
});

function logo() {
  return El({
    element: "div",
    chidren: [logoIcon(), logoTitle()],
    className: "flex gap-3 justify-center items-center mb-80",
  });
}

function logoIcon() {
  return El({
    element: "div",
    chidren: [
      El({
        element: "img",
        src: "../assets/logo.svg",
        className: "w-full h-full",
      }),
    ],
    className: "w-[59px] h-[59px] rounded-full bg-black py-2 px-4",
  });
}

function logoTitle() {
  return El({
    element: "div",
    chidren: [
      El({
        element: "h1",
        innerText: "Shoea",
        className: "font-bold text-5xl text-black",
      }),
    ],
  });
}

function spinner() {
  El({
    element: "div",
    className: "w-12 h-12 bg-white",
    chidren: [
      El({
        element: "img",
        src: "../assets/spinner.svg",
        className: "w-full h-full animate-spin",
      }),
    ],
  });
}

const welcome = El({
  element: "div",
  className:
    "bg-[url('../assets/welcome-bg.jpg')] pt-[629px] px-8 flex flex-col justify-center items-center",
  children: [welcomeTitle(), welcomeBrandName(), welcomeDescription()],
});

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
