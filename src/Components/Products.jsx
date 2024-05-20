
import { NavLink, Outlet } from 'react-router-dom'
import "./ProductsNav.css"


const Products = () => {


  return (
    <>
        <nav className='productsNav'>
          <NavLink to="electronics">Electronics</NavLink>
          <NavLink to="clothing">Clothing</NavLink>
          <NavLink to="jewelry">Jewelry</NavLink>
        </nav>

        <Outlet />

          {/* <Outlet/> is must for parent route to access child route
            Here <Electronics/> or <Clothing/> or <Jewelry/> components are child components that are rendered on <Products/> that is parent component, hence we have to use <Outlet/> in Products.jsx in order to render child components in it.  
          */}

    </>
  )
}

export default Products