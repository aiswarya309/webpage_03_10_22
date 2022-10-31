import axios from 'axios';
import {SignupResult} from './signupAction'
import {ToastContainer ,toast} from 'react-toastify';


 function SignupMiddle(user:any){
    // console.log("middleSignup user obj",user)
    // console.log("middle user.obj:--",user.email,user.password,user.name)

    return function(dispatch:any){
       axios.post(`${process.env.REACT_APP_BACKEND}/auth/signup`,{email:user.email,password:user.password,name:user.name})
        .then(response=>{
            console.log(" response:--",response)
        dispatch(SignupResult(response.data))
        const status =response.data.success
        const history=user.nav
        if(status === false){
          toast("Email already exists")
          history.push('/signup')
        }
        else{
          toast("Success")
          // history.push('/login')

        }
        console.log("status signup",status)
        })
        .catch(error => {
          console.log("error",error)
            return error;
          });
    }
}
export default SignupMiddle