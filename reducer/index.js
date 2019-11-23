import * as actionTypes from '../actions/ActionTypes';

const initilState = {
  uname: '',
  pass: ""
}


const login = (state = initilState, action) => {
  
  console.log(action)
   switch(action.type) {
      case actionTypes.MY_LOGIN:

      console.log("test");
        return {
          ...state,
        paylod:action.payload
        }
 
   }
}

export default login;