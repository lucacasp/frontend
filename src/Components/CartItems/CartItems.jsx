import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

export default function CartItems() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
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
            <div className="cartitems-format" key={e.id}>
              <img src={e.img} className='carticon-product-icon' alt="" />
              <p>{e.name}</p>
              <p>{e.new_price}</p>
              <button className='carticon-quantity'>{cartItems[e.id]}</button>
              <p>{e.new_price * cartItems[e.id]}</p>
              <img src={remove_icon} onClick={() => removeFromCart(e.id)} className='carticon-remove-icon' alt="" />
            </div>
          );
        } else {
          return null; // Restituisce null se l'elemento non è nel carrello
        }
      })}
    </div>
  );
}
