/* eslint-disable camelcase */
import axios from "axios";

// Action Types
export const Types = {
  GET_REQUEST: "repos/GET_REQUEST",
  GET_SUCCESS: "repos/GET_SUCCESS",
  GET_FAILURE: "repos/GET_FAILURE",
};

// Reducer
const initialState = {
  list: [],
  error: null,
  loading: false,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        list: null,
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        list: action.payload,
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        list: null,
      };
    default:
      return state;
  }
}

// Action Creators

/**
 * Get all emails validate from this repos
 */
export function get(id) {
  return (dispatch) => {
    dispatch({ type: Types.GET_REQUEST });
    axios.get(`/user/${id}/repos`).then(
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
