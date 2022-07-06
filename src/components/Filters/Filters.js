import React from "react";
import { useProducts } from "../../contexts/product-context";

export const Filters = () => {
    const {productState:{sortBy,idealFor,sizes,brands},productDispatch}=useProducts();
  return (
    <div className="filters-listing">
      <div className="filters">
        <h5>Filters</h5>
        <button onClick={()=>productDispatch({type:'RESET'})}>Clear All</button>
      </div>

      <div>Sort By: </div>
      <label className="input-filters" htmlFor="low-to-high">
        <input type="radio" 
                     id="low-to-high" value="low-to-high" 
        checked={sortBy==='lowToHigh'}
            onChange={()=>productDispatch({type:'LOW_TO_HIGH',payload:'lowToHigh'})}
        />
        Low To High
      </label>
      <label className="input-filters" htmlFor="high-to-low">
        <input type="radio" 
                     id="high-to-low" value="high-to-low" 
             checked={sortBy==='highToLow'}
            onChange={()=>productDispatch({type:'HIGH_TO_LOW',payload:'highToLow'})}
        />
        High To Low
      </label>

      <div>Ideal For:</div>
      <label className="input-filters">
        <input type="checkbox" 
        value='women'
            checked={idealFor.women}
            onChange={(e)=>productDispatch({type:'CATEGORY',payload:e.target.value})}
        />
        Women
      </label>
      <label className="input-filters">
        <input type="checkbox" 
                value='men'
            checked={idealFor.men}
            onChange={(e)=>productDispatch({type:'CATEGORY',payload:e.target.value})}
        />
        Men
      </label>

      <div>Size:</div>
      <label className="input-filters">
        <input type="checkbox" 
           value='s'
            checked={sizes.s}
            onChange={(e)=>productDispatch({type:'SIZES',payload:e.target.value})}
        />
        S
      </label>
      <label className="input-filters">
        <input type="checkbox"  value='m'
            checked={sizes.m}
            onChange={(e)=>productDispatch({type:'SIZES',payload:e.target.value})}
        />
        M
      </label>
      <label className="input-filters">
        <input type="checkbox"  value='xl'
            checked={sizes.xl}
            onChange={(e)=>productDispatch({type:'SIZES',payload:e.target.value})}
        />
        XL
      </label>
      <label className="input-filters">
        <input type="checkbox"  value='xxl'
            checked={sizes.xxl}
            onChange={(e)=>productDispatch({type:'SIZES',payload:e.target.value})}
        />
        XXL
        </label>

      <div>Brands:</div>
      <label className="input-filters">
        <input type="checkbox" 
          value='qfabrix'
            checked={brands.qfabrix}
            onChange={(e)=>productDispatch({type:'BRANDS',payload:e.target.value})}
        />
        QFABRIX
      </label>
      <label className="input-filters">
        <input type="checkbox" 
          value='biba'
            checked={brands.biba}
            onChange={(e)=>productDispatch({type:'BRANDS',payload:e.target.value})}
        />
        BIBA
      </label>
      <label className="input-filters">
        <input type="checkbox" 
          value='manikarnika'
            checked={brands.manikarnika}
            onChange={(e)=>productDispatch({type:'BRANDS',payload:e.target.value})}
        />
        MANIKARNIKA
      </label>
      <label className="input-filters">
        <input type="checkbox"
        value='nike'
            checked={brands.nike}
            onChange={(e)=>productDispatch({type:'BRANDS',payload:e.target.value})} />
        NIKE
      </label>
    </div>
  );
};
