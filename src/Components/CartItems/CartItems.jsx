import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import cart_cross_icon from '../../Components/Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-format cartitems-format-main">
              <img src={e.img} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>€ {e.new_price}</p>
              <button className='cartitems-quantity'>{cartItems[e.id]}</button>
              <p>€ {e.new_price * cartItems[e.id]}</p>
              <img 
                className='cartitems-remove-icon'
                src={cart_cross_icon}
                onClick={() => { removeFromCart(e.id); }}
                alt=""              />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>€ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Costi di spedizione</p>
              <p>Gratis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Totale</h3>
              <h3>€ {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Vai al pagamento</button>
        </div>
        <div className="cartitems-promo">
          <p>Se hai un codice promo, inseriscilo qui</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='Inserisci il codice promo' />
            <button>Applica</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
