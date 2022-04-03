import { SEARCH_RESULTS } from '../constants';


const initialState = [];

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SEARCH_RESULTS:

      return action.payload;
    
    default:
      return state;
  }
}


export default reducer;