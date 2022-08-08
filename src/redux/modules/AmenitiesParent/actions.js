import {// eslint-disable-next-line
    
    LOAD_AMENITIES_PARENT, // eslint-disable-next-line
   
    }  from './types';
  
import amenitiesObj from '../../../api/amenities';

export const amenitiesParentList = () => async (dispatch, getState) => {
  const response = await amenitiesObj.get('/cat-amenities-parents/');

  dispatch({ type: LOAD_AMENITIES_PARENT, payload: response.data });

  return response.data;
};


      