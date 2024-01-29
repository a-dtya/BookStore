import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Spinner from "react-bootstrap/Spinner";


export default function MyAddress({data}) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  return (
    <div className="addresses box-primary">
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          className="container d-flex align-items-center justify-content-center">
          <span className="visually-hidden ">Loading...</span>
        </Spinner>
      ) : (
        <div className="addresses-container ">
          <div className="row">
            {data ? (
              <div className="card mb-3" style={{maxWidth: '540px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={
                    data.image
                      ? `${data?.image}`
                      : `https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png`
                    }
                    data-src="https://cdn-cms-s.f-static.net/versions/2/wizard/clientZone/images/noImage.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <h4 className="card-text text-center"> Hello <b>{data.firstName}</b></h4>
                    <p className="card-text"><i className="bi bi-person-fill fs-5"></i> FullName : <b> {data.firstName} {data.lastName}</b></p>
                    <p className="card-text"><i className="bi bi-geo-alt-fill fs-5"></i> Address : <b> {data.country} - {data.address}</b></p>
                    <p className="card-text"><i className="bi bi-telephone-forward-fill fs-5"></i> PhoneNumber : <b> {data.phoneNumber}</b></p>
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <div className="address-empty-msg text-center">
                <h4>{t("client-zone.myaddress.address.empty-title")}</h4>
                <span className="line"></span>
              </div>
            )}
          </div>
          <div className="address-container-btn text-center btn-danger"></div>
        </div>
      )}
    </div>
  );
}
