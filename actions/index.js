import * as actionTypes from './ActionTypes';

export const login = (
  uname,
  pass
) => {
 
  return {
    type: "MY_LOGIN",
    payload: {
      uname,
      pass
    }
  };
};
 

export default login