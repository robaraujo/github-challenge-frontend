/* eslint-disable camelcase */
import axios from "axios";

// Action Types
export const Types = {
  LIST_REQUEST: "user/LIST_REQUEST",
  LIST_SUCCESS: "user/LIST_SUCCESS",
  LIST_FAILURE: "user/LIST_FAILURE",
};

// Reducer
const initialState = {
  list: [],
  error: false,
  loading: false,
  lastId: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.LIST_SUCCESS:
      const { list, lastId } = action.payload;

      return {
        ...state,
        loading: false,
        error: false,
        list: list,
        lastId: lastId,
      };
    case Types.LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

// Action Creators

/**
 * Get all emails validate from this user
 */
export function list(since) {
  return (dispatch, getState) => {
    dispatch({ type: Types.LIST_REQUEST });
    axios.get(`/users/${since}`).then(
      (res) => {
        dispatch({
          type: Types.LIST_SUCCESS,
          payload: res.data,
        });
      },
      (err) => {
        dispatch({
          type: Types.LIST_FAILURE,
          payload: (err.response && err.response.data.error) || "Server error",
        });
      }
    );
  };
}
