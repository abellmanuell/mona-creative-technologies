import clsx from "clsx";
import { forwardRef } from "react";

export const Alert = forwardRef(
    ({ as: Component = "p", variant, className, ...props }, ref) => (
        <Component
            {...props}
            ref={ref}
            className={clsx(
                className,
                // Base styles
                "p-4 text-center",

                // Variants
                {
                    success: ["text-green-900", "bg-green-100"],
                    info: ["text-blue-900", "bg-blue-100"],
                    danger: ["text-red-900", "bg-red-100"],
                    warning: ["text-green-700", "bg-green-100"],
                }[variant]
            )}
        />
    )
);
