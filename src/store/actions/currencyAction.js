import * as actions from "./actionTypes";
import axios from "axios";

export const getCurrency = () => {
  return (dispatch) => {
    dispatch(fetchPostsStarted());
    axios
      .get("http://localhost:5000/api/currency")
      .then((res) => {
        dispatch(fetchPostsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchPostsFailed(err.message));
      });
  };
};

const fetchPostsStarted = () => {
  return {
    type: actions.LOAD_BEGIN,
    payload: {
      isLoading: true,
    },
  };
};

const fetchPostsSuccess = (currency) => {
  return {
    type: actions.LOAD_SUCCESS,
    payload: {
      currency,
    },
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: actions.LOAD_FAIL,
    payload: {
      error,
    },
  };
};
