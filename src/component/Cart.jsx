import React from 'react'
import { ShoppingBagFull } from './ui/Icons'
import MainParagraph from './main/MainParagraph'

const Cart = ({text_up, text_below}) => {
    return (
      <div className='w-[85px] h-[96px] bg-[#009F7F] rounded-l-md flex flex-col items-center justify-center gap-3 z-50'>
          <div className='flex items-center justify-center gap-1 text-white'>
              <span><ShoppingBagFull className="w-5 h-5"></ShoppingBagFull></span>
              <span><MainParagraph className='text-[14px]' text={text_up}></MainParagraph></span>
          </div>
          <div className='w-[65px] h-[37px] bg-white rounded flex items-center justify-center text-[#009F7F] font-medium'> 
                  <MainParagraph text={text_below}></MainParagraph>
          </div>
      </div>
    )
  }

export default Cart