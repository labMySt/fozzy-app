import axisos from '../imitation/axisos';
import {
  SET_VISIBILITY_FILTER,
  GET_CATEGORIES,
  GET_CATEGORIES_FATCHED,
  GET_CATEGORIES_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_FATCHED,
  GET_PRODUCTS_ERROR
} from './types';


export const setVisidilityFilter  = (filters) => ({
  type: SET_VISIBILITY_FILTER,
  filters
 });

 const sendGetCategories    = ()     => ({ type: GET_CATEGORIES }),
       writeCategories      = (data) => ({ type: GET_CATEGORIES_FATCHED,payload: data }),
       writeCategoriesError = (data) => ({ type: GET_CATEGORIES_ERROR,  payload: data});

 export const getCategories = () => ((dispatch) => {
  dispatch(sendGetCategories())
  axisos.get('categories') //  :-)
   .then((response) => {
      dispatch(writeCategories(response))
   })
   .catch((err) => {
      dispatch(writeCategoriesError(err))
   })
});

const sedGetProducts     = ()     => ({ type: GET_PRODUCTS}),
      writeProducts      = (data) => ({ type: GET_PRODUCTS_FATCHED,payload: data }),
      writeProductsError = (data) => ({ type: GET_PRODUCTS_ERROR,  payload: data});

export const getProducts = (path) => ((dispatch) => {
 dispatch(sedGetProducts())
 axisos.get(path)
  .then((response) => {
     dispatch(writeProducts(response))
  })
  .catch((err) => {
     dispatch(writeProductsError(err))
  })
});
