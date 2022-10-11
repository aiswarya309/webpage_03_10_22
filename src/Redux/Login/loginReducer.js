import {LOGIN} from './loginType'
const initialState ={
    login :{
        email :'',
        password:''
    }
}
function LoginReducer(State = initialState,action){
    switch(action.type){
        case LOGIN:
            return{...State.login,email:action.payload.login.email, password:action.payload.login.password};
        default:
                return State
    }
}

export default LoginReducer