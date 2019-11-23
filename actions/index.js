export const login = (
  uname,
  pass
) => {
  console.log(uname);
  return {
    type: "LOGIN_ADD",
    payload: {
      uname,
      pass
    }
  };
};
 

export default login