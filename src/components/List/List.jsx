import { HiCheckCircle } from "react-icons/hi2";

export const List = ({ children, ...props }) => {
    return (
        <ul className="p-4 border-l-2 border-l-green-500 bg-neutral-100">
            {children}
        </ul>
    );
};

export const ListItem = ({ children, ...props }) => {
    return (
        <li className="flex items-center gap-2">
            <HiCheckCircle className="fill-green-500 shrink-0" />
            <div className="flex-auto min-w-0">{children}</div>
        </li>
    );
};
