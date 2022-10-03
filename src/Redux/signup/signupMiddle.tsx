import axios from 'axios';
import {SignupAction} from './signupAction'

function SignupMiddle(email:any,password:any,name:any){
    return function(dispatch:any){
        axios.post(`${process.env.REACT_APP_SIGNUP_API}/auth/signup`,{email,password,name})
        .then(response=>{
        dispatch(SignupAction(response.data))
        })
        .catch(error => {
            return error;
          });
    }
}
export default SignupMiddle