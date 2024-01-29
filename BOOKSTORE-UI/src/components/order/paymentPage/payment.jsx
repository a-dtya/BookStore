import { useSelector } from "react-redux";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useTranslation } from "react-i18next";
import "./payment.css";
import swal from "sweetalert";

function PaymentComponent(props) {

  const { t } = useTranslation();
  /////////////////////////////////////////////////
  const cart = useSelector((state) => state.cart);
  function handlePayment(evnt) {
    evnt.preventDefault();
    props.payment();
  }

  const totalPrice=cart.reduce((total, product) => {
    return total + Number(product.book.price) * product.quantity;
  }, 0)
 const handleUpdate = async(e)=>{
  e.preventDefault()
  var stck = cart.reduce((total, product) => {
    return total + Number(product.book.bookStock)
  }, 0)
  const numericId =  cart.reduce((total, product) => {
    return total + Number(product.book._id)
  }, 0)


  const objectId = ObjectId.createFromHexString(numericId.toString());
 const ans = await axios.patch(`http://localhost:3001/books/${objectId}`,{
        
        bookStock: --stck

        })
        console.log(ans.data)
        console.log(objectId)
      }
  return (
    <>
      <div className="row" id="payment-page">
        <div className="col-12 col-md-12 d-flex flex-column align-items-center justify-content-between ">
          <div className="text-center">
            <h1 style={{ color: "#000000" }}>
              { totalPrice}.00 {t('INR')}
            </h1>
            <h5>{t('order.payment-sec.choose-method')}</h5>
          </div>
          <div className="small"/>
          <form onSubmit={(evnt) => { handlePayment(evnt);}}>
            <div className="payment-method">
              <div>
                <label>
                  <input type="checkbox" name="cash-delivery" value="cash-on-delivery" checked/>
                  <span className="mx-2">{t('order.payment-sec.cash')}</span>
                </label>
              </div>
            </div>
            <div className="mt-3">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AdtFaBF_2BB1gwNKmONqYfmYt57TdUFqNkJDAaQqq4qdj-CEJ2uCTagOqZfK3T_rZrCUA4iyt8SKA3kb",
                }}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: `${totalPrice}`,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                      // alert(
                      //   {t('order.payment-sec.alert-comp')}+
                      //     details.payer.name.given_name
                      // );

                      swal("Purchased Successfully", "Click on 'Place Order' button to complete your order", "success");

                      props.updatingOrder({...props.order,  paymentMethod:'Paypal' })
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
            <div>
            {
              
  
            }
              <button className="btn btn-custom btn-lg m-4" type="submit" id="place-order" onClick={()=>handleUpdate}>{t('order.payment-sec.btn-order')}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );}


export default PaymentComponent;