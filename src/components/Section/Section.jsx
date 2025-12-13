import { Element } from "react-scroll";

export const Section = ({ children, ...props }) => {
    return (
        <Element
            {...props}
            className="container flex flex-col gap-4 p-4 mx-auto"
        >
            {children}
        </Element>
    );
};
