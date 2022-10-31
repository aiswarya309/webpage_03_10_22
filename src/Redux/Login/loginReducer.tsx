import {LOGIN,TOKEN,TOKEN_CHNAGE} from './loginType'
const initialState :any={
    login :{
        email :'',
        password:''
    },
    token:''
   
}

// {...State,
//     login: {
//         email: action.payload.login.email,
//         password: action.payload.login.password
//     },
//     result: action.payload.login.result
// }

function LoginReducer(State = initialState,action:any){
    switch(action.type){
        case LOGIN:
            return{...State.login,email:action.payload.login.email, password:action.payload.login.password};
        case TOKEN:
                return{...State,token :action.payload};
        case TOKEN_CHNAGE:
            return{...State,token :null };
                   
            default:
                return State
    }
}

export default LoginReducer