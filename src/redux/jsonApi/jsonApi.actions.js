import { SAVE_API_DATA } from "./jsonApi.types";

export const saveApiData = (data) => {
  return {
    type: SAVE_API_DATA,
    payload: data,
  };
};
