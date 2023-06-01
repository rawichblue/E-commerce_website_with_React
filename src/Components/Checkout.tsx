import shoe from '../img/shoe_1.jpg';
import Button from '@mui/material/Button';

const Checkout = () => {
  return (
    <>
      <h3>Please review your order details and proceed to payment. Enter your payment information and choose a secure payment method to complete your purchase. Thank you for shopping with us!</h3>
      <hr />
      <div className="checkbill">
        <div className='Box1'>
          <p className="textInput">Full Name :</p>
          <input type="text" placeholder="Mr.AYoHaaa Injapan" className="input" />

          <p className="textInput">Email :</p>
          <input type="text" placeholder="AAAAAA@gmail.com" className="input" />

          <p className="textInput">Address :</p>
          <input type="text" placeholder="room - street - locailty" className="input" />

          <p className="textInput">Credit Card Number :</p>
          <input type="text" placeholder="1111-1111-1111-1111" className="input" />

          <p className="textInput">Expiry Date :</p>
          <input type="text" placeholder="00/00" className="input" />

          <p className="textInput">CVV :</p>
          <input type="text" placeholder="1234" className="input" />
        </div>

        <div className='Box2'>
          <div className='bill'>
            <img src={shoe} className='imgbill' />
            <p>JORDAN 1 MID SE SNEAKERS</p>
            <p>9,800 TH</p>
          </div>

          <hr />
          
          <div className='Total'>
            <h3>Total</h3>
            <h3>9,800 TH</h3>
          </div>

          <Button variant="contained" color="success" style={{width:'100%', height: '35px'}}> Buy Now </Button>
        </div>
      </div>
    </>
  )
}

export default Checkout