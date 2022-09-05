import { SAVE_API_DATA } from "./jsonApi.types";

const INITIAL_STATE = {
  data: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_API_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
