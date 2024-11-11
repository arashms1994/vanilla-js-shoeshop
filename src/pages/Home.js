import { El } from "../utils/create-element"
export default function Home() {
    El({
        element: "h1",
        className: "text-red-500",
        children: "hello"
    })
}