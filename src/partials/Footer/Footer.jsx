import Logo from "../../images/white-logo.webp";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiChevronRight } from "react-icons/hi2";
import { ScrollToLink } from "../../components/ScrollToLink/ScrollToLink";
import { usePaths } from "../../hooks/usePaths";

import { FooterForm } from "./FooterForm";

const links = [
  {
    to: "hero",
    title: "Home",
  },
  {
    to: "about",
    title: "About Us",
  },
  {
    to: "why-us",
    title: "Why Us",
  },
  {
    to: "services",
    title: "Services",
  },
  {
    to: "contact",
    title: "Contact",
  },
];

const handles = [
  {
    href: "https://facebook.com/foodrive",
    icon: FaFacebookF,
  },
  {
    href: "https://x.com/foodrive",
    icon: FaXTwitter,
  },
  {
    href: "https://www.instagram.com/foodrive",
    icon: FaInstagram,
  },
];
export const Footer = () => {
  const { assetBaseURL } = usePaths();
  return (
    <div className="text-white bg-black">
      <div className="container flex flex-col gap-4 p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* Info */}
          <div className="flex flex-col gap-4">
            <div>
              <img src={assetBaseURL(Logo)} className="h-12" />
            </div>
            <p className="p-4 bg-neutral-900 text-neutral-300">
              Choose Mona Creative Technologies for technology built with
              purpose, training delivered with intention, and solutions designed
              for real impact.
            </p>

            <div className="flex flex-wrap gap-4">
              {handles.map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-3 border border-white rounded-full"
                  target="_blank"
                >
                  {Icon && <Icon className="w-6 h-6" />}
                </a>
              ))}
            </div>
          </div>

          {/* Footer form */}
          <div className="flex flex-col gap-2 md:row-span-2">
            <h3 className="px-2 text-2xl font-thin text-green-500">
              {/* Get in Touch */}
            </h3>

            <FooterForm />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h3 className="px-2 text-2xl font-thin text-green-500">Links</h3>
            {links.map(
              ({ as: Component = ScrollToLink, to, title, ...props }, i) => (
                <Component
                  key={i}
                  {...(Component === ScrollToLink
                    ? { to, role: "button", ...props }
                    : props)}
                  className="flex items-center gap-2 hover:text-green-500"
                >
                  <HiChevronRight /> {title}
                </Component>
              )
            )}
          </div>
        </div>

        <div className="p-2 text-center text-neutral-300">
          &copy; Mona Creative Technologies
        </div>
      </div>
    </div>
  );
};
