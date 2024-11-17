import { Button } from "../components/button";
import { Img } from "../components/Img";
import { Input } from "../components/Input";
import { Link } from "../components/Link";
import { router } from "../routes/Router";
import El from "../utils/create-element";

const BackIcon = El({
  element: "div",
  children: [
    Link({
      children: [
        Img({
          src: "/assets/svg/back-icon.svg",
        }),
      ],
      href: "/Slide3",
    }),
  ],
  className: "w-6 h-6 absolute left-6 top-4",
});

// ------ hero section --------
const Logo = El({
  element: "div",
    children: [
      Img({
        src: "/assets/svg/logo.svg",
        className: ""
      }),
    ],
  className: "h-20 w-14",
});
const Title = El({
  element: "h1",
  innerText: "Login to Your Account",
  className: "text-[#152536] font-semibold text-3xl",
});
const HeroLogin = El({
  element: "div",
  children: [Logo, Title],
  className: "flex text-center flex-col mb-12 gap-28 items-center",
});

// -------------- email ---------
const EmailIcon = El({
  element: "div",
  children: [
    Img({
      src: "/assets/svg/email-icon.svg",
    }),
  ],
  className: "w-5 h-5",
});
const EmailInput = Input({
  placeholder: "Email",
  type: "email",
  id: "email",
  className: "bg-transparent w-80 h-9",
});
const Email = El({
  element: "div",
  children: [EmailIcon, EmailInput],
  className: "flex justify-start items-center px-2 bg-slate-200 rounded-md",
});

// -------- password --------
const PassWordIcon = El({
  element: "div",
  children: [
    Img({
      src: "/assets/svg/password-icon.svg",
    }),
  ],
  className: "w-5 h-5",
});
const PassWordInput = Input({
  placeholder: "Password",
  type: "password",
  id: "password",
  className: "bg-transparent w-80 h-9",
});
const PassWord = El({
  element: "div",
  children: [PassWordIcon, PassWordInput],
  className:
    "flex justify-start items-center mt-5 mb-10 px-2 bg-slate-200 rounded-md",
});

//   ---- checkbox ---------
const CheckBox = El({
  children: [
    Input({
      type: "CheckBox",
      id: "RememberMe",
      className: "w-5 h-5",
    }),
    El({
      element: "label",
      for: "RememberMe",
      innerText: "Remember Me",
      className: "",
    }),
  ],
  className: "flex justify-center items-center gap-3",
});

// ------- button ----------
const FormBtn = Button({
  className: "py-3 w-full h-12 bg-[#212529] mt-64 text-white",
  innerText: "Sign In",
  eventListener: [
    {
      event: "click",
      callback: () => {
        router.navigate("/Home");
      },
    },
  ],
});

// ------- form --------
const Form = El({
  element: "form",
  children: [Email, PassWord, CheckBox, FormBtn],
  className: "flex flex-col items-center justify-center",
});

// ---------- Login -------
export default function login() {
  return El({
    element: "div",
    children: [BackIcon, HeroLogin, Form],
    className:
      "relative flex flex-col items-center text-center justify-center pt-32",
  });
}
