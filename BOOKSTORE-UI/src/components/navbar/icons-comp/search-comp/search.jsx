import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import './../overlay.css';

function Search() {

    const books = useSelector((state) => state.books.books);

    const [inputValue, setInputValue] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]); 

    console.log('====================================');
    console.log('filteredBooks------->', filteredBooks);
    console.log('====================================');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };


    const searchQuery = () => {
        const filtered = books.filter((book) => book.bookTitle.toLowerCase().includes(inputValue.toLowerCase()));
        setFilteredBooks(filtered);

    }
    
    const navigate = useNavigate()
    const handelGoBack = () => {
        navigate(-1);
    };


  return (
    <>
        <div id="overlay">
            <button className='close d-flex justify-content-end'>
                <i className ="bi bi-x-circle p-3" id ="closeBtn" onClick={handelGoBack}></i>
            </button>

            <div className ='m-5 d-flex flex-row'>
                <input onChange={handleInputChange } value={inputValue} className="form-control form-control-lg rounded-start" type="text" placeholder="Search" aria-label=".form-control-lg example"/>
                <button onClick={searchQuery} id='searchBtn' className='rounded-end'><i className ="bi bi-search"></i></button>
            </div>
            <div id="item-list" className='row'>
                <div className='col'>
                    <div style={{height:'300px',overflowY:'auto'}}>
                        <ul style={{ listStyleType: 'none' }}>
                            {filteredBooks.map((book) => (
                                <li key={book._id}>
                                    <Link to={`/details/${book._id}`} className='text-decoration-none' >
                                        <div className='d-flex align-items-center px-3'>
                                            <img src={book.bookImage} alt={book.bookTitle} className='py-2' style={{height:'80px',width:'50px'}} />
                                            <h3 className=' text-white px-4'>{book.bookTitle}</h3>
                                        </div>
                                    </Link>
                                    <hr className='text-white ' style={{width:'95%',marginLeft:'15px'}} />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
}

export default Search;


