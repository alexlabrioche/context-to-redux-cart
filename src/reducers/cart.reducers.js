import * as types from '../constants/actionTypes';

const initialState = {
  cart: {},
  nbArticles: 0,
};

function countCartArticles(cart) {
  let total = 0;
  Object.keys(cart).map((key) => (total += cart[key].quantity));
  return total;
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CART_FROM_LOCAL_STORAGE: {
      const cart = action.data;
      const nbArticles = countCartArticles(cart);
      return {
        cart,
        nbArticles,
      };
    }
    case types.ADD_TO_CART: {
      const cart = state.cart;
      const { id } = action.data;
      if (!cart[id]) {
        cart[id] = action.data;
        cart[id].quantity = 1;
      } else {
        cart[id].quantity += 1;
      }
      const nbArticles = countCartArticles(cart);
      return {
        cart,
        nbArticles,
      };
    }
    case types.REMOVE_FROM_CART: {
      const cart = state.cart;
      const { id } = action.data;
      if (cart[id].quantity !== 1) {
        cart[id].quantity = cart[id].quantity - 1;
      } else {
        delete cart[id];
      }
      const nbArticles = countCartArticles(cart);
      return {
        cart,
        nbArticles,
      };
    }
    case types.EMPTY_CART: {
      const response = window.confirm('Etes-vous vous sûr de vouloir vider le caddie ? ');
      if (response) {
        return initialState;
      }
      break;
    }
    default:
      return state;
  }
}
