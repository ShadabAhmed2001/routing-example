import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./ProductCards.css"
import { Link } from 'react-router-dom'

const Clothing = () => {
  let [clothingProducts,setClothingProducts]=useState([])
let [isloading,setIsLoading]=useState(false)

let fetchApi=async()=>{
  let {data}=await axios.get("https://fakestoreapi.com/products")
  data=data.filter(({category})=>{return category.includes("clothing")})
  setClothingProducts(data)
  setIsLoading(false)

}


useEffect(()=>{
  setIsLoading(true)
  fetchApi()
},[])

      return (
      <>
        <h1 className='loader'>{isloading && "Loading!!!"}</h1>
    <section className='container'>
      {clothingProducts.map(({id,image,title,price})=>{
        return (
          <Link className='card' key={id} to={`/productdetails/${id}`}>
            <img src={image} />
            <h3>{title}</h3>
            <h4>Price: {price} $</h4>
          </Link>
        )
      })}
    </section>
      </>
  )
}

export default Clothing