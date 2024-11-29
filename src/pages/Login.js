import { GetUsers } from "../api/users";
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
      src: "/assets/svg/logo-black.svg",
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
  className: "bg-transparent w-80 h-9 text-sm text-black font-medium",
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
  className: "bg-transparent w-80 h-9 text-sm text-black font-medium",
});
const PassWord = El({
  element: "div",
  children: [PassWordIcon, PassWordInput],
  className:
    "flex justify-start items-center mt-5 mb-6 px-2 bg-slate-200 rounded-md",
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
      element: "p",
      innerText: "Remember me",
      className: "text-base font-normal text-[#212529]",
    }),
  ],
  className: "flex justify-center items-center",
});

//====== Wrong Input =======
const WrongParaph = El({
  element: "div",
  className: "text-center border-red-600 border-b-2 mt-2 hidden",
  id: "wrongParaph",
  children: [
    El({
      element: "p",
      innerText: "User Name or Password Is incorrect!",
      className: "text-base text-red-600 ",
    }),
  ],
});
const EmptyParaph = El({
  element: "div",
  className: "text-center border-red-600 border-b-2 mt-2 hidden",
  id: "emptyParaph",
  children: [
    El({
      element: "p",
      innerText: "Please Fill The Blanks",
      className: "text-base text-red-600 ",
    }),
  ],
});

// ------- button ----------
const FormBtn = Button({
  className: "py-3 w-full h-12 bg-[#212529] mt-64 text-white",
  innerText: "Sign In",
  eventListener: [
    {
      event: "click",
      callback: () => {
        event.preventDefault();
        const userEmail = document.getElementById("email");
        const userPass = document.getElementById("password");
        const wrongParaph = document.getElementById("wrongParaph");
        const emptyParaph = document.getElementById("emptyParaph");
        const emailValue = userEmail.value.trim();
        const passwordValue = userPass.value.trim();
        if (!emailValue || !passwordValue) {
          emptyParaph.classList.toggle("hidden");
          return;
        }
        let users = [];
        GetUsers().then((users) => {
          users = users;
          const user = users.find((user) => user.email === userEmail.value);
          if (!user || user.password !== passwordValue) {
            wrongParaph.classList.toggle("hidden");
            return;
          } else {
            localStorage.setItem("userId", user.id);
            localStorage.setItem("userEmail", user.email);
          }
          router.navigate("/Home");
        });
      },
    },
  ],
});

// ------- form --------
const Form = El({
  element: "form",
  children: [Email, PassWord, CheckBox, WrongParaph, EmptyParaph, FormBtn],
  className: "flex flex-col items-center justify-center pb-3",
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
