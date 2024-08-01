import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='newsletter'>
      <h1>Ottieni offerte esclusive sulla tua mail</h1>
      <p>Inserisci la tua email per iscriverti alla newsletter</p>
      <div>
        <input type="email" placeholder='Inserisci la tua email' />
        <button>Iscriviti</button>
      </div>
    </div>
  )
}
