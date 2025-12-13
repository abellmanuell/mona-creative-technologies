import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useContext } from "react";

import { HeaderContext } from "./HeaderContext";

export const HeaderNav = ({ children }) => {
    const { showSidebar, toggleShowSidebar, isDesktop, scrolledOver } =
        useContext(HeaderContext);

    return (
        <>
            {/* Mobile Button */}
            <button
                onClick={toggleShowSidebar}
                className="p-2 lg:hidden hover:bg-black hover:text-white"
            >
                <HiBars3 className="w-7 h-7" />
            </button>

            {/* Mobile sidebar */}
            <Transition show={!isDesktop && showSidebar} as={Fragment}>
                <Dialog onClose={toggleShowSidebar}>
                    {/* Backdrop */}
                    <Transition.Child
                        className="fixed inset-0 z-30 lg:hidden bg-neutral-900 bg-opacity-60"
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-70"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-70"
                        leaveTo="opacity-0"
                    />

                    {/* Panel */}
                    <Transition.Child
                        as={Dialog.Panel}
                        className={clsx(
                            "fixed right-0 inset-y-0 z-40",
                            "w-11/12 max-w-xs",
                            "bg-black text-white",
                            "flex flex-col gap-4 p-5"
                        )}
                        enter="transition-transform transform-gpu duration-500"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform transform-gpu duration-500"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <button
                            onClick={toggleShowSidebar}
                            className="text-white"
                        >
                            <HiXMark className="w-8 h-8" />
                        </button>
                        <div className="flex flex-col">{children}</div>
                    </Transition.Child>
                </Dialog>
            </Transition>

            {/* Desktop */}
            <div className={clsx("flex gap-4 max-lg:hidden", "text-black")}>
                {children.map((v, i, arr) => (
                    <Fragment key={i}>
                        {v}
                        {arr.length - 1 !== i ? "|" : null}
                    </Fragment>
                ))}
            </div>
        </>
    );
};
