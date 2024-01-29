import * as yup from "yup";
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const phoneRegex = /^[6789]\d{9}$/;
export const registerValidation = yup.object().shape({
        firstName: yup.string().min(2, 'Too Short!')
        .max(15, 'Too Long!').required("This field is required !"),
        lastName: yup.string().min(2, 'Too Short!')
        .max(20, 'Too Long!').required("This field is required !"),
        email: yup.string().required("This field is required !").email("Please enter valid email"),
        //password: yup.string().required("This field is required !").matches(passwordRegex, "Password Should Be Strong"),
        phoneNumber: yup.string().required("This field is required !").matches(phoneRegex, "Phone number is not valid "),
        address: yup.string().min(3, 'Too Short!')
        .max(20, 'Too Long!').required("This field is required !"),
        country: yup.string().min(3, 'Too Short!')
        .max(20, 'Too Long!').required("This field is required !"),
});
