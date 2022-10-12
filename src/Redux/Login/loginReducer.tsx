import {LOGIN,LOGIN_RESULT} from './loginType'
const initialState :any={
    login :{
        email :'',
        password:''
    },
    result:{}
   
}
function LoginReducer(State = initialState,action:any){
    switch(action.type){
        case LOGIN:
            return{...State.login,email:action.payload.login.email, password:action.payload.login.password};
        case LOGIN_RESULT:
                return{...State,result :action.payload};
            
            default:
                return State
    }
}

export default LoginReducer