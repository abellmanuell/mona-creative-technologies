export const FormErrorFeedback = ({ error }) =>
    error ? (
        <div className="px-2 text-sm text-red-500">{error.message}</div>
    ) : null;
