import React from 'react'
/*import { useState } from 'react*/
import CardDisplay from '../components/CardDisplay'
import CardDetails from '../components/CardDetails'
import ThankYou from '../components/ThankYou'

const namevalidator=/^[A-Z a-z]+$/
const monthvalidator=/^(0[0-9]|1[1-2]){2}$/
const yearvalidator=/^[0-9][0-2]{4}$/
const cvcvalidator=/^[0-9]{3}$/

class Main1 extends React.Component{
    constructor(){
        super()
        this.state={
            cardholderName:'',
            cardNumber:'',
            expiryMonth:'',
            expiryYear:'',
            cvcDisplay:'',
            
            cardholdernameError:'',
            cardnumberError:'',
            expiryError:'',
            cvcError:'',
            isFormSubmitted:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleBlur=this.handleBlur.bind(this)
        this.validateName=this.validateName.bind(this)
        this.validateCard=this.validateCard.bind(this)
        this.validateCvc=this.validateCvc.bind(this)
        this.validateField=this.validateField.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleChange(e){
        const {name,value}=e.target
        this.setState({[name]:value})

        
    }

    handleBlur(e){
        const {name}=e.target
        this.validateField(name)
        return
    }

    handleInput=(e)=>{
        
        this.setState({ 
            cardholderName:e.target.value,
            


        })
        
    }
    handleInput1=(e)=>{
       let value=e.target.value
       let format=value.replace(/[^\d]/g,"")
       format=format.substring(0,16)

       let cardnumsec=format.match(/\d{1,4}/g)
       if(cardnumsec!==null){
        format=cardnumsec.join(" ")
       }
       if(value!==format)
       {
        e.target.value=format
       }

            this.setState({ 
                cardNumber: format})
      
            


       
        
    }
    handleInput2=(e)=>{
        let value=e.target.value
        value=value.substring(0,2)
        e.target.value=value
        this.setState({ 
            expiryMonth:e.target.value,
            


        })
        
    }
    handleInput3=(e)=>{
        let formatYY=e.target.value
        formatYY=formatYY.substring(0,4)
        e.target.value=formatYY
        
        this.setState({ 
            expiryYear:e.target.value,
            


        })
        
    }
    handleInput4=(e)=>{
        let formatCvc=e.target.value
        formatCvc=formatCvc.substring(0,3)
        e.target.value=formatCvc
        this.setState({ 
            cvcDisplay:e.target.value,
            


        })
        
    }
    
    
    
    handleSubmit(e){
        
        e.preventDefault()
        let formFields=[
            "cardholderName",
            "cardNumber",
            
            "cvcDisplay"
        ]
         let isValid=true
         formFields.forEach((field)=>{
            isValid=this.validateField(field) && isValid
         })
        if(isValid){
            this.setState({isFormSubmitted:true})
            console.log(1)
            const{
                cardholderName,
                cardNumber,
                expiryMonth,
                expiryYear,
                cvcDisplay,
                cardholdernameError
            }=this.state

            const data={
                cardholderName,
                cardNumber,
                expiryMonth,
                expiryYear,
                cvcDisplay,
                cardholdernameError
            }
            console.log(data)
            

        } 
        else {
            this.setState({isFormSubmitted:false})
            console.log(0)
                
               const {cardholdernameError}=this.state
               const data= {
                cardholdernameError
               }
                console.log(data)
        }
        
        return this.state.isFormSubmitted
        
    }
    validateField(name){
        let isValid=false

        if(name==="cardholderName") isValid=this.validateName()
        else if(name==="cardNumber") isValid=this.validateCard()
       
        else if(name==="cvcDisplay") isValid=this.validateCvc()

        return isValid
    }

    validateName(){
        let cardholdernameError=""
        const value=this.state.cardholderName
       if(value.trim()==="") cardholdernameError="Cardholder name is required"
       else if(!namevalidator.test(value)) cardholdernameError="Please enter correct Cardholder name"

       this.setState({
        cardholdernameError
       })
       return cardholdernameError===""
    }

    validateCard(){
        let cardnumberError=""
        const value=this.state.cardNumber
        if(value.trim()==="") cardnumberError="Can not be blank! Abeg Fill it "
        else if(value.length>0 && value.length<16) cardnumberError="Wrong Format"

        this.setState({
            cardnumberError
        })
        return cardnumberError===""
    }
    validateExpiry(){
        let expiryError=""
        const value1=this.state.expiryMonth
        const value2=this.state.expiryYear
        if(value1.trim()==="" || value2.trim()==="") expiryError="Can not be blank"
        else if(!monthvalidator.test(value1) || !yearvalidator.test(value2)) expiryError="Wrong Format"

        this.setState({
            expiryError
        })
        return expiryError===""
    }
    validateCvc(){
        let cvcError=""
        const value=this.state.cvcDisplay

        if(value.trim()==="") cvcError="Can not be blank! Abeg Fill!! "
        else if(!cvcvalidator.test(value)) cvcError="Wrong Format"

        this.setState({
            cvcError
        })
        return cvcError===""
    }
   /* handleSubmit(e){
        if(this.handleValidation===true)
            {
            e.preventDefault()
             const{
                cardholderName,
                cardNumber,
                expiryMonth,
                expiryYear,
                cvcDisplay
            }=this.state

            const data={
                cardholderName,
                cardNumber,
                expiryMonth,
                expiryYear,
                cvcDisplay
            }
            console.log(data)
        }
        
       
    }*/
    render (){

        const{
            cardholderName,
            cardNumber,
            expiryMonth,
            expiryYear,
            cvcDisplay,
            cardholdernameError,
            cardnumberError,
            expiryError,
            cvcError,

        }=this.state

    return(
    <div className='container'>
       
      <CardDisplay
        name={cardholderName}
        num={cardNumber}
        expMm={expiryMonth}
        expYy={expiryYear}
        cvc={cvcDisplay}
      />
     
      
        
      
       <CardDetails
      name={cardholderName}
      num={cardNumber}
      expMm={expiryMonth}
      expYy={expiryYear}
      cvc={cvcDisplay}
      handleInput={this.handleInput.bind(this)}
      handleInput1={this.handleInput1.bind(this)}
      handleInput2={this.handleInput2.bind(this)}
      handleInput3={this.handleInput3.bind(this)}
      handleInput4={this.handleInput4.bind(this)}
      handleSubmit={this.handleSubmit}
      handleBlur={this.handleBlur}
      handleChange={this.handleChange}
      error1={cardholdernameError}
      error2={cardnumberError}
      error3={expiryError}
      error4={cvcError}
        
      />
    </div>
        )
    }
}

export default Main1
/*export default function Main() {
    const initialState={
        cardholderName:'e.g Jeremie Lowe',
        cardNumber:'e.g. 1234 5678 9123 0000',
        expiryMonth:'00',
        expiryYear:'0000',
        cvcDisplay:'000'

    }

    const [formData,setData]=useState(initialState)
    const onInput=(e)=>{
        const {name,value}=e.target
        setData({ ...formData,[name]:value})
    }
    const onSubmit=(e)=>{
        e.preventDefautl()

        console.log(formData)
    }
    const {cardholderName,cardNumber,expiryMonth,expiryYear,cvcDisplay}=formData
  return (
    <div className='container'>
      <CardDisplay
        name={cardholderName}
        num={cardNumber}
        expMm={expiryMonth}
        expYy={expiryYear}
        cvc={cvcDisplay}
      />
      <CardDetails
      name={cardholderName}
      num={cardNumber}
      expMm={expiryMonth}
      expYy={expiryYear}
      cvc={cvcDisplay}
      oninput={onInput.bind(this)}
      onSubmit={onSubmit}
      />
    </div>
  )
}*/
