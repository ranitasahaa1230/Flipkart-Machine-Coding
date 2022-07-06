export const sortPrice=(products,sortBy)=>{
    if(sortBy==='lowToHigh')
    return [...products].sort((item1,item2)=>(item1.currPrice-item2.currPrice))
    if(sortBy==='highToLow')
    return [...products].sort((item1,item2)=>(item2.currPrice-item1.currPrice))
               
    return products;     
}

export const idealCategory=(productss,idealForFilter)=>{
     // If any one filter is applied from this group
  // then return the product of whichever is applied
  return productss.filter((product) =>
  Object.values(idealForFilter).some((filterValue) => filterValue)
    ? product.idealFor
      ? idealForFilter[product.idealFor]
      : product
    : product
);
};

export const idealSize=(productss,sizeFilter)=>{
    // If any one filter is applied from this group
 // then return the product of whichever is applied
 return productss.filter((product) =>
 Object.values(sizeFilter).some((filterValue) => filterValue)
 ? product.sizes
 ? sizeFilter[product.sizes]
 : product
: product
 );
};

export const idealBrand=(productss,brandsFilter)=>{
    // If any one filter is applied from this group
 // then return the product of whichever is applied
 return productss.filter((product) =>
 Object.values(brandsFilter).some((brandValue) => brandValue)
 ? brandsFilter[product.brand.toLowerCase().split(" ").join("")]
 : product
);
};

// export const searchProducts=(productss,searchQuery)=>{
//     // If any one filter is applied from this group
//  // then return the product of whichever is applied
//  return productss.filter(({name}) =>name.toLowerCase().includes(searchQuery))
// };

export const searchProducts = (products, searchQuery) => {
    return products.filter(({ brand, name }) =>
      searchQuery
        ? name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
          brand.toLowerCase().includes(searchQuery.toLowerCase().trim())
        : true
    );
  };