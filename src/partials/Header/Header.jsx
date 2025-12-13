import Logo from "./../../images/logo.webp";
import clsx from "clsx";
import { ScrollToLink } from "../../components/ScrollToLink/ScrollToLink";
import { useMedia, useToggle, useWindowScroll } from "react-use";
import { usePaths } from "../../hooks/usePaths";

import { HeaderContext } from "./HeaderContext";
import { HeaderLink } from "./HeaderLink";
import { HeaderNav } from "./HeaderNav";
import { HiShoppingCart } from "react-icons/hi2";

export const Header = () => {
  const [showSidebar, toggleShowSidebar] = useToggle(false);
  const isDesktop = useMedia("(min-width: 1024px)", false);
  const { y } = useWindowScroll();

  const scrolledOver = y > 100;

  const { assetBaseURL } = usePaths();

  return (
    <HeaderContext.Provider
      value={{
        showSidebar,
        toggleShowSidebar,
        isDesktop,
        scrolledOver,
      }}
    >
      <div
        className={clsx(
          scrolledOver ? "bg-white" : "max-lg:bg-green-100",
          "fixed inset-x-0 top-0 z-20"
        )}
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <h1>
              <ScrollToLink to="hero" role="button">
                <img src={assetBaseURL(Logo)} alt={"Mona"} className="h-10" />
              </ScrollToLink>
            </h1>

            {/* Navigation links */}
            <HeaderNav>
              <HeaderLink to="about">About</HeaderLink>
              <HeaderLink to="why-us">Why Us</HeaderLink>
              <HeaderLink to="services">Services</HeaderLink>

              <HeaderLink to="contact">Contact</HeaderLink>

              {/* <HeaderLink as="a" href="https://store.nexaenergyltd.com">
                <HiShoppingCart /> Store
              </HeaderLink> */}
            </HeaderNav>
          </div>
        </div>
      </div>
    </HeaderContext.Provider>
  );
};
