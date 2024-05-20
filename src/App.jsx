import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main_Nav from './Components/Main_Nav'
import Products from './Components/Products'
import Signup from './Components/Signup'
import Aboutus from './Components/Aboutus'
import Electronics from './Components/Electronics'
import Clothing from './Components/Clothing'
import Jewelry from './Components/Jewelry'
import ProductDetails from './Components/ProductDetails'
import PNF from './Components/PNF'

const App = () => {
  return (

    <BrowserRouter>

      <Main_Nav/>
    
      <Routes>
        <Route index element={<Signup />}/>


          {/* nested routing starts */}
        <Route path='/products' element={<Products/>}>
            <Route  path='electronics' element={<Electronics/>}/>
            <Route  path='clothing' element={<Clothing/>}/>
            <Route  path='jewelry' element={<Jewelry/>}/>
        </Route>
          {/* nested routing ends */}

          <Route path='productdetails/:pid' element={<ProductDetails/>}/>


        <Route path='/signup' element={<Signup/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        
        <Route  path="*" element={<PNF/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App