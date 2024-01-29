import * as yup from "yup";
export const loginValidation = yup.object().shape({
        email: yup.string().required("This field is required !").email("Please enter valid email"),
        password: yup.string().required("This field is required !")
});
