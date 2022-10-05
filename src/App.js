import React from 'react'
import './style/App.css'
import pic from './images/bg-main-desktop.png'
import pic1 from './images/bg-main-mobile.png'
import Main1 from './main/Main'
export default function App() {
  return (
    <div className='App'>
      <img src={pic} alt='' className='bg-img'/>
      <img src={pic1} alt='' className='bg-img-xs'/>
    <Main1/>
    </div>
  )
}
