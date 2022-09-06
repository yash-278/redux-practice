import { SAVE_API_DATA, CREATE_RESOURCE, UPDATE_RESOURCE, DELETE_RESOURCE } from "./jsonApi.types";

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
    case CREATE_RESOURCE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UPDATE_RESOURCE:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ...action.payload,
            };
          }
          return item;
        }),
      };
    case DELETE_RESOURCE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
