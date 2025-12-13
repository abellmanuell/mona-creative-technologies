import { useMutation } from "@tanstack/react-query";

export const useFormMutation = (form, options) =>
    useMutation({
        onError: ({ response }) => {
            if (response?.data?.errors) {
                Object.entries(response.data.errors).forEach(
                    /** Set form error */
                    ([name, errors]) =>
                        form.setError(name, { message: errors[0] })
                );
            }
        },
        ...options,
    });
