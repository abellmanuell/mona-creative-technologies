import clsx from "clsx";
import { forwardRef, useContext } from "react";

import { FormGroupContext } from "./FormGroup";

/** Label */
export const Label = forwardRef(({ required = false, ...props }, ref) => {
    const { id } = useContext(FormGroupContext);
    return (
        <label
            {...props}
            ref={ref}
            htmlFor={props.htmlFor || id}
            className={clsx(props.className, "px-2 text-neutral-400")}
        >
            {props.children}{" "}
            {required ? <span className="text-red-500">*</span> : null}
        </label>
    );
});
