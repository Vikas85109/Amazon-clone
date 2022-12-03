import React from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Product/>
    </div>
  )
}

export default App