import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useFooterForm = () => {
    return useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },

        resolver: yupResolver(
            yup
                .object({
                    /** Name */
                    name: yup.string().trim().required().max(255).label("Name"),

                    /** Email */
                    email: yup
                        .string()
                        .trim()
                        .required()
                        .max(80)
                        .email()
                        .label("Email"),

                    /** Message */
                    message: yup
                        .string()
                        .trim()
                        .required()
                        .max(1000)
                        .label("Message"),
                })
                .required()
        ),
    });
};
