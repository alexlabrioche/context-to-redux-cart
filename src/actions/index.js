import * as types from '../constants/actionTypes';
import { getBooks } from '../api';

export const loadBooks = () => (dispatch) => {
  dispatch({ type: types.LOAD_BOOKS_LOADING });
  getBooks().then(
    (res) => dispatch({ type: types.LOAD_BOOKS_SUCCESS, data: res.data }),
    (error) =>
      dispatch({ type: types.LOAD_BOOKS_ERROR, error: error.message || 'Unexpected Error!!!' }),
  );
};

export const addCartFromLocalStorage = (data) => (dispatch) => {
  dispatch({ type: types.CART_FROM_LOCAL_STORAGE, data });
};

export const addToCart = (data) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART, data });
};

export const removeFromCart = (data) => (dispatch) => {
  dispatch({ type: types.REMOVE_FROM_CART, data });
};

export const emptyCart = () => (dispatch) => {
  dispatch({ type: types.EMPTY_CART });
};
