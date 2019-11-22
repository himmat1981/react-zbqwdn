const login = (state = [], action) => {
   switch(action.type) {
      case 'Login':
        return [
          ...state,
          {
          username : action.uname,
          password: action.pwd
          }
        ]

   }
}

export default login;