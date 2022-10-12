import axios from 'axios';
import {SignupAction} from './signupAction'

function SignupMiddle(user:any){
    console.log("middleSignup",user)
    return function(dispatch:any){
        axios.post(`${process.env.REACT_APP_BACKEND}/auth/signup`,{email:user.email,password:user.password,name:user.name})
        .then(response=>{
                // console.log("middle obj:--",user.email,user.password,user.name)
                console.log("middle response:--",response)

        dispatch(SignupAction(response.data))
        console.log("middle data:--",response.data)

        })
        .catch(error => {
            return error;
          });
    }
}
export default SignupMiddle