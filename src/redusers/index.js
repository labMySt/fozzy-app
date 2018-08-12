import {
  SET_VISIBILITY_FILTER,
  GET_CATEGORIES,
  GET_CATEGORIES_FATCHED,
  GET_CATEGORIES_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_FATCHED,
  GET_PRODUCTS_ERROR
} from '../actions/types';



const initialState = {
  filters   :null,
  categories: null,
  products  : {},
  categoriesFetching: false,
  categoriesError   : null,
  productsFetching  : false,
  productsError     : null,
}


 function Reduser(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER : return { ...state, filters: action.filters };

    case GET_CATEGORIES        : return { ...state, categoriesFetching: true };
    case GET_CATEGORIES_FATCHED: return { ...state, categoriesFetching: false, categories: action.payload};
    case GET_CATEGORIES_ERROR  : return { ...state, categoriesFetching: false, categoriesError: action.payload};

    case GET_PRODUCTS          : return { ...state, productsFetching: true };
    case GET_PRODUCTS_FATCHED  : return { ...state, productsFetching: false,
                                          products: Object.assign(...state.products, action.payload)}; //--???
    case GET_PRODUCTS_ERROR    : return { ...state, productsFetching: false, productsError: action.payload};


    default: return state;
  }

};
export default Reduser;
