export const productReducer = (productState, { type, payload }) => {
  switch (type) {
    case "LOW_TO_HIGH":
      return { ...productState, sortBy: payload };
    case "HIGH_TO_LOW":
      return { ...productState, sortBy: payload };
      case "CATEGORY":
      return { ...productState, idealFor: {
        ...productState.idealFor,
        [payload]:!productState.idealFor[payload],
      } };
      case 'BRANDS':
        return {...productState,
        brands:{
          ...productState.brands,
          [payload]:!productState.brands[payload],
        }}
        case 'SIZES':
        return {...productState,
        sizes:{
          ...productState.sizes,
          [payload]:!productState.sizes[payload],
        }}
        case 'SEARCH_PRODUCTS':
          return {...productState,searchQuery:payload}
    case "RESET":
        return {...productState,
            sortBy:'',
            idealFor:{men:false,women:false},
        sizes:{s:false,m:false,xl:false,xxl:false},
        brands:{qfabrix:false,biba:false,manikarnika:false,nike:false},
        searchQuery:''
        }
    default:
      throw new Error("Action type not found.");
  }
};
