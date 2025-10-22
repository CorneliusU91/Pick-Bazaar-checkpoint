import React from 'react'
import Navbar from './component/Navbar'
import MainText from './component/main/MainText'
import MainSearchBar from './component/main/MainSearchBar'
import Scrollable from './component/Scrollable'
import ProdCategory from './component/ProdCategory'
import SideCart from './component/SideCart'
import Shop from './component/Shop'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <MainText/>
      <MainSearchBar/>
      <SideCart/>
      <Scrollable/>
      <div className="-mt-8">
        <ProdCategory/>
      </div>
      <Shop/>
    </CartProvider>
  )
}

export default App