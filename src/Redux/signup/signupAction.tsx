import {SIGNUP} from './signupType';
export const SignupAction=(user:any)=>{
    return{
    type: SIGNUP,
    payload: user
    }
}
