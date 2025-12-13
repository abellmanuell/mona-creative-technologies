import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";

export const ServiceItem = ({ title, children }) => {
  return (
    <div className="divide-y divide-neutral-300">
      <Disclosure>
        {({ open }) => (
          <div>
            <Disclosure.Button
              className={clsx(
                "flex items-center w-full p-2 px-4 text-left hover:text-green-500",
                open ? "text-green-500" : null
              )}
            >
              <h3 className="flex-auto min-w-0 font-Syne">{title}</h3>
              <HiOutlineArrowRightCircle className="w-10 h-10 shrink-0" />
            </Disclosure.Button>

            {/* Answer */}
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              unmount={false}
            >
              <Disclosure.Panel unmount={false} className="flex flex-col gap-2">
                {children}
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};
