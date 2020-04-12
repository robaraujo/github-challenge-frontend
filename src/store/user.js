/* eslint-disable camelcase */
import axios from "axios";

// Action Types
export const Types = {
  GET_REQUEST: "user/GET_REQUEST",
  GET_SUCCESS: "user/GET_SUCCESS",
  GET_FAILURE: "user/GET_FAILURE",
};

// Reducer
const initialState = {
  list: [],
  user: null,
  loading: false,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        user: null,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
      };
    default:
      return state;
  }
}

// Action Creators

/**
 * Get all emails validate from this user
 */
export function get(id) {
  return (dispatch) => {
    dispatch({ type: Types.GET_REQUEST });
    axios.get(`/user/${id}`).then(
      (res) => {
        dispatch({
          type: Types.GET_SUCCESS,
          payload: res.data,
        });
      },
      (err) => {
        dispatch({
          type: Types.GET_FAILURE,
          payload: (err.response && err.response.data.error) || "Server error",
        });
      }
    );
  };
}
