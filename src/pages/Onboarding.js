import El from "../utils/create-element";

export default function Onboarding() {}

let Onboarding1 = El({
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

let welcome = El({
    element: "div",
    className: "bg-[url('../assets/welcome-bg.jpg')] pt-[629px] pl-8 flex flex-col justify-center items-center",
    children: [

    ]
})

let welcomeTitle = El({
    element: "div",
    className: "flex justify-center items-center gap-4"
})