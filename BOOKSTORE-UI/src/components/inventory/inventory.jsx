import React, { useEffect, useState }from 'react'
import axios from 'axios';
import './inventory.css'
import Footer from '../footer/footer';
import { addBook } from '../../store/reducers/booksSlice';
import { useDispatch } from 'react-redux';

export default function Inventory() {
  const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookTitle, setBookTitle] = useState('');
    const [bookPages, setBookPages] = useState('');
    const [price, setPrice] = useState('');
    const [bookImage, setBookImage] = useState('');
    const [author,setAuthor] = useState('')
    const [category,setCategory]=useState('')
    const [searchTerm,setSearchTerm]=useState('')
    const [updatedCard,setUpdatedCard]=useState([])
    const [respons,setRespons] = useState([])
    const [one,setOne]=useState([])
    const [two,setTwo]=useState([])
    const [authorName, setAuthorName] = useState('');
    const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
    const [isUserModalOpen,setIsUserModalOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false);

 
    const [totalusers,setTotalUsers] = useState([])
    var auth = null
    var cat = null
    var authorname = null
    var categoryname = null
   
    
   
   
    const openModal = async() => {
      setIsModalOpen(true);
      
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const openAuthorModal = () => {
      setIsAuthorModalOpen(true);
    };  3
  
    const closeAuthorModal = () => {
      setIsAuthorModalOpen(false);
    };
    const openUserModal = ()=>{
      setIsUserModalOpen(true)
    }
    const closeUserModal = ()=>{
      setIsUserModalOpen(false)
    }
    const handleUsers = async()=>{
      setTotalUsers({})
      const totusers = await axios.get("http://localhost:3001/users")
      setTotalUsers({...totalusers,...totusers.data})
      console.log(totalusers)
      openUserModal()
    }
    const handleUserDelete = async(id)=>{
      const deluser = await axios.delete(`http://localhost:3001/users/${id}`)
      console.log("deleted")
      closeUserModal()

    }
    const handleAddAuthor = async () => {
      try {
        // Your logic to add an author
        const response = await axios.post('http://localhost:3001/authors', { name: authorName });
        console.log('Author added successfully:', response.data);
  
        // Close the modal after adding the author
        closeAuthorModal();
      } catch (error) {
        console.log('Error adding author:', error);
      }
    };
    const handleAuthorSearch = async(e)=>{
        e.preventDefault()
        try {
            const resp = await axios.get("http://localhost:3001/authors")
            auth= resp.data.find((e)=> e.name === author)
            if (auth===null){
                console.log("No such author exists")
            }else{
                console.log(auth)
            }
          } catch (error) {
            console.log("author route failed")
          }
    }
  
    const handleCategorySearch = async(e)=>{
        e.preventDefault()
        try {
            const resp = await axios.get("http://localhost:3001/categories")
            cat= resp.data.find((e)=> e.name === category)
            if (cat===null){
                console.log("No such cat exists")
            }else{
                console.log(cat)
            }
          } catch (error) {
            console.log("cat route failed")
          }
    }
    const handleSearch = async(e)=>{
       
        console.log(searchTerm)
        setUpdatedCard([])
        console.log(updatedCard)
        const resp = await axios.get("http://localhost:3001/books")
        const item = resp.data.find((en)=>en.bookTitle === searchTerm)
        if(item){
          setUpdatedCard({...updatedCard,...item})
        }
        
        const oney = await axios.get("http://localhost:3001/authors")
        const twoy = await axios.get("http://localhost:3001/categories")
        setOne(oney.data)
        setTwo(twoy.data)
        
    }
    const handleUpdateStock = async(bookTitle)=>{
        const ans = await axios.patch(`http://localhost:3001/books/${updatedCard._id}`,{
        bookTitle: updatedCard.bookTitle,
        bookPages: updatedCard.bookPages,
        price: updatedCard.price,
        bookImage: updatedCard.bookImage,
        author: updatedCard.author,
        category: updatedCard.category,
        bookStock: ++updatedCard.bookStock
        })
        handleSearch()
        console.log(ans.data)
    }
    const handleDeleteRecord = async(bookTitle)=>{
        const ans = await axios.delete(`http://localhost:3001/books/${updatedCard._id}`)
        console.log(ans.data)
        handleSearch()
    }
    const handleFormSubmit = async(e) => {
      e.preventDefault();
     
      console.log({
        bookTitle,
        bookPages,
        price,
        bookImage,
      });
      const newBook = {
        bookTitle: bookTitle,
        bookPages: bookPages,
        price: price,
        bookImage: bookImage,
        author: auth._id,
        category: cat._id
      }

      dispatch(addBook(newBook)).then(()=>{
          console.log("added")
         
      }).catch((e)=>{
        console.error(`Book relation error ${e}`)
      })
      console.log("dispatched")
      console.log(newBook)
      

      try {

        const response = await axios.post("http://localhost:3001/books", newBook)
        console.log('Book added successfully:', response.data);
      } catch (error) {
        console.log('Book creation error')
      }
      closeModal();
    };
  const fetchBooks = async(e) => {
    e.preventDefault()
    try {
        const response = await axios.get("http://localhost:3001/books")
        console.log(response.data)
    } catch (error) {
        console.log("Error in fetching books data")
    }
  }
    return (
        <>
      <div>
      <div>
        <h3 className='text-center mt-3'>
            Inventory
        </h3>
      </div>
      <div>
        <input
        className='search-container'
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='btn-separator'>
        <button className="open-modal-btn" style={{marginLeft:'1rem'}} onClick={handleUsers}>
            Show Users
        </button>
        <button className='search-btn' onClick={handleSearch}>Search</button>
        
        <button className='open-modal-btn' onClick={openModal}>Add Book</button>
        <button className="open-modal-btn" style={{marginLeft:'1rem'}} onClick={openAuthorModal}>
              Add Author
            </button>
       

      <div>
      <div className="book-card" style={{marginLeft:'35%',width:'30%'}}>
         {
            Object.keys(updatedCard).length === 0  ? (
                <p>No such book exists!</p>
            ):(
                <>
             

                

                <img src={updatedCard.bookImage} alt={updatedCard.bookTitle} style={{height:'12rem',width:'12rem'}} />
                <h3>{updatedCard.bookTitle}</h3>
                {
                    one === null || two === null ? (
                        <p>
                            No Such Book Available.
                        </p>
                    ):(
                        <p>
                            DESCRIPTION
                        </p>
                    )
                }
                
                {
                    one!==null && one.map((item)=>{
                        if(item && item._id === updatedCard.author.name){
                            return(
                            <p id={item._id}>
                                Author: {item.name || 'Unknown'}
                            </p>
                        )
                        }
                        return null
                       
                        
                    })

                }
                {
                    two!==null && two.map((item)=>{
                        if(item && item._id === updatedCard.category.name){
                            return(
                            <p id={item._id}>
                                Category: {item.name || 'Psychology'}
                            </p>
                        )
                        }
                        return null
                        })

                }
                {
                    <p>Stock: {updatedCard.bookStock}</p>
                }
                
            

            <div>
            
              <button style={{backgroundColor: '#3498db',
    color: '#fff',
    marginTop:'5px',
    marginRight:'1rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',}} onMouseOver={(e) => {
    e.target.style.backgroundColor = '#2980b9';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#3498db';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }}
  onClick={() => handleUpdateStock(updatedCard.bookTitle)}>Update Stock</button>
              <button style={{backgroundColor: '#3498db',
    color: '#fff',
    marginTop:'5px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',}} onMouseOver={(e) => {
    e.target.style.backgroundColor = '#2980b9';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#3498db';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }}
              onClick={() => handleDeleteRecord(updatedCard.bookTitle)}>Delete Record</button>

            </div>
            </>
            
               
            )
          } 
          </div>
          
            
          
        
      </div>
    </div>
        
        </div>
        {isAuthorModalOpen && (
        
          <form onSubmit={handleFormSubmit} className="author-form" style={{width:'50%',marginLeft:'25%'}}>
            <div className="form-group">
              <label htmlFor="authorName">Author Name:</label>
              <input
                type="text"
                id="authorName"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </div>
            <button style={{backgroundColor: '#3498db',
    color: '#fff',
    marginTop:'5px',
    marginRight:'1rem',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',}} onMouseOver={(e) => {
    e.target.style.backgroundColor = '#2980b9';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#3498db';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }} type="button" onClick={handleAddAuthor}>
              Add Author
            </button>
          </form>
        
      )}
      {
        isUserModalOpen && (
          console.log(Object.values(totalusers))
        )
      }
      {
        isUserModalOpen && (
        
          <ul style={{ listStyle: 'none', padding: 0 }}>
          {totalusers && Object.values(totalusers).map((item) => (
            item.firstName!=="admin" && (
    <li key={item._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', marginBottom: '5px', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width:'50%',marginLeft:'30%' }}>
      <span>{item.firstName}{" "}{item.lastName}</span>
      <button style={{ padding: '5px 10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s, box-shadow 0.3s' }}
              onClick={() => handleUserDelete(item._id)}>
        Delete
      </button>
    </li>)
  ))}

          </ul>
        )
      }
        {isModalOpen && (
            <form onSubmit={handleFormSubmit} className="book-form">
            <div>
            
  <div className="form-group">
    <span className="close overlay" onClick={closeModal}>
      &times;
    </span>
    <label htmlFor="bookTitle">Book Title:</label>
    <input
      type="text"
      id="bookTitle"
      value={bookTitle}
      onChange={(e) => setBookTitle(e.target.value)}
    />
  </div>
  <div className="form-group">
  <label htmlFor="bookAuthor">Book Author:</label>
    <input
      type="text"
      id="bookAuthor"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
    />
    <button style={{backgroundColor: '#3498db',
    color: '#fff',
    marginTop:'5px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',}} onMouseOver={(e) => {
    e.target.style.backgroundColor = '#2980b9';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#3498db';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }} onClick={handleAuthorSearch}>create</button>
    </div>
    <div className="form-group">
  <label htmlFor="bookCat">Book Category:</label>
    <input
      type="text"
      id="bookCat"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    />
    <button style={{backgroundColor: '#3498db',
    color: '#fff',
    marginTop:'5px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, box-shadow 0.3s',}} onMouseOver={(e) => {
    e.target.style.backgroundColor = '#2980b9';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#3498db';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  }} onClick={handleCategorySearch}>create</button>
    </div>
  <div className="form-group">
    <label htmlFor="bookPages">Book Pages:</label>
    <input
      type="text"
      id="bookPages"
      value={bookPages}
      onChange={(e) => setBookPages(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="price">Price:</label>
    <input
      type="text"
      id="price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="bookImage">Book Image:</label>
    <input
      type="text"
      id="bookImage"
      value={bookImage}
      onChange={(e) => setBookImage(e.target.value)}
    />
  </div>
  </div>

  <button type="submit" className="submit-btn">
    Submit
  </button>
</form>


        )
        }

      </div>
      
      </>
    );
}
