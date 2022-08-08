import { combineReducers } from "redux";

import amenitiesParentsReducer from "./modules/AmenitiesParent";
import amenitiesChildsReducer from "./modules/AmenitiesChild";

export default combineReducers({
  amentiniesParent: amenitiesParentsReducer,
  amentiniesChilds: amenitiesChildsReducer,
});
