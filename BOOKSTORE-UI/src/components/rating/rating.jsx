import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './rating.css'

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);
  const [isHover, setIsHover] = useState(null);

  return (
    <div className="star-wrapper">
      <div className="star">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;

          return (
            <button
              key={index}
              onMouseOver={() => setIsHover(ratingValue)}
              onMouseOut={() => setIsHover(null)}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              onClick={() => setRating(ratingValue)}>
              <FaStar
                className="FaStar"
                size={80}
                style={{ color: ratingValue <= (hoverFill || rating) ? "#900c3f" : "#ccc"}}
                onChange={(ratingValue) => setRating(ratingValue)}
                value={ratingValue}/>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarRate;
