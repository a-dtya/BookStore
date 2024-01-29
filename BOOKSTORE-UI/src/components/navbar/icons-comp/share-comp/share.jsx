import { useNavigate } from 'react-router-dom';
// import './search.css';

function Share() {
     
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
            <div className ='m-5 d-flex flex-row justify-content-center icons'>
                <div className='p-4'><i className="bi bi-facebook"></i></div>
                <div className='p-4'><i className="bi bi-instagram"></i></div>
            </div>
        </div>

    </>
  );
}

export default Share;

