import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { catId } from "../../../store/reducers/booksSlice";
import "./product.css";

const Product = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(()=>{
    if(id){
      dispatch(catId(id));
    }
  },[id,dispatch])
  

  const books = useSelector((state) => {
    if (state.books.filterCount > 0) {
      return state.books.filteredBooks;
    } else if (state.books.categoryId) {
      return state.books.books.filter(
        (book) => book.category === state.books.categoryId
      );
    } else {
      return state.books.books;
    }
  });
  console.log(books);

  const [selectedSortOption, setSelectedSortOption] = useState("");

  const handleSortChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const sortedBooks = [...books].sort((a, b) => {
    if (selectedSortOption === "Des") {
      return b.price - a.price;
    } else if (selectedSortOption === "Asc") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <>
      <div className="sort-select mb-3">
        <select
          className="form-select form-select-lg"
          aria-label=".form-select-lg example"
          value={selectedSortOption}
          onChange={handleSortChange}
        >
          <option defaultValue hidden>
            {t("product-list.sort.title")}
          </option>
          <option value="Des">{t("product-list.sort.op1")}</option>
          <option value="Asc">{t("product-list.sort.op2")}</option>
        </select>
      </div>
  
      {sortedBooks.length === 0 ? (
        <h1 className="books-not-found">Books Not found</h1>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {sortedBooks.map((book) => (
            <div className="col mb-4" key={book._id}>
              <div className="card h-100">
                <img className="card-img-top" src={book.bookImage} alt={book.bookTitle} />
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <span className="card-price">{book.price}.00$</span>
                  <Link to={`/details/${book._id}`} className="btn btn-outline-dark mt-auto">
                    {t('product-list.product.btn')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Product;