import { INIT_DATA } from '../actions/products';
import { products } from '../../../util/_DATA';

const initialState = { products };
export default function productsReducer(state = initialState, action) {
   switch (action.type) {
      case INIT_DATA:
         return state.products;

      default:
         return state.products || products;
   }
}
