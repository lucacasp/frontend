import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export default function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.img} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>5.0</span>
          <span>(32)</span>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-price-old">
            <p>€{product.old_price}</p>
          </div>
          <div className="productdisplay-price-new">
            <p>€{product.new_price}</p>
          </div>
        </div>
        <div className="productdisplay-right-description">
          <h3>Descrizione prodotto:</h3>
          <p>{product.description}</p>
        </div>
        <div className="productdisplay-right-button">
          <button onClick={() => addToCart(product.id)}>Aggiungi al carrello</button>
        </div>
        <p className="productdisplay-category">
            <span>Categoria: {product.category}</span>
            <span>Tag: {product.tag} UNISEX po' mument, po' s ver</span>
        </p>
      </div>
    </div>
  )
}
