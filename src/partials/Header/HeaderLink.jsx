import clsx from "clsx";
import { ScrollToLink } from "../../components/ScrollToLink/ScrollToLink";
import { useContext } from "react";

import { HeaderContext } from "./HeaderContext";

export const HeaderLink = ({ as: Component = ScrollToLink, ...props }) => {
  const { toggleShowSidebar } = useContext(HeaderContext);

  const componentProps =
    Component === ScrollToLink
      ? {
          spy: true,
          activeClass: "text-green-500",
          role: "button",
          onClick: () => toggleShowSidebar(false),
          ...props,
        }
      : props;
  return (
    <Component
      {...componentProps}
      className={clsx(
        "max-lg:p-2 max-lg:hover:bg-green-500 max-lg:hover:text-black",
        "lg:hover:text-green-500",
        "flex items-center gap-2"
      )}
    />
  );
};
