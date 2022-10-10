import {SIGNUP } from '../../Redux/signup/signupType'
const initialState ={
    user :{
        email :'',
        password:'',
        name:''
    }
}
function signupReducer(State:any = initialState,action:any):any{
    switch(action.type){
        case SIGNUP:
            return{...State.user,email:action.payload.user.email, password:action.payload.user.password,name:action.payload.user.name};
        default:
                return State
    }
}

export default signupReducer