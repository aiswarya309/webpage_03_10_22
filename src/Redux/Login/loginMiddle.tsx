import axios from 'axios';
import {loginResult} from './loginAction'
import {authFalse,authData} from '../App/actionApp'
import {ToastContainer ,toast} from 'react-toastify';
import {rootState} from '../../Redux/Reducer'
import AppReducer from '../../Redux/App/reducerApp'
import {tockenChange} from '../../Redux/Login/loginAction'

function LignupMiddle(login:any){
    return function(dispatch:any){
        // console.log("Login middel IN")
        axios.post(`${process.env.REACT_APP_BACKEND}/auth/login`,{email:login.email,password:login.password})
        .then(response=>{
            // console.log("Axxios logMiddle IN");
            
        // dispatch(loginResult(response.data))
        // console.log("response in loggin middle:--",response)
        const status=response.data.success
        const token=response.data.token
        // console.log("Token:-",token)
        const history =login.history
        // console.log("staus,,",status)
        
        if(status){
            // console.log("LignupMiddle status-true,token",token)
            localStorage.setItem("AuthValue","true")
            dispatch(authData)
            dispatch(loginResult(token))
            toast("success")
            localStorage.setItem("mytoken",token)
            // console.log("LoginMiddle localStorage.getItem",localStorage.getItem("mytoken"));
            login.nav.push('/')
            
        }else{
            // console.log("LignupMiddle status-false")
            // localStorage.setItem("AuthValue","false")
            toast("Login failed")
            // dispatch(tockenChange())
            // localStorage.removeItem("token")
            // dispatch(authFalse)
            // login.nav.push('/login')
        }
        // console.log("RESPONSE In Login:-",response.data)
        })
        .catch(error => {
            console.log("Error",error);
            
            return error;
          });
    }
}
export default LignupMiddle