import clsx from "clsx";
import { forwardRef } from "react";

import { Spinner } from "../Spinner/Spinner";

export const SubmitButton = forwardRef(
    ({ isPending, children, ...props }, ref) => (
        <button
            {...props}
            ref={ref}
            disabled={isPending}
            className={clsx(props.className, "bg-white text-black p-2")}
        >
            {isPending ? <Spinner /> : children}
        </button>
    )
);
