import React, { useContext, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../../clientZone/App.css";
import { ClientActivePageCntxt } from "../../clientZone/CLientZoneRouter";
import Profile from "./profile/Profile";
import MyAddress from "./myAddress/MyAddress";
import MyStore from "./myStore/MyStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UseAuth from "../../../hooks/useAuth";
import axios from "../../../config/axiosConfig";
const USER_URL = "/users/";
function ClientZone(e) {
  const { auth, setAuth } = UseAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userid = localStorage.getItem("userid");
  useEffect(() => {
    setLoading(true);
    axios
      .get(USER_URL + userid, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzUwMTAwMTM0Y2Y0NmE4NDRiMmRkZiIsImlhdCI6MTY4NTM4OTU5NH0.26zyfxpYchRego4180tU958pVPiIu1xM0W4ayxUbzQw",
        },
      })
      .then((res) => {
        setData(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(data);
  const handleLogout = async () => {
    setLoading(true);
    try {
      setLoading(false);
      navigate("/login");
      localStorage.clear();
      setAuth("");
      console.log("successfully logged out");
    } catch (err) {
      setLogding(false);
      console.log(err);
    }
  };
  const { clientActivePage, updatePage } = useContext(ClientActivePageCntxt);
  function handleActivePage(activePage) {
    updatePage(activePage);
  }
  return (
    <div className=" container page-header noBackground">
      <div className="container-fluid page-header noBackground mb-5">
        <div className="row">
          <div className="container modulesTitleContainer">
            <div className="row modulesTitle text-center pt-4 pb-3">
              <div className="page-header-wrap">
                <h2 className="mb-3">{t("client-zone.client.profile")}</h2>
                <span className="hr m-auto"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <Spinner
            animation="border"
            role="status"
            className="container d-flex align-items-center justify-content-center"
          >
            <span className="visually-hidden ">Loading...</span>
          </Spinner>
        ) : (
          <div className="row mb-5">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className=" clientZoneProfileImage box-primary box-text-primary text-center">
                <div
                  className="profile-image "
                  style={{ position: "relative" }}
                >
                  <img
                    className="prof-image"
                    id="profileImagePreview"
                    src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1700702270~exp=1700702870~hmac=d77b8a26171c68bf5185854f9983fb046e254a8b563995dbcf26bb950f0819ce"
                    style={{height:'5rem',width:'5rem',marginLeft:'15%'}}
                    data-src="https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png"
                  />
                  <div className="s123-uploader">
                    <div className="s123-u-upload-btn">
                      <i
                        className="bi bi-camera hidden"
                        data-icon-name="camera"
                        style={{}}
                        alt="camera"
                      >
                        &nbsp;
                      </i>
                    </div>
                    <div
                      className="s123-u-loading-icon"
                      style={{ display: "none" }}
                    >
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  </div>
                  <form className="client" action="#">
                    <div className=" ps-5">
                      <input
                        type="file"
                        name="upload_profile_image"
                        accept="image/*"
                        className="form-control hidden"
                      />
                    </div>
                  </form>
                </div>

                <div className="clientemail">
                  <h4 className="email fw-bold d-block p-3" style={{fontSize:'10px'}}>
                    {data.email}
                  </h4>
                  <i
                    className="bi-box-arrow-in-right fw-bold  logoutBtn border  p-2 "
                    onClick={handleLogout}
                  >
                    &nbsp; {t("client-zone.client.btn-log")}
                  </i>
                </div>
              </div>
              <select
                id="clientZone-select-tabs"
                className="form-control hidden-xs visible-xs "
                style={{ display: "none", marginBottom: "20px" }}
              >
                <option value="profile">
                  {t("client-zone.client.t-profile")}
                </option>
                <option value="addresses">
                  {t("client-zone.client.t-address")}
                </option>
              </select>
              <div
                id="clientZone-menu-tabs"
                className="box-primary clientZoneTabs mb-3 "
              >
                <div
                  data-tab="profile"
                  className={
                    clientActivePage === "profile"
                      ? "col-xs-12 tab client-zone-box-border active "
                      : "col-xs-12 tab client-zone-box-border "
                  }
                  onClick={() => {
                    handleActivePage("profile");
                  }}
                >
                  <div className="icon-container">
                    <i className="bi-person-fill icons">&nbsp;</i>
                    <span>{t("client-zone.client.t-profile")}</span>
                  </div>
                </div>
                <div
                  data-tab="address"
                  className={
                    clientActivePage === "address"
                      ? "col-xs-12 tab client-zone-box-border active "
                      : "col-xs-12 tab client-zone-box-border "
                  }
                  onClick={() => {
                    handleActivePage("address");
                  }}
                >
                  <div className="icon-container">
                    <i className="bi-houses-fill">&nbsp;</i>
                    <span>{t("client-zone.client.t-address")}</span>
                  </div>
                </div>
                <div
                  data-tab="Store"
                  className={
                    clientActivePage === "Store"
                      ? "col-xs-12 tab client-zone-box-border active "
                      : "col-xs-12 tab client-zone-box-border "
                  }
                  onClick={() => {
                    handleActivePage("Store");
                  }}
                >
                  <div className="icon-container">
                    <i className="bi-google-play icons">&nbsp;</i>
                    <span>{t("client-zone.client.t-store")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8">
              {clientActivePage === "profile" && <Profile data={data} />}
              {clientActivePage === "address" && <MyAddress data={data}/>}
              {clientActivePage === "Store" && <MyStore />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


export default ClientZone;