import { SAVE_API_DATA, CREATE_RESOURCE, UPDATE_RESOURCE, DELETE_RESOURCE } from "./jsonApi.types";

export const saveApiData = (data) => {
  return {
    type: SAVE_API_DATA,
    payload: data,
  };
};

export const createResource = (data) => {
  return {
    type: CREATE_RESOURCE,
    payload: data,
  };
};

export const updateResource = (data) => {
  return {
    type: UPDATE_RESOURCE,
    payload: data,
  };
};

export const deleteResource = (data) => {
  return {
    type: DELETE_RESOURCE,
    payload: data,
  };
};
