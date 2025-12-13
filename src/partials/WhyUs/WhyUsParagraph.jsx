import clsx from "clsx";

export const WhyUsParagraph = ({ title, children, icon: Icon, ...props }) => {
    return (
        <div
            {...props}
            className={clsx(props.className, "flex flex-col gap-4 p-4")}
        >
            <div className="flex items-center gap-2">
                <Icon className="w-14 h-14" />
                <h3 className="text-2xl font-Syne">{title}</h3>
            </div>
            <p>{children}</p>
        </div>
    );
};
