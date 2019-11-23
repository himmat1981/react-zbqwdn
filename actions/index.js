import * as actionTypes from './ActionTypes';

export const login = (
  uname,
  pass
) => {
  console.log(pass);
  return {
    type: actionTypes.MY_LOGIN,
    payload: {
      uname,
      pass
    }
  };
};
 

export default login