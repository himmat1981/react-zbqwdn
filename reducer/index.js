import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  suc: "",
}

const login = (state = initialState, action) => {
  const stateClone = {...state};
  switch(action.type) {
    case "MY_LOGIN": 
        stateClone.suc = "success fully added"; 
        break;
     
  }
  return stateClone;
};

export default login;