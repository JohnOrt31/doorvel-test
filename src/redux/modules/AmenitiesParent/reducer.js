// eslint-disable-next-line
import _ from 'lodash';
import {

  LOAD_AMENITIES_PARENT,

  }  from './types';
  
// eslint-disable-next-line
export default (state = {}, action) => { 
  switch (action.type) { 
    case LOAD_AMENITIES_PARENT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
