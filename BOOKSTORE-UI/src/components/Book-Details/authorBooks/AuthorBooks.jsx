import React from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import StarRate from '../../rating/rating'


const AuthorBooks = () => {
  const style = { boxShadow: '10px 10px 5px #aaaaaa' }

  const authorId = useSelector((state) => state.authors.authorID)
  const authorBooks = useSelector((state) => state.books.books).filter((book)=>book.author._id === authorId);
  console.log('authorBooks from:------> AuthorBooks--->',authorBooks );


  return (
<>
<div className="container" >
    <div className="row row-cols-md-2 row-cols-lg-4  row-cols-1 col-12 px-5 pt-5 justify-content-center" >
      {
        authorBooks.map((book) => (
          <div className="col mb-5" style={{ height: '620px' }} key={book._id}>
            <div className="card h-100" style={style}>
              <img className="card-img-top" src={book.bookImage} style={{ height: '340px' }} />
              <div className="card-body p-4">
                <div className="text-center" >
                  <h5 className="fw-bolder"  >{book.bookTitle}</h5>
                  <p className="card-text">{book.price}.00$</p>
                  <div >
                    <StarRate/>
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link to={`/details/${book._id}`}>
                    <a className="btn btn-outline-dark mt-auto">
                      Book Details
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
</div>
</>
  );
  
}

export default AuthorBooks
