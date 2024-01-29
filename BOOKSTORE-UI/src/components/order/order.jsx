import { useState, useContext, useEffect } from "react";
import InfoComponent from "./infoPage/info";
import DeliveryComponent from "./deliveryPage/delivery";
import PaymentComponent from "./paymentPage/payment";
import { orderActivePageCntxt } from "./orderRoute";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./order.css";
import ThanksForYourOrder from "./thanks/thanks";
import { emptyCart } from "../../store/reducers/cartSlice";
import { setOrders } from "../../store/reducers/orderSlice";

function Order() {
  const { t } = useTranslation();
  const cart = useSelector((state) => state.cart);
  let total = cart.reduce((total, product) => {
    return total + Number(product.book.price) * product.quantity;
  }, 0);
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const userid = localStorage.getItem("userid");
  const [orderDone, setOrderDone] = useState(false);
  const [order, setOrder] = useState({
    user: userid,
    address: "",
    totalPrice: total,
    status: "pending",
    items: cart,
    paymentMethod: "Cash On Delivery",
  });
  console.log(cart);
  function handlePayment() {
    if (total !== 0) {
      axios
        .post("http://localhost:3001/orders/", order, {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzUwMTAwMTM0Y2Y0NmE4NDRiMmRkZiIsImlhdCI6MTY4NTM4OTU5NH0.26zyfxpYchRego4180tU958pVPiIu1xM0W4ayxUbzQw",
          },
        })
        .then((data) => {
          console.log(data);
          dispatch(emptyCart());
          setOrderDone(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    dispatch(setOrders([...orders, order]));
  }

  const { orderActivePage, updatePage } = useContext(orderActivePageCntxt);

  useEffect(() => {
    console.log(cart);
  }, [order]);

  function handleActivePage(activePagee) {
    updatePage(activePagee);
  }

  return (
    <>
      {orderDone == true ? (
        <ThanksForYourOrder />
      ) : (
        <>
          <div className="heading d-flex flex-column align-items-center">
            <div>
              <h1>{t("order.title")}</h1>
            </div>
            <div className="small"></div>
          </div>

          <div className="content">
            <div className="container">
              <div className="row" id="content-nav">
                {/*<div
              className={
                orderActivePage === "nav-info"
                  ? "col-4 d-flex align-items-center"
                  : "col-4 d-flex align-items-center in-active"
              }
              id="nav-info" >
              <i
                className={
                  orderActivePage === "nav-info"
                    ? "bi bi-1-square-fill page-num"
                    : "bi bi-1-square page-num"
                }
                style={{
                  fontSize: "2rem",
                  color: "#900c3f",
                  margin: "0 1rem",
                }}
              />
              <i
                className="bi bi-info-circle"
                style={{ paddingRight: "1rem" }}
              />
              <span className="nav-span mx-3">{t('order.info')}</span>
            </div> */}

                <div
                  className={
                    orderActivePage === "nav-delivery"
                      ? "col-4 d-flex align-items-center"
                      : "col-4 d-flex align-items-center in-active"
                  }
                  id="nav-delivery"
                >
                  <i
                    className={
                      orderActivePage === "nav-delivery"
                        ? "bi bi-1-square-fill page-num"
                        : "bi bi-1-square page-num"
                    }
                    style={{
                      fontSize: "2rem",
                      
                      color: "000000",
                      margin:"0 1rem",
                    }}
                  />
                  <i
                    className="bi bi-truck"
                    style={{ color: "#000000", paddingRight: "1rem" }}
                  />
                  <span className="nav-span mx-3">{t("order.delivery")}</span>
                </div>

                <div
                  className={
                    orderActivePage === "nav-payment"
                      ? "col-4 d-flex align-items-center"
                      : "col-4 d-flex align-items-center in-active"
                  }
                  id="nav-payment"
                >
                  <i
                    className={
                      orderActivePage === "nav-payment"
                        ? "bi bi-2-square-fill page-num"
                        : "bi bi-2-square page-num"
                    }
                    style={{
                      fontSize: "2rem",
                      color: "#000000",

                      margin: "0 1rem",
                    }}
                  />
                  <i
                    className="bi bi-credit-card"
                    style={{ color: "#000000", paddingRight: "1rem" }}
                  />
                  <span className="nav-span mx-3">{t("order.payment")}</span>
                </div>
              </div>
              {/* {orderActivePage==='nav-info'     &&  <InfoComponent order={order}     updatingOrder={setOrder} /> } */}
              {orderActivePage === "nav-delivery" && (
                <DeliveryComponent order={order} updatingOrder={setOrder} />
              )}
              {orderActivePage === "nav-payment" && (
                <PaymentComponent
                  order={order}
                  updatingOrder={setOrder}
                  payment={handlePayment}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Order;