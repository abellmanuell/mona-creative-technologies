import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";
import { forwardRef } from "react";

/** Spinner  */
export const Spinner = forwardRef((props, ref) => (
    <CgSpinner
        {...props}
        ref={ref}
        className={clsx(props.className, "mx-auto text-2xl animate-spin")}
    />
));
