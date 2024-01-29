import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FormComment({ addReview }) {

  const { t } = useTranslation();
  ////////////////////////////////////////////
  const [comment, setcomment] = useState("");
  const [rating, setRating] = useState(0);

  const user = localStorage.getItem("userid");
  const handleRating = (rate) => {
    setRating(rate);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const review = {
      user,
      comment,
      rating,
    };
    // console.log(review);
    addReview(review);
    /////////////////////
    setcomment("");
    setRating(0);
  };
  const isDisabled = () => {
    if (!comment || !rating > 0) {
      return true;
    }
  };

  return (
    <>
      <form onSubmit={(e) => formSubmit(e)} >
        <div>
          <textarea className="form-control rounded" name="comment" rows="3"
            value={comment}
            onChange={(e) => {setcomment(e.target.value);}}
            placeholder="Comment"
              // placeholder={t("review.l-comment")}
          ></textarea>
        </div>
        <div>
          <Rating
            size={"25px"}
            fillColor="#900c3f"
            onClick={handleRating}
            ratingValue={rating}/>
          </div>
          <div className="col-auto mt-3">
            <button type="submit" className="btn btn-primary mb-3" disabled={isDisabled()}>{t("review.btn")}</button>
          </div>
      </form>
    </>
  );
}

export default FormComment;
