const initilState = {
  username: '',
  password: ""
}


const login = (state = initilState, payload) => {
console.log(payload);
 
   switch(payload.type) {
      case 'LOGIN':
        return [
          ...state,
         {
     uname: username,
     pwd: password
   }
        ]
 
   }
}

export default login;