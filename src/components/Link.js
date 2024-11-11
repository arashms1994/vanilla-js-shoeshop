import { router } from "../routes/Router";
import El from "../utils/create-element";

export function Link({ href, ...rest }) {
    return El({
      element: "a",
      href,
      eventListener: [
        {
          event: "click",
          callback: (event) => {
            event.preventDefault();
            router.navigate(href);
          },
        },
      ],
      ...rest,
    });
  }