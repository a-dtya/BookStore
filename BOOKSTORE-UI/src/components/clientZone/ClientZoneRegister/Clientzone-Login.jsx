import React, { useRef, useState, useEffect } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { loginValidation } from "../../../ValidationSchema/loginValidation";
import swal from "sweetalert";
import Spinner from "react-bootstrap/Spinner";
import "../../../main";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../hooks/useAuth";
import axios from "../../../config/axiosConfig";
const login_URL = "/auth/login";
import { useTranslation } from "react-i18next";
import { getAllOrders } from "../../../services/ordersService";
import { setOrders } from "../../../store/reducers/orderSlice";
import { useDispatch } from "react-redux";

export default function ClientzoneLogin() {
  const { setAuth } = UseAuth();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setprofile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch=useDispatch()
  const login = async (e) => {

    setLoading(true);
    try {
      const res = await axios.post(login_URL, e);
      const accessToken = res?.data?.token;
      const accessuserId = res?.data?.userId;
      console.log(res);
      localStorage.setItem("user", accessToken);
      localStorage.setItem("userid", accessuserId);
      setAuth({ e, accessToken });
      setLoading(false);
      const userid = localStorage.getItem("userid");
      const orders=await getAllOrders(userid);
      console.log(orders);
      dispatch( setOrders(orders))

      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.res) {
        swal(
          "Email and Password is failed ",
          "You clicked the button!",
          "warning"
        );
        setLoading(false);
      } else if (err.res?.status === 400) {
        setErrMsg("Missing Email or Password ");
      } else if (err.res?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed ");
      }
      errRef.current.focus();
    }
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const { t } = useTranslation();
  return (
    <div className="mb-5">
      <div className="container-fluid page-header noBackground mb-5">
        <div className="row">
          <div className="container modulesTitleContainer">
            <div className="row modulesTitle text-center pt-4 pb-3">
              <div className="page-header-wrap">
                <h2 className="mb-3">{t("client-zone.client.log-title")}</h2>
                <span className="hr m-auto"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-8 m-auto mt-4 ">
        <div className="row login-forms boxs box-primary w-100 m-auto mb-lg">
          <>
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
              validationSchema={loginValidation}
              onSubmit={login}
            >
              <Form>
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
                <div className="form-group request m-4 pt-3">
                  <button
                    className="btn btn-primary text-black group hover:bg-d6be7bde"
                    type="submit"
                  >
                    {loading ? (
                      <Spinner
                        animation="border"
                        role="status"
                        className="container d-flex align-items-center justify-content-center"
                      >
                        <span className="visually-hidden ">Loading...</span>
                      </Spinner>
                    ) : (
                      <span>{t("client-zone.client.reg-btn-login")}</span>
                    )}
                  </button>
                </div>
                <div className="form-group request pt-3 text-center">
                  <span className="fw-semibold">
                    {t("client-zone.client.reg-account")}
                    <Link to="/register"> {t("client-zone.client.sign")}</Link>
                  </span>
                </div>
                <div className="login-box pt-3">
                  <div className="social text-center mb-4">
                    <span className="mb-15 text-center fw-semibold">
                      {t("client-zone.client.reg-continue-using")}
                    </span>
                  </div>
                  <LoginSocialGoogle
                    client_id={
                      "720953758849-av80tdajd4u9k5hgqqnh9dmj78dha5bu.apps.googleusercontent.com"
                    }
                    scope="openid profile email"
                    discoveryDocs="claims_supported"
                    access_type="offline"
                    onResolve={({ provider, data }) => {
                      console.log(provider, data);
                      setprofile(data);
                    }}
                    onReject={(err) => {
                      console.log(err);
                    }}
                  >
                    <div className="social-login-btn m-auto">
                      <div className="mb-3">
                        <GoogleLoginButton />
                      </div>
                    </div>
                  </LoginSocialGoogle>
                  <LoginSocialFacebook
                    appId="920872289211071"
                    onResolve={({ data }) => {
                      console.log(data);
                      setprofile(data);
                    }}
                    onReject={(err) => {
                      console.log(err);
                    }}
                  >
                    <div className="social-login-btn m-auto">
                      <div className="mb-3">
                        <FacebookLoginButton />
                      </div>
                    </div>
                  </LoginSocialFacebook>
                </div>
              </Form>
            </Formik>
          </>
        </div>
      </div>
    </div>
  );
}