import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAIL
} from "./actionTypes";
import axios from "axios";

export const fetchItems = () => {
  return {
    type: FETCH_ITEMS_REQUEST
  };
};
export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items
  };
};
export const fetchFail = (error) => {
  return {
    type: FETCH_ITEMS_FAIL,
    payload: error
  };
};

export const fetchingItems = () => {
  return function (dispatch) {
    dispatch(fetchItems());
    axios
      .get("https://gorest.co.in/public-api/products")
      .then((response) => {
        console.log(response);
        let items = response.data;
        dispatch(fetchItemsSuccess(items));
      })
      .catch((err) => {
        dispatch(fetchFail(err));
      });
  };
};
