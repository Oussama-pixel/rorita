import React, { useState } from 'react'
import {useEffect} from 'react'
import Header from '../../Components/Header/Header';
import "./home.scss"

export default function Home() {
  const [switcher, setSwitcher] = useState(false)
    useEffect(()=>{
      if(switcher){
        document.getElementById("title").innerText = "Women's Fashion, Plus Size Clothing & Clothes, Swimwear, Tops, Dresses Online Store︱ROTITA";
      }else{
        document.getElementById("title").innerText =  " ️‍🔥 Hurry! items Selling Fast"
      }
    },[switcher])
    setInterval(() => {
      setSwitcher(!switcher);        
    }, 2500);
  return (
    <div className='home'>
        <img src="/images/discountBanner.jpg" className='top-img' alt="" />
        <Header/>
    </div>
  )
}
