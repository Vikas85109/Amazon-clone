import React from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'

// Routers
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Product/> } />
        <Route path='/cart' element={<ShoppingCart/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App