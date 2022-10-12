import axios from 'axios';
import {loginResult} from './loginAction'

function LignupMiddle(login:any){
    return async function(dispatch:any){
        await axios.post(`${process.env.REACT_APP_BACKEND}/auth/login`,{email:login.email,password:login.password})
        .then(response=>{
        dispatch(loginResult(response.data))
        const status=response.data.success
        const history =login.history
        console.log("staus,,",status)
        console.log("Login",login.navi)

        if(status === true){
            login.nav.push('/')
        }else{
            login.nav.push('/login')
        }
        console.log("RESPONSE:-",response.data)
        })
        .catch(error => {
            return error;
          });
    }
}
export default LignupMiddle