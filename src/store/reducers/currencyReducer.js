import * as types from "../actions/actionTypes";

const initialState = {
  currency: null,
  loading: false,
  error: null,
};

export default function CurrencyReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_SUCCESS:
      return {
        ...state,
        currency: action.payload.currency,
        error: null,
        loading: false,
      };
    case types.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
