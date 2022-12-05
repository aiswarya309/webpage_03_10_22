import axios from 'axios';
// import {loginResult} from './loginAction'
import {authFalse,authData} from '../App/actionApp'
import {ToastContainer ,toast} from 'react-toastify';
import {rootState} from '../../Redux/Reducer'
import AppReducer from '../../Redux/App/reducerApp'
import {tockenChange} from '../../Redux/Login/loginAction'

function ContactUs(contact:any){
    return function(dispatch:any){
        axios.post(`http://localhost:5000/auth/contact`,{name:contact.name,phn:contact.phn,place:contact.place,email:contact.email})
        .then(response=>{
            console.log("Axxioscontact",response);
            
        // dispatch(loginResult(response.data))
   
        // console.log("RESPONSE In Login:-",response.data)
        })
        .catch(error => {
            console.log("Error",error);
            
            return error;
          });
    }
}
export default ContactUs