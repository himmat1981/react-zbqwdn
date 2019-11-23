
const initilState = {
  uname: '',
  pass: ""
}


const login = (state = initilState, action) => {
  
  console.log(action)
   switch(action.type) {
      case 'LOGIN_ADD':

      console.log("test");
        return {
          ...state,
        paylod:action.payload
        }
 
   }
}

export default login;