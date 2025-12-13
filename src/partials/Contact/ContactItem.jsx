import clsx from "clsx";

export const ContactItem = ({ icon: Icon, children }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 group ">
            <span
                className={clsx(
                    "relative p-4 border border-black group-hover:bg-black group-hover:text-white rounded-full"
                )}
            >
                <Icon className="relative w-6 h-6" />
            </span>

            <div className="flex-auto max-w-xs min-w-0 text-center">
                {children}
            </div>
        </div>
    );
};
