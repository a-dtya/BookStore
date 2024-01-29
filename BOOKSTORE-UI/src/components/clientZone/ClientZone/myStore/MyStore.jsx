import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import axios from "../../../../config/axiosConfig";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// const USER_URL = "orders/user/";

export default function MyStore() {

  const [loading, setLoading] = useState(false);
  // const userid = localStorage.getItem("userid");
  const order = useSelector((state) => state.order);
  console.log("order---->" , order)

  
  // const deletOrder= ()=>{
  //   setLoading(true);
  //   axios
  //     .delete(USER_URL+userid, {
  //       headers: {
  //         authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzUwMTAwMTM0Y2Y0NmE4NDRiMmRkZiIsImlhdCI6MTY4NTM4OTU5NH0.26zyfxpYchRego4180tU958pVPiIu1xM0W4ayxUbzQw",
  //       },
  //     })
  //     .then((res) => {
  //       console.log("order");
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }
  const { t } = useTranslation();

  return (
    <div className="orders box-primary ">
      <div className="orders-container">
      <div className="client-zone-orders-loader">
          {loading ? (
            <Spinner
              animation="border"
              role="status"
              className="container d-flex align-items-center justify-content-center">
              <span className="visually-hidden ">Loading...</span>
            </Spinner>
          ) : (
        <div className="client-zone-orders">
          <h3>{t("client-zone.store.title")}</h3>
          <div className="client-zone-orders-rows">
            <div className="client-zone-orders-rows">
            {order.map((e) => (
              <div className="card w-100 mb-3" style={{ width: "18rem", background: "rgba(240, 248, 255, 0.752)",}} key={e._id}>
                <div className="card-body">
                  <div className="row w-100">
                    <div className="col-6">
                      <h6 className="card-text">Address : <b> {e.address}</b></h6>
                      <h6 className="card-text ">Method: <b> {e.paymentMethod}</b></h6>
                      <h6 className="card-text">items : <b> {e.items.length}</b></h6>
                      <h6 className="card-text">Total Price : <b>{e.totalPrice}</b></h6>
                      {/* <button href="#" onSubmit={deletOrder} className="btn btn-primary">Remove Order</button> */}
                    </div>
                    <div className="col-6">
                      <div className="card-text">{e.items.map((b)=>{
                      return(
                        <div className="card mb-3" style={{maxWidth: "540px"}} key={b._id}>
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img src={b.book.bookImage} className="img-fluid rounded-start" alt="img_order"/>
                            </div>
                            <div className="col-md-8">
                              <div className="card-body text-center">
                              <Link to={`/details/${b.book._id}`} style={{textDecoration:"none"}}>
                                <h4 className="card-text ">{b.book.bookTitle}</h4>
                              </Link>
                                <h6 className="card-text text-color p-3">{b.book.price}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      )})}
                    </div>
                  </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
}
