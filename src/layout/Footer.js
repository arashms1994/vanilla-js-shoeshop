import { Link } from "../components/Link";
import El from "../utils/create-element";

export default function Footer() {
    El({
        element: "div",
        className: "px-12 pt-3 pb-4 flex justify-around gap-11",
        children: [
            footerHomeLink(),
            footerCartLink(),
            footerOrdersLink(),
            footerWalletLink(),
            footerProfileLink()
        ]
    })
}

const footerHomeLink = El({
    element: "div",
    children: [
        Link({
            href: "/Home",
            children:[
                footerHomeIcon(),
                footerHomeParaph()
            ]
        })
    ],
    className: "w-8 h-10"
})
const footerHomeIcon = El({
    element: "img",
    src: "../assets/home-icon.svg",
    className: "w-5 h-5"
})
const footerHomeParaph = El({
    element: "p",
    innerText: "Home",
    className: "font-semibold text-xs text-black"
})

const footerCartLink = El({
    element: "div",
    children: [
        Link({
            href: "/Cart",
            children:[
                footerCartIcon(),
                footerCartParaph()
            ]
        })
    ],
    className: "w-8 h-10"
})
const footerCartIcon = El({
    element: "img",
    src: "../assets/cart-icon.svg",
    className: "w-5 h-5"
})
const footerCartParaph = El({
    element: "p",
    innerText: "Cart",
    className: "font-semibold text-xs text-black"
})

const footerOrdersLink = El({
    element: "div",
    children: [
        Link({
            href: "/Orders",
            children:[
                footerOrdersIcon(),
                footerOrdersParaph()
            ]
        })
    ],
    className: "w-8 h-10"
})
const footerOrdersIcon = El({
    element: "img",
    src: "../assets/orders-icon.svg",
    className: "w-5 h-5"
})
const footerOrdersParaph = El({
    element: "p",
    innerText: "Orders",
    className: "font-semibold text-xs text-black"
})

const footerWalletLink = El({
    element: "div",
    children: [
        Link({
            href: "/Wallet",
            children:[
                footerWalletIcon(),
                footerWalletParaph()
            ]
        })
    ],
    className: "w-8 h-10"
})
const footerWalletIcon = El({
    element: "img",
    src: "../assets/wallet-icon.svg",
    className: "w-5 h-5"
})
const footerWalletParaph = El({
    element: "p",
    innerText: "Wallet",
    className: "font-semibold text-xs text-black"
})

const footerProfileLink = El({
    element: "div",
    children: [
        Link({
            href: "/Wallet",
            children:[
                footerProfileIcon(),
                footerProfileParaph()
            ]
        })
    ],
    className: "w-8 h-10"
})
const footerProfileIcon = El({
    element: "img",
    src: "../assets/profile-icon.svg",
    className: "w-5 h-5"
})
const footerProfileParaph = El({
    element: "p",
    innerText: "Profile",
    className: "font-semibold text-xs text-black"
})