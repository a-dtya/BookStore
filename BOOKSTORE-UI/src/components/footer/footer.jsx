import React from "react";
import "../navbar/nav.css"
import "./footer.css"

import { NavLink } from "react-router-dom";
import { useTranslation} from 'react-i18next'



const Footer = () => {

  const { t } = useTranslation();
  return (
    <>
      <div className="footer container-fluid m-0 p-0 custom-footer-navbar">
        <nav className="navbar navbar-expand-lg navbar-light p-2 d-flex custom-footer-navbar">
          <ul className="list-unstyled navbar-brand pt-4">
            <li className="mt-1 col-md-9 col-xs-12 text-md-left text-center px-5 fs-6">
              <p style={{ color: "black" }}>{t("footer.desc2")}</p>
            </li>
          </ul>

          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav footer d-flex mx-4">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">
                  {t("footer.home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  {t("footer.store")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tranding" className="nav-link">
                  {t("TRENDING NOW")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  {t("footer.about")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  {t("footer.contact")}
                </NavLink>
              </li>
            </ul>
            <br />
            {/* <!-- Section: Social media --> */}
          </div>
        </nav>
        <div className="text-center text-white social-div">
          {/* <!-- Grid container --> */}
          <div className="container" id="footer_social">
            {/* <!-- Section: Social media --> */}
            <section className="pb-3">
              {/* <!-- Facebook --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-facebook"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.twitter.com/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-twitter"></i>
              </a>

              {/* <!-- Google --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.google.com/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-google"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.instagram.com/"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;