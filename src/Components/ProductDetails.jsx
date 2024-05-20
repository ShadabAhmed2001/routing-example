import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./ProductDetails.css"


const ProductDetails = () => {
 
    let [prodDetails,setProdDetails]=useState([])

    let{pid}=useParams()
    // console.log(pid); //! id of the products ( will be in string format)

    let fetchApi=async()=>{
        let {data}=await axios.get("https://fakestoreapi.com/products")
        setProdDetails(data)
    }

    useEffect(()=>{
        fetchApi()
    },[])


    let details=prodDetails.find(({id})=>{
      return Number(pid)===id
    })
      return (
          <>
            <Link to={"/products"} className='toggleback'>Back to Products</Link>
            <div className='details_card'>

                  <div className='details_card_left'>
                      <img src={details?.image} />
                  </div>

                  <div className="details_card_right">
                      <h3>{details?.title}</h3> <hr />
                      <p style={{textTransform:"capitalize"}}><span>Category: </span>{details?.category}</p>
                      <p style={{textTransform:"capitalize"}}><span>Price: </span>{details?.price} $</p>
                      <p style={{textTransform:"capitalize"}}><span>Ratings: </span>{details?.rating.rate}</p>
                      <p><span>Total Ratings: </span>{details?.rating.count}</p>
                  </div>
                  
                  <div className="describe">
                  <h3>Product Description:</h3>
                  <p>{details?.description}.</p>
                  </div>

            </div>

            
          </>
  )
}

export default ProductDetails