import {
  // eslint-disable-next-line
  LOAD_AMENITIES_CHILDS, // eslint-disable-next-line
  LOAD_AMENITIES_CHILDS_NEW,
} from "./types";

import amenitiesObj from "../../../api/amenities";

export const amenitiesChildsList = () => async (dispatch, getState, page) => {
  if (page > 1) {
    const response = await amenitiesObj.get(
      `/cat-amenities-childs/?page=1`
    );

    dispatch({ type: LOAD_AMENITIES_CHILDS, payload: response.data });

    return response.data;
  }
  else{
    const response = await amenitiesObj.get(
        `/cat-amenities-childs/?page=1`
      );
  
      dispatch({ type: LOAD_AMENITIES_CHILDS, payload: response.data });
  
      return response.data;

  }
};

export const amenitiesChildsListNew =
  () => async (dispatch, getState, page) => {
    const response = await amenitiesObj.get(
      `/cat-amenities-childs/?page=${page}`
    );

    dispatch({ type: LOAD_AMENITIES_CHILDS_NEW, payload: response.data });

    return response.data;
  };
