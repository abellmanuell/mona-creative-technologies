import clsx from "clsx";
import { forwardRef } from "react";
import { useContext } from "react";

import { FormGroupContext } from "./FormGroup";

/**
 * Input
 */
export const Input = forwardRef(
    ({ as: Component = "input", ...props }, ref) => {
        const { id } = useContext(FormGroupContext);
        return (
            <Component
                {...props}
                ref={ref}
                id={props.id || id}
                type={props.type || "text"}
                className={clsx(
                    props.className,
                    "border-none",
                    "bg-neutral-800",
                    "placeholder:text-neutral-700",
                    "focus:outline-0 focus:ring focus:ring-green-500"
                )}
            />
        );
    }
);
