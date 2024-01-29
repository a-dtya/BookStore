import React, { useEffect } from "react";
import ListReview from "./list-review";
import { useState } from "react";
import FormComment from "./form-comment";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../../config/axiosConfig";

function Review() {

  const { t } = useTranslation();

  const token = localStorage.getItem('user');
  const user = localStorage.getItem("userid");
  ////////////////////////////////////////////
  const { id } = useParams();
  console.log(' id---from Review component------------>',id);
  
  const [ID, setId] = useState('');
  useEffect(()=>{
    setId(id)
  },[id]);

  const order = useSelector((state) => state.order);
  const order2 = useSelector((state) => state.order.map((o)=>{return (o)}))
  const Book = useSelector((state) => state.books.books.find((book) => book._id === id));
  const [bookReviews, setReviews] = useState([]);
  console.log(order.length);
  console.log(order);
  console.log(order2);

  useEffect(() => {
    axios.get(`/review/book/${Book._id}`).then((data) => {
      console.log('data------>',data);
      setReviews(data.data.bookReviews);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  const addReview = (review) => {
    axios.post(`/review/book/${Book._id}`, review).then((data) => {
      axios.get(`/users/${review.user}`,{ headers: {
          Authorization: `Bearer ${token}`,
        },}
      ).then((res)=>{
        const populatedReview = {
          ...review,
          user:res.data.user
        }
        setReviews([populatedReview, ...bookReviews]);
      })
    }).catch((err) => {
      console.log(err);
    });
    console.log('ffffffff',review);
  };

  var x;
  order2.map((pro) => {
    pro.items.map((e)=>{
      if (e.book._id === Book._id) {
        return (x = true);
      } else if (e.book._id == !Book._id) {
        return (x = false);
        }
    })
 });

  return (
    <>
      <div className="container">
        <div className="row" style={{ width: "50%" }}>
          <div className="heading d-flex flex-column align-items-start">
            <div>
              <h2>{t("review.title")}</h2>
            </div>
            <div className="small"></div>
          </div>
          {user ? (
            <div>
              {order.length == 0 ? ( <h5 className="text-center text-color">Make an order to write a review</h5> ) 
              : (
                <div>
                  {x ? ( <FormComment addReview={addReview} />  ) 
                  : ( <h4 className="text-center text-color">Make an order to write a review</h4>
                  )}
                </div>
              )}
            </div>
          ) : (
            <h4 className="text-center p-4 fw-bold">
              Please <Link to="/login">Sign In</Link> to write a review
            </h4>
          )}
          <ListReview WWE={bookReviews} bookId={ID}/>
        </div>
      </div>
    </>
  );
}

export default Review;
