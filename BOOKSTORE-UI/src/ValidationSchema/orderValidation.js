import * as yup from "yup";

const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;

export const orderValidation = yup.object().shape({
    email: yup
        .string()
        .required("This field is required !")
        .email("Please enter valid email"),

    fullName: yup.string().required("This field is required !"),
    country: yup.string().required("This field is required !"),
    address: yup.string().required("This field is required !"),
    city: yup.string().required("This field is required !"),
    phone: yup.string().required("This field is required !").matches(phoneRegex, "Phone number is not valid"),
    landmark: yup.string().required("This field is required !"),
});
