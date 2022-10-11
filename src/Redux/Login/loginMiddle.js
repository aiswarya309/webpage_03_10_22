import axios from 'axios';
import {LoginAction} from './loginAction'

function LignupMiddle(login){
    console.log("middleSignup")
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_BACKEND}/auth/login`,{email:login.email,password:login.password})
        .then(response=>{
        dispatch(LoginAction(response.data))
        })
        .catch(error => {
            return error;
          });
    }
}
export default LignupMiddle