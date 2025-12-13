import clsx from "clsx";

export const TeamSlideButton = ({
    as: Component = "button",
    children,
    right = false,
    ...props
}) => {
    return (
        <Component
            onClick={props.onClick}
            className={clsx(
                "p-2",
                "hover:bg-black hover:text-white",
                "absolute z-30 top-1/2 -translate-y-1/2",
                right && "right-0"
            )}
        >
            {children}
        </Component>
    );
};
