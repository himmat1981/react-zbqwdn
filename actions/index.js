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
 
const receiveMyApi = response => ({
  type: 'RECEIVE_MY_API',
  response
});

export default login