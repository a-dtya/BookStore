import { useContext, useState } from "react";
import { orderActivePageCntxt } from "../orderRoute";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import "./delivery.css";

function DeliveryComponent(props) {
  const { t } = useTranslation();
  const { updatePage } = useContext(orderActivePageCntxt);
  const cart = useSelector((state) => state.cart);

  function handleSubmit(values) {
    props.updatingOrder({ ...props.order, address: values.address });
    updatePage("nav-payment");
  }

  const validationSchema = yup.object().shape({
    address: yup.string().required("Please enter your address"),
  });

  return (
    <>
      <div
        className="row flex-column flex-md-row mx-3"
        id="delivery-page" 
      >
        <div className="col-12 col-md-8">
          <Formik
            initialValues={{ address: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form id="delivery-options">
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  {t("Enter your address:")}
                </label>
                <Field
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-danger"
                />
              </div>

              {/* Wrap both the text field and button in a common container */}
              <div className="d-flex justify-content-start align-items-center">
                <button
                  type="submit"
                  className="btn btn-custom btn-lg mb-5 "
                  id="delivery-save"
                >
                  {t("order.delivery-sec.btn")}
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="col-12 col-md-4">
          <div id="order-container-delivery" className="card-container">
            {cart.map((product) => (
              <div
                className="card d-flex flex-row mt-3 order-details h-25"
                key={product.book._id}
              >
                <img
                  src={product.book.bookImage}
                  className="card-img-top w-50"
                  style={{ objectFit: "contain", height: "100%" }}
                  alt={product.book.bookTitle}
                />
                <div className="card-body">
                  <h5>{product.book.bookTitle}</h5>
                  <span>
                    {t("order.delivery-sec.quan")} : {product.quantity}
                  </span>
                  <h5 style={{ color: "#000000" }}>
                    {Number(product.book.price) * product.quantity}.00{" "}
                    INR
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="row m-5 " id="total">
            <div className="col-12">
              {/* Retained the new button for total price */}
              <button
                className="btn btn-custom btn-lg btn-brown"
                id="total-price-btn"
              >
                Total:{" "}
                <span style={{ color: "#000000", fontFamily: "Georgia" }}>
                  {cart.reduce((total, product) => {
                    return (
                      total + Number(product.book.price) * product.quantity
                    );
                  }, 0)}
                  .00 INR
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryComponent;