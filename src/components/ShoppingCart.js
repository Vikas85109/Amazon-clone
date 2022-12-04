import React from 'react'
import './ShoppingCart.css'

const ShoppingCart = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Shopping_Feb22/1500x250PCbanneFeb22.jpg" alt="" />
      {/* <h3>Cart Details</h3> */}
     

      <div>
        <h3>Hello Vikas Sharma</h3>
        <h2 className='checkout__title'>Your Shopping Basket</h2>

        <div className="checkoutProduct">
          <img src="https://m.media-amazon.com/images/I/61ZbKLlt0sL._AC_UL320_.jpg" alt="" />

          <div className="chectoutProduct__info">
            <p className="chectoutProduct__title">Product Name</p>
            <p className="chectoutProduct__price">
              <strong>₹600.00 * 1 = ₹ 600</strong>
            </p>
            <button>Remove from Basket</button>
          </div>
          </div>
          
      </div>
      </div>
      
      <div className="checkout__right">
        <div className="subtotal">
          <p>Subtotal (2 items): <strong>₹1,299.00</strong></p>
          <small>
            <input type="checkbox" name="" id="" />
            this  Order containers a gift
          </small>
        </div> 
        <button>Proceed to Checkout</button>
      </div>

    </div>
  )
}

export default ShoppingCart