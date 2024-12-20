import { GetUsersId } from "../api/users";
import { Img } from "../components/Img";
import El from "../utils/create-element";


// ------- Profile User --------
const userAvatar = El({
  element: "div",
  children: [
    Img({
      src: "/assets/svg/header-avatar.svg",
      className: " rounded-full"
    }),
  ],
  className: "w-12 h-12",
});
const userWelcome = El({
  element: "div",
  children: [
    El({
      element: "p",
      innerText: "Good Morning 👋",
      className: "text-base text-gray-500 font-medium",
    }),
    El({
      element: "p",
      id: "userName",
      className: "text-lg text-black font-bold",
    }),
  ],
});
const userProfile = El({
  element: "div",
  className: "flex gap-4 justify-center items-center",
  children: [userAvatar, userWelcome],
});

// ------- Icons --------
const bellIcon = El({
  element: "div",
  children: [
    Img({
      src: "/assets/svg/bell-icon.svg",
    }),
  ],
  className: "w-5 h-5",
});
const heartIcon = El({
  element: "div",
  children: [
    Img({
      src: "/assets/svg/heart-icon.svg",
    }),
  ],
  className: "w-5 h-5",
});
const headerIcons = El({
  element: "div",
  children: [bellIcon, heartIcon],
  className: "flex justify-between items-center gap-4 w-16 h-6",
});

// ========= USer Fetch =====

async function LoadUser() {
  const UserId = localStorage.getItem("userId")
   if(UserId) 
    try {
      const user = await GetUsersId(UserId);
      console.log(user)
      document.getElementById("userName").textContent = user.name
   } catch {
    console.log("Error Fetching User Data;", error)
   }
   return;
}

// ------- Header --------
export default function Header() {
  LoadUser()
  return El({
    element: "div",
    children: [userProfile, headerIcons],
    className: "flex justify-between items-center py-4 gap-28",
  });
}
