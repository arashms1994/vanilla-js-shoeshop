import { Img } from "../components/Img";
import { Link } from "../components/Link";
import El from "../utils/create-element";

// ---- Home Link ------
const footerHomeIcon = Img({
  src: "../assets/svg/home-icon.svg",
});
const footerHomeParaph = El({
  element: "p",
  innerText: "Home",
  className: "font-semibold text-xs text-black",
});
const footerHomeLink = El({
  element: "div",
  children: [
    Link({
      href: "/Home",
      children: [footerHomeIcon, footerHomeParaph],
    }),
  ],
  className: "w-8 h-10",
});

// ---- Cart Link ------
const footerCartIcon = Img({
  src: "../assets/svg/cart-icon.svg",
  className: "w-10 h-9",
});
const footerCartParaph = El({
  element: "p",
  innerText: "Cart",
  className: "font-semibold text-xs text-black",
});
const footerCartLink = El({
  element: "div",
  children: [
    Link({
      href: "/Cart",
      children: [footerCartIcon, footerCartParaph],
    }),
  ],
  className: "w-8 h-12 text-center",
});

// ---- Orders Link ------
const footerOrdersIcon = Img({
  src: "../assets/svg/orders-icon.svg",
  className: "h-11",
});
const footerOrdersParaph = El({
  element: "p",
  innerText: "Orders",
  className: "font-semibold text-xs text-black",
});
const footerOrdersLink = El({
  element: "div",
  children: [
    Link({
      href: "/Orders",
      children: [footerOrdersIcon, footerOrdersParaph],
    }),
  ],
  className: "w-8 h-10",
});

// ---- Wallet Link ------
const footerWalletIcon = Img({
  src: "../assets/svg/wallet-icon.svg",
});
const footerWalletParaph = El({
  element: "p",
  innerText: "Wallet",
  className: "font-semibold text-xs text-black",
});
const footerWalletLink = El({
  element: "div",
  children: [
    Link({
      href: "/Wallet",
      children: [footerWalletIcon, footerWalletParaph],
    }),
  ],
  className: "w-8 h-10",
});

// ---- Profile Link ------
const footerProfileIcon = Img({
  src: "../assets/svg/profile-icon.svg",
});
const footerProfileParaph = El({
  element: "p",
  innerText: "Profile",
  className: "font-semibold text-xs text-black",
});
const footerProfileLink = El({
  element: "div",
  children: [
    Link({
      href: "/Profile",
      children: [footerProfileIcon, footerProfileParaph],
    }),
  ],
  className: "w-8 h-10",
});

// ---- Footer ------
export default function Footer() {
  return El({
    element: "div",
    className:
      "pt-3 pb-4 bg-white flex justify-around px-3 gap-11 items-center fixed bottom-0 z-10 w-screen left-0",
    children: [
      footerHomeLink,
      footerCartLink,
      footerOrdersLink,
      footerWalletLink,
      footerProfileLink,
    ],
  });
}
