import {SIGNUP} from './signupType';
export const SignupAction=(user:any)=>{
    console.log("SignupAction")
    return{
    type: SIGNUP,
    payload: user
    }
}
