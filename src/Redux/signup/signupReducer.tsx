import {SIGNUP ,SIGNUP_RESULT} from '../../Redux/signup/signupType'
const initialState ={
    user :{
        email :'',
        password:'',
        name:''
    },
    result:{
        success: '', 
        message: ''

    }
}

function signupReducer(State:any = initialState,action:any):any{
    // console.log("State",State)
    switch(action.type){
        case SIGNUP:
            return{...State,email:action.payload.user.email, password:action.payload.user.password,name:action.payload.user.name,result:action.paylod.result};
            case SIGNUP_RESULT:
                // console.log("action.paylod",action.payload)
                return{...State,result :action.payload};   
            default:
                return State
    }

}

export default signupReducer