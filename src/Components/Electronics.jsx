import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./ProductCards.css"
import { Link } from 'react-router-dom'

const Electronics = () => {

  let [electronicProducts, setElectronicProducts] = useState([])
  let [isloading, setIsLoading] = useState(false)

  let fetchApi = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products")
    data = data.filter(({ category }) => { return category.includes("electronics") })
    setElectronicProducts(data)
    setIsLoading(false)

  }


  useEffect(() => {
    setIsLoading(true)
    fetchApi()
  }, [])

  return (
    <>
      <h1 className='loader'>{isloading && "Loading!!!"}</h1>
      <section className='container'>
        {electronicProducts.map(({ id, image, title, price }) => {
          return (
            <Link className='card' key={id} to={`/productdetails/${id}`}> {/* this id will be sent to ProductDetails.jsx in the url as parameter and can be accessed using useParams() hook inside ProductDetails.jsx and using the id sent, that particular object can be rendered on UI */}
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

export default Electronics