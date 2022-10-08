import React from 'react'
import pic from '../images/icon-complete.svg'
import Button from './Button'
export default function ThankYou(props) {
  let text1="Thank you!"
  let text2="Weve added your card details"
  return (
    <div id="thank-you" className='thank-you'>
       <img src={pic} alt="" className="" /> 
       <h2 id="thank-you-header">{text1} {props.fname} </h2>
       <p>{text2} </p>
       <Button
       text="Continue"
       onClick={props.handlereset}
       
       />
    </div>
  )
}
