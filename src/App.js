import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'

// Routers
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'

import commerce from './lib/commerce'

const App = () => {

  const [productsList, setProductsList]=useState([])
  const [cart, setCart]=useState([])

  const fetchProduct = async() => {
    try {
      const response = await commerce.products.list();
      setProductsList(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const addToCart = async(prodId, qty) => {
    const response = await commerce.cart.add(prodId, qty)
    console.log(89, response)
  setCart(response)
  }

  const removeFromCart = async (prodId) => {
    const response = await commerce.cart.remove(prodId)
    setCart(response)
  }
  
  const fetchCart = async() => {
    setCart(await commerce.cart.retrieve())
  }
 

  useEffect(() => {
    fetchProduct()
    fetchCart()
  },[])

  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path='/' element={<Product productsList={productsList} addToCart={addToCart}  /> } />
        <Route path='/cart' element={<ShoppingCart cart={cart} removeFromCart={removeFromCart } /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App