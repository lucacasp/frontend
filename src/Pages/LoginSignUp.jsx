import React from 'react'
import './CSS/LoginSignUp.css'

export default function LoginSignUp() {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Il tuo nome' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password' />
        </div>
        <button>Continua</button>
        <p className="loginsignup-login">Hai un account? <span>Accedi</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>Accetto i <span>Termini di Servizio</span> e la <span>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}
