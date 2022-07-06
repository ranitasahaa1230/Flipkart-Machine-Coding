import React from 'react'
import { Filters, Products } from '../../components'

export const ProductListing = () => {
  return (
    <div className='product-listing'>
        <Filters/>
        <Products/>
    </div>
  )
}
