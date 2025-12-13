import clsx from "clsx";
import { forwardRef } from "react";

export const StyledLink = forwardRef(
    ({ as: Component = "a", ...props }, ref) => (
        <Component
            {...props}
            ref={ref}
            className={clsx(props.className, "hover:text-green-500")}
        >
            {props.children}
        </Component>
    )
);
