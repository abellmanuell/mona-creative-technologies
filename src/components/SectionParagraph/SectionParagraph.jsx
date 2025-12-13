export const SectionParagraph = ({ children, ...props }) => {
    return (
        <p
            {...props}
            className="p-4 border-l-2 border-l-green-500 bg-neutral-100"
        >
            {children}
        </p>
    );
};
