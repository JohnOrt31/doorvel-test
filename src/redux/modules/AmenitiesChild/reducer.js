// eslint-disable-next-line
import _ from "lodash";
import { LOAD_AMENITIES_CHILDS, LOAD_AMENITIES_CHILDS_NEW } from "./types";

// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_AMENITIES_CHILDS:
      return { ...state, [action.payload.id]: action.payload };

    case LOAD_AMENITIES_CHILDS_NEW:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
