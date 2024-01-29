import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { registerValidation } from "../../../ValidationSchema/registerValidation";
import Spinner from "react-bootstrap/Spinner";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import './client.css'
import axios from "../../../config/axiosConfig";
const register_URL = "/auth/register";
const upload_URL = "/upload";

export default function ClientzoneRegister() {

  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      let imageUploadUrl = "";
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const resUpload = await axios.post(upload_URL, formData);
        console.log(resUpload.data.imageUrl); // Assuming the response contains the uploaded image URL
        imageUploadUrl = resUpload.data.imageUrl;
      }

      const userData = { ...values, image: imageUploadUrl };
      const res = await axios.post(register_URL, userData);
      console.log(res);
      swal("Registered Successfully ", "Please Login !", "success");
      setLoading(false);
      navigate(from, { replace: true });
    } catch (err) {
      if (!err.response) {
        swal("Registration rejected ", "You clicked the button!", "warning");
      } else if (err.response.status === 400) {
        setErrMsg("Missing Email or Password validation");
      } else if (err.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Registration Failed: " + err.message);
      }
      setLoading(false);
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    country: "",
  };
  const { t } = useTranslation();
  return (
    <div className="m-5">
      <div className="container-fluid page-header noBackground mb-5 ">
        <div className="row">
          <div className="container modulesTitleContainer">
            <div className="row modulesTitle text-center pt-4 pb-3">
              <div className="page-header-wrap">
                <h2 className="mb-3">{t("client-zone.client.reg-title")}</h2>
                <span className="hr m-auto"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 m-auto mt-4 ">
        <div className="row login-forms box box-primary w-100 m-auto mb-lg card-with-shadow">
          <div
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </div>
          <Formik
            className="bg-body text-center"
            initialValues={initialValues}
            validationSchema={registerValidation}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="row">
                <div className="col-sm-6 ">
                  <Field
                    type="file"
                    name="image"
                    placeholder="image *"
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={handleImageChange}
                    // onChange={(event) => {
                    //   const file = event.target.files[0];
                    //   setSelectedFile(file);
                    //   console.log("Selected File:", file); // Debugging statement to check the selected file
                    // }}
                  />
                  <ErrorMessage
                    name="image"
                    component="p"
                    className="text-danger"
                  />
                  <Field
                    type="text"
                    name="firstName"
                    placeholder={t("client-zone.profile.l-fname")}
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="text-danger"
                  />
                  <Field
                    type="text"
                    name="lastName"
                    placeholder={t("client-zone.profile.l-lname")}
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="text-danger"
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder={t("client-zone.client.reg-email")}
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-danger"
                  />
                </div>
                <div className="col-sm-6">
                  <Field
                    type="password"
                    name="password"
                    placeholder={t("client-zone.client.reg-pass")}
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-danger"
                  />
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder={t("client-zone.profile.l-phone")}
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="p"
                    className="text-danger"
                  />
                  <Field
                    type="text"
                    name="address"
                    placeholder={t("order.info-sec.l-address")}
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <ErrorMessage
                    name="address"
                    component="p"
                    className="text-danger"
                  />
                  <Field
                    type="text"
                    name="country"
                    placeholder={t("order.info-sec.l-country")}
                    className="form-control mb-3 p-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                  <ErrorMessage
                    name="country"
                    component="p"
                    className="text-danger"
                  />
                </div>
              </div>
              <div className="form-group request m-4 pt-3 text-center">
                <button className="loginbtn border-0 rounded" style={{width:'12rem'}} type="submit">
                  {!loading ? (
                    <span>SUBMIT</span>
                  ) : (
                    <Spinner
                      animation="border"
                      role="status"
                      className="container d-flex align-items-center justify-content-center"
                    >
                      <span className="visually-hidden ">Loading...</span>
                    </Spinner>
                  )}
                </button>
              </div>
              <div className="form-group request text-center m-4 pt-3">
                <span className="fw-semibold">
                  {t("client-zone.client.acount")}{" "}
                  <Link to="/login">{t("client-zone.client.log-title")}</Link>
                </span>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}