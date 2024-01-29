import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilterCount,
  addPriceFilter,
  removePriceFilter,
  setAuthorFilter,
  removeAuthorFilter,
} from "../../../store/reducers/booksSlice";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import "./sidebar.css";

const Filter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id: categoryId } = useParams();

  //==========================================================//
  useEffect(() => {
    dispatch(resetFilterCount());
  }, [categoryId]);

  //2th edit
  // State to store selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    author: [],
  });
  //==========================================================//
  const categoryBooks = useSelector((state) =>
    state.books.books.filter(
      (book) =>
        book.category === state.books.categoryId &&
        (selectedFilters.price.length === 0 ||
          selectedFilters.price.includes(book.price.toString())) &&
        (selectedFilters.author.length === 0 ||
          selectedFilters.author.includes(book.author.name))
    )
  );

  const authorsBooks = useSelector((state) =>
    state.books.books
      .filter((book) => book.category === state.books.categoryId)
      .map((book) => book.author)
  );
  console.log("num of books categoryBooks ----->", authorsBooks);
  const uniqueAuthors = authorsBooks.filter(
    (book, index, self) => index === self.findIndex((b) => b.name === book.name)
  );
  console.log("authors------->", uniqueAuthors);

  //============================================//
  const handelSelectedPrice = (event) => {
    const price = event.target.value;
    const isChecked = event.target.checked;
    console.log("SelectedPrice:", price);

    if (isChecked) {
      dispatch(addPriceFilter(price));
    } else if (!isChecked) {
      dispatch(removePriceFilter(price));
    }
  };

  const handelSelectedAuther = (event) => {
    const author = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(setAuthorFilter(author));
    } else if (!isChecked) {
      dispatch(removeAuthorFilter(author));
    }
  };

  //------------Btn-Collaps[+,-]--------------//
  const [isClick, setClick] = useState("false");
  const handleclick = () => {
    setClick(!isClick);
  };
  return (
    <>
      <div className="filter-container">
        <h3 className="filter-title">{t("product-list.filter.title")}</h3>
        <hr />

        {/* Filter by Price */}
        <div className="filter-section">
          <div className="filter-header" onClick={handleclick}>
            <h5>{t("product-list.filter.t-price")}</h5>
            <i className={`bi ${isClick ? "bi-plus" : "bi-dash"}`}></i>
          </div>
          <div
            className={`collapse multi-collapse ${isClick ? "" : "show"}`}
            id="multiCollapseExample1"
          >
            {/* Price Options */}
            {/* Repeat the following block for each price range */}
            <div className="filter-option">
              <input
                className="form-check-input"
                type="checkbox"
                id="0-49"
                value="0-49"
                onChange={handelSelectedPrice}
              />
              <label className="form-check-label" htmlFor="0-49">
                {t("product-list.filter.p1")}
              </label>
            </div>
            <div className="filter-option">
            <input
              className="form-check-input"
              type="checkbox"
              id="50-100"
              value="50-100"
              onChange={handelSelectedPrice}
            />
            <label className="form-check-label" htmlFor="0-49">
              {t("product-list.filter.p2")}
            </label>
            </div>
            {/* ... other price options */}
          </div>
        </div>

        {/* Filter by Author */}
        <div className="filter-section">
          <div className="filter-header" onClick={handleclick}>
            <h5>{t("product-list.filter.t-author")}</h5>
            <i className={`bi ${isClick ? "bi-plus" : "bi-dash"}`}></i>
          </div>
          <div
            className={`collapse multi-collapse ${isClick ? "" : "show"}`}
            id="multiCollapseExample2"
          >
            {/* Author Options */}
            {uniqueAuthors.map((author) => (
              <div className="filter-option" key={author._id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={author._id}
                  value={author.name}
                  onChange={handelSelectedAuther}
                />
                <label className="form-check-label" htmlFor={author._id}>
                  {author.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;