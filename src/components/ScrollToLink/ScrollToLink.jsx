import { Link as ScrollLink } from "react-scroll";

export const ScrollToLink = ({ ...props }) => {
    return <ScrollLink {...props} smooth offset={-63} duration={500} />;
};
