import { createContext,useContext,useReducer} from "react";
import { productReducer } from "./product-reducer";

const ProductContext=createContext();

const ProductProvider=({children})=>{
    const [productState,productDispatch]=useReducer(productReducer,{
        sortBy:'',
        idealFor:{men:false,women:false},
        sizes:{s:false,m:false,xl:false,xxl:false},
        brands:{qfabrix:false,biba:false,manikarnika:false,nike:false},
        searchQuery:'',
    })
   return( <ProductContext.Provider value={{productState,productDispatch}}>
        {children}
    </ProductContext.Provider>)
}

const useProducts=()=>useContext(ProductContext);

export {useProducts,ProductProvider}