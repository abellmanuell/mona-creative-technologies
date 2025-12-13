import clsx from "clsx";
import { createContext, forwardRef, useId } from "react";

/** Form group context */
export const FormGroupContext = createContext({
    id: null,
});

/** Form group */
export const FormGroup = forwardRef(
    ({ as: Component = "div", ...props }, ref) => {
        const id = useId();
        return (
            <FormGroupContext.Provider value={{ id: `form-group-${id}` }}>
                <Component
                    {...props}
                    ref={ref}
                    className={clsx(props.className, "flex flex-col gap-1")}
                >
                    {props.children}
                </Component>
            </FormGroupContext.Provider>
        );
    }
);
