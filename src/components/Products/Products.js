import React from 'react'
import { useProducts } from '../../contexts/product-context'
import {products} from "../../data"
import { idealBrand, idealCategory, idealSize, searchProducts, sortPrice } from '../../utilities/sortPrice'

export const Products = () => {
    const {productState:{sortBy,idealFor,searchQuery,sizes,brands}}=useProducts();

    const sortedProducts=sortPrice(products,sortBy)
    const idealProducts=idealCategory(sortedProducts,idealFor)
        const sizedProducts=idealSize(idealProducts,sizes)
        const brandProducts=idealBrand(sizedProducts,brands);
const searchedProducts=searchProducts(brandProducts,searchQuery);
  return (
    <div>
        <div className='products-card'>
            {searchedProducts.map((product)=>(
                <div className='card' key={product.id}>
                    <div className=''>
                        <img  className='card-img' src={product.imgAddress} alt={product.altImg}/>
                    </div>
                    <div className='padding-right'>
                    <span className='brand'>{product.brand}</span>
                    <h6 className='name'>{product.name}</h6>
                    <div className='price'>
                    <span className='currentPrice'>Rs {product.currPrice}</span>
                    <span className='dscount-price'>Rs {product.discountPrie}</span>
                    </div>
                    <span className='size'><em>Size: </em>{product.sizes.toUpperCase()}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
