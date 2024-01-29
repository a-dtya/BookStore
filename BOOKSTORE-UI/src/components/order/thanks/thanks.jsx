import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./thanks.css";

function ThanksForYourOrder() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function navigateHome() {
    navigate("/home");
  }

  return (
    <>
      <div
        className="heading d-flex flex-column align-items-center mt-5 "
        style={{ minHeight: "55vh" }}
      >
        <div className="mt-5">
          <h1>{t("order.thanks")}</h1>
        </div>
        <div className="small"></div>

        <div>
          <button
            className="btn btn-custom btn-lg w-100 mt-5  "
            id="continue-shopping"
            onClick={() => {
              navigateHome();
            }}
          >
            {t("order.btn-continue")}
          </button>
        </div>
      </div>
    </>
  );
}

export default ThanksForYourOrder;