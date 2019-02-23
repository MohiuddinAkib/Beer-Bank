import { GET_ERRORS } from "../actions/types";

export default (state, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.message,
        status: action.payload.statusCode
      };
    default:
      return state;
  }
};
