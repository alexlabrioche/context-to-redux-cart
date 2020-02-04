import * as types from '../constants/actionTypes';

const initialState = {
  loading: false,
  error: '',
  data: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.LOAD_BOOKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    }
    case types.LOAD_BOOKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
