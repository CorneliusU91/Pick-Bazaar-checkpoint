import React from 'react'
import { ShoppingBagFull } from './ui/Icons'
import { useCart } from '../context/CartContext'

const SideCart = () => {
    const { getTotalItems, getTotalPrice } = useCart()
    const itemCount = getTotalItems()
    const totalPrice = getTotalPrice()

  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 w-[90px] h-[96px] bg-[#009F7F] rounded-l-md flex-col items-center justify-center gap-3 z-[999]">
        {/* Top Section - Items Count */}
        <div className="flex items-center justify-center gap-1 text-white">
            <span><ShoppingBagFull className="w-5 h-5"></ShoppingBagFull></span>
            <span className="text-[14px]">{itemCount} Item{itemCount !== 1 ? 's' : ''}</span>
        </div>
        
        {/* Bottom Section - Total Price */}
        <div className="w-[65px] h-[37px] bg-white rounded flex items-center justify-center text-[#009F7F] font-medium">
            <span className="text-[14px]">${totalPrice.toFixed(2)}</span>
        </div>
    </div>    
  )
}

export default SideCart