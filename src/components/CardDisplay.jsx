import React from 'react'
import pic1 from '../images/bg-card-front.png'
import pic2 from '../images/card-logo.svg'
import pic3 from '../images/bg-card-back.png'
import pic4 from '../images/visa-icon.png'
export default function CardDisplay(props) {
  return (
    <section className='card-display'>
      <div className='card-front'>
      <img src={pic1} alt='' className='card-front-img'/>
      <img src={pic2} alt='' className='card-logo' />
      <img src={pic4} alt='' className='card-logo2' />
        <p className="card-number-display">{props.num}</p>
        <p className="cardholder-display">{props.name} </p>
        <p className="expiry-month-display">{props.expMm} </p>
        <p className="expiry-divider-display"> </p>
        <p className="expiry-year-display">{props.expYy} </p>
      </div>
      <div className='card-back'>
        <img src={pic3} alt='' className='card-back-img' />
        <p className="cvc-display">{props.cvc} </p>

      </div>
    </section>
  )
}
