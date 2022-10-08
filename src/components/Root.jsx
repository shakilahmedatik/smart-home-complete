import React, { createContext, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useLoaderData } from 'react-router-dom'

export const ProductContext = createContext([])
export const CartContext = createContext([])
const Root = () => {
  const { products, initialCart } = useLoaderData()

  const [cart, setCart] = useState(initialCart)
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default Root
