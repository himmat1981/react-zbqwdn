import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  username: "",
  password: ""
}
console.log('dfs')
const reducer = (state = initialState, action) => {
  console.log("action" + action.type)
  const stateClone = {...state};
  switch(action.type) {
    case actionTypes.MY_LOGIN: stateClone.username = "himmat"; 
    break;
   default:
   break;
  }
  console.log('stateClone.loading: ' + stateClone.username);
  return stateClone;
};

export default reducer;