import React, { useState } from 'react'
import allProductsCatls from '../assets/project assets 2/allProductCatLs'
import { useCart } from '../context/CartContext'

const Shop = ({ categoryId = null, limit = null }) => {
  const { addToCart } = useCart()
  const [hoveredButton, setHoveredButton] = useState(null)

  // Filter products by category if categoryId is provided
  const filteredProducts = categoryId !== null 
    ? allProductsCatls.filter(product => product.catId === categoryId)
    : allProductsCatls

  // Limit products if limit is provided
  const displayProducts = limit 
    ? filteredProducts.slice(0, limit)
    : filteredProducts

  // Helper function to calculate discounted price
  const calculateDiscountedPrice = (product) => {
    if (!product.discount) return product.price
    
    const originalPrice = parseFloat(product.price.replace('$', ''))
    const discountPercent = parseFloat(product.discountedP.replace('%', ''))
    const discountedPrice = originalPrice * (1 - discountPercent / 100)
    return `$${discountedPrice.toFixed(2)}`
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="w-full bg-white p-4 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative">
            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center transition-colors duration-200 z-10"
              style={{
                backgroundColor: hoveredButton === index ? '#029376' : '#f3f4f6',
                color: hoveredButton === index ? 'white' : 'black'
              }}
            >
              <span className="font-bold text-lg">+</span>
            </button>

            {/* Product Image */}
            <div className="p-4 flex items-center justify-center h-48">
              <img 
                src={`/src/assets/project%20assets%202/allbakery/${product.url.split('/').pop()}`} 
                alt={product.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  console.log('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image not found</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 pt-0">
              {/* Price */}
              <div className="mb-2">
                <span className="text-2xl font-bold text-gray-800">
                  {product.discount ? calculateDiscountedPrice(product) : product.price}
                </span>
                {product.discount && (
                  <span className="text-lg text-gray-500 line-through ml-2">
                    {product.price}
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h3 className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.name}
              </h3>

              {/* Volume/Size if available */}
              <div className="text-xs text-gray-500">
                {product.name.includes('ml') && product.name.match(/\d+ml/)?.[0]}
              </div>

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discountedP} OFF
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
