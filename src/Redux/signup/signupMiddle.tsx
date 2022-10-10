import axios from 'axios';
import {SignupAction} from './signupAction'

function SignupMiddle(user:any){
    console.log("middleSignup")
    return function(dispatch:any){
        axios.post(`${process.env.REACT_APP_SIGNUP_API}/auth/signup`,{email:user.email,password:user.password,name:user.name})
        .then(response=>{
        dispatch(SignupAction(response.data))
        })
        .catch(error => {
            return error;
          });
    }
}
export default SignupMiddle