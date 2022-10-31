import {SIGNUP,SIGNUP_RESULT} from './signupType';
export const SignupAction=(user:any)=>{
    console.log("user and result ",user)
    console.log("SignupAction")
    return{
    type: SIGNUP,
    payload: user
    }
}

export const SignupResult=(result:any|null)=>{
    console.log("ACRION DATA paylod:--",result)
    return{
        type :SIGNUP_RESULT,
        payload :result
    }
}