import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
import StarRate from "../rating/rating";
import { useTranslation } from 'react-i18next';

const Related = ({catId}) => {
  console.log('relatedBooks from Related component catId:---catId--->',catId );
  // console.log('relatedBooks from Related component xdxdxd:------>',relatedBooks );

  const { t } = useTranslation();
  const { id } = useParams();
  // console.log('category from Related component :---Book ID--->',id );

  // const catId = useSelector((state) => state.books.categoryId);
  // console.log('category from Related component :---catId --->',catId );

  const books = useSelector((state) => state.books.books);
  const relatedBooks = books.filter((book) => book.category === catId && book._id !==id );
  const style = { boxShadow: "10px 10px 5px #aaaaaa" };

  return (
    <>
      {relatedBooks.slice(0, 4).map((book) => {
        console.log('i am in related books',book)
        return (
          <div className="col mb-5" key={book._id}>
            <div className="card h-100" style={style}>
              <img className="card-img-top" src={book.bookImage} style={{height:'350px'}} />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{book.bookTitle}</h5>
                  <h6 className="card-text">{book.price}.00 {t('product-details.p-egp')}</h6>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link to={`/details/${book._id}`} className="btn btn-outline-dark mt-auto">{t('product-list.product.btn')}</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Related;
