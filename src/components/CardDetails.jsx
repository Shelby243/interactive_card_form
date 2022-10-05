import React from 'react'
import Input from './Input'
import Button from './Button'
export default function CardDetails(props) {
  return (
    <section className='card-details'>
      <form onSubmit={props.handleSubmit} >
        <label htmlFor='cardholder-name'> Cardholder Name</label>
        <Input
            id="cardholder-name" 
            
            className="cardholder-name"
            type="text"
            name="cardholder-name"
            placeholder="e.g Rachel Lowe"
            onInput={props.handleInput}
            onBlur={props.handleBlur}
        />
        <p className='errorMsg'>{props.error1} </p>

        <label htmlFor='card-number'> Card Number</label>
         <Input
            id="card-number" 
            className="card-number"
            type="text"
            name="card-number"
            placeholder="e.g 1234 5678 9123 0000"
            onInput={props.handleInput1}
            onBlur={props.handleBlur}
            onChange={props.handleChange}
        />
        <p className='card-num-error'>{props.error2} </p>

        <div className='flex'>
            <label htmlFor='expiry-date' className='expiry-date'>
                Exp. Date (MM/YY) <br/>
             <Input
                className="expiry"
                type="text"
                name="expiry-date"
                placeholder="MM"
                onInput={props.handleInput2}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
             />   
             <Input
                className="expiry"
                type="text"
                name="expiry-date"
                placeholder="YYYY"
                onBlur={props.handleBlur}
                onInput={props.handleInput3}
                onChange={props.handleChange}
             />
             <p className='expiry-error'>{props.error3} </p>
            </label>

            <label htmlFor='cvc' className='cvc'>
                CVC <br/>
                <Input 
                    className="cvc"
                    id="cvc"
                    type="text"
                    name="cvc"
                    placeholder="e.g 123"  
                    onInput={props.handleInput4}
                    onBlur={props.handleBlur}     
                    onChange={props.handleChange}
                    />
                    <p className='error-cvc'>{props.error4} </p>
            </label>
        </div>

        <Button
        text="confirm"
        />
      </form>
    </section>
  )
}
