import React from 'react'
import {useEffect} from 'react'
import "./home.scss"

export default function Home() {
    useEffect(()=>{
        document.getElementById("title").innerText = "Women's Fashion, Plus Size Clothing & Clothes, Swimwear, Tops, Dresses Online Store︱ROTITA";
    },[])
  return (
    <div>Home</div>
  )
}
