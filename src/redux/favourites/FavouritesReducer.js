import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "./FavouritesConstants";

const initialState = {
  products: [],
};

export function favouritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      let productInFavourites = false;
      state.products.forEach((product) => {
        if (product.id === action.payload.product.id) {
          productInFavourites = true;
        }
      });

      if (!productInFavourites) {
        return Object.assign({}, state, {
          products: [
            ...state.products,
            {
              ...action.payload.product,
            },
          ],
        });
      } else {
        return Object.assign({}, state, ...state.products);
      }
    case REMOVE_FROM_FAVOURITES:
      const filteredProducts = state.products.filter((product) => {
        return product.id !== action.payload.id;
      });

      return Object.assign({}, state, {
        products: filteredProducts,
      });
    default:
      return state;
  }
}
