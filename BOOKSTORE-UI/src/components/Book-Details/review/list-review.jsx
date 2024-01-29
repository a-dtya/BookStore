import showRating from './show-rating';
import { useTranslation } from 'react-i18next';
import { useEffect,useState } from 'react';
import axios from "../../../config/axiosConfig";
import './review.css';


function ListReview({bookId,WWE}) {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
      axios.get(`/review/book/${bookId}`)
        .then((response) => {
          setReviews(response.data.bookReviews);
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        });
  }, [bookId,WWE]);
  // reviews.map((review) => {
  // });

 
  return (
    <>
      {reviews.length === 0 && <p className="text-center">No Reviews yet on this book</p>}
      <ul className="list-group m-2 list" style={{height:'500px',overflowY: 'auto'}}>
        {reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((review,index) => {
          return (
            <li className="list-group-item d-flex border"  key={index}>
              <div className="">
                <div className="d-flex justify-content-center">
                  <img src={review.user.image} width={'50px'} className="rounded-circle m-2" alt="User Avatar" />
                  <h5 className="fw-bold pt-4">{`${review.user.firstName} ${review.user.lastName}`}</h5>
                </div>
                <div className="ms-3">
                  <p>{review.comment}</p>
                  <p>{showRating(review.rating)}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListReview;
