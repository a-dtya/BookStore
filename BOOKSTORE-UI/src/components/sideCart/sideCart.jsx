import { useDispatch, useSelector } from 'react-redux';
import { decreaseBookQuantity, emptyCart, increaseBookQuantity, removeFromCart ,updateCartInLocalStorage } from '../../store/reducers/cartSlice';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import './sideCart.css';
import { useEffect } from 'react';

function SideCart({ isCartOpen, handleClose }) {

  const {t} = useTranslation();
  //////////////////////////////////////////////
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    updateCartInLocalStorage(cart);
  }, [cart]);

  console.log(cart);
  const count = cart.reduce((total, product) => {
    return total + product.quantity
  }, 0)
  const dispatch = useDispatch();

  return (
    <>
      <div className='continer'>
        <div className = {`side-cart ${isCartOpen ? 'active' : ''}`} id="mySideCart">
          <header>
            <h3>{t('side-cart.title')}</h3>
            <a id="closeBtn" onClick={() => { handleClose()}}>×</a>
          </header>
          <div className="side-cart-body">
            {count <= 0 ? (
              <div>
                <div className="empty-cart text-center">
                  <h4>{t('side-cart.empty-text')}</h4>
                </div>
              </div>
            ) : (
              <div className='card-product'>
              {cart.map((product)=>{
                return (
                  <div className="card mb-3" style={{maxWidth: "480px"}} key={product.book._id}>
                    <div className="row g-0" >
                      <div className="col-md-4">
                        <img  className="img-fluid " src={product.book.bookImage} alt="cover_image"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <div className='d-flex justify-content-between'>
                            <h3 className="card-title">{product.book.bookTitle}</h3>
                            <i className="bi bi-trash" onClick={() => {dispatch(removeFromCart(product));  }}></i>
                          </div>
                          <p className="card-text price">{Number(product.book.price) * product.quantity}.00 INR</p>
                          <div className='countbtn'>
                            <button className='minus' onClick={() => {dispatch(decreaseBookQuantity(product));   }}><i className="bi bi-dash"></i></button>
                            <input type="text" readOnly value={product.quantity} className='border'/>
                            <button className='plus' onClick={() => {dispatch(increaseBookQuantity(product));  }}><i className="bi bi-plus"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
              }

                <div>
                  <p className='d-flex justify-content-between'>
                    <h6>{t('side-cart.total')} : </h6>
                    <h6 onClick={() => {dispatch(emptyCart());  }} style={{ color: 'blue' , cursor:'pointer'}}>{t('side-cart.btn-delete-all')}</h6>
                  </p>
                  <p className='fs-5' style={{ fontWeight: 'bolder'}}>
                    {cart.reduce((total, product) => {
                      return (
                        total + Number(product.book.price) * product.quantity
                      )
                    }, 0)}.00 INR
                  </p>
                </div>
                <div>
                  {
                    localStorage.getItem('user') ? (
                  <Link to={`/order`}>
                    <button className="btn btn-custom btn-lg w-100 m-3" id="orderBtn"
                    onClick={() => { handleClose()}}>{t('ORDER NOW')}</button>
                  </Link>)
                  : (
                  <Link to={`/login`}>
                  <button className="btn btn-custom btn-lg w-100 m-3" id="orderBtn"
                  onClick={() => { handleClose()}}>{t('side-cart.btn-loginFirst')}</button>
                </Link>)
                    }
                </div>
                <button className="btn btn-custom btn-lg w-100 m-3"id="continueBtn"
                onClick={() => { handleClose()}}>{t('side-cart.btn-continue')}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SideCart;