import clsx from "clsx";

export const SectionHeading = ({ children }) => {
    return (
        <h2
            className={clsx(
                "relative py-2 px-4 pl-12 inline-flex self-center",
                "text-white text-center",
                "before:absolute before:-z-10 before:inset-y-0 before:left-0 before:w-6 before:bg-green-500 before:-skew-x-12",
                "after:absolute after:-z-10 after:inset-0 after:left-8 after:bg-black after:-skew-x-12"
            )}
        >
            {children}
        </h2>
    );
};
