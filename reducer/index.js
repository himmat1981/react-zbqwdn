import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  username: "",
  password: ""
}

const reducer = (state = initialState, action) => {
  
  
  switch(action.type) {
    case "MY_LOGIN": 
     return {...state}
      break;
    default:
     break;
  }
  
  
};

export default reducer;