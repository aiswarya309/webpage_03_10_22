import {useState , useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux/es/exports';
import axios from 'axios';
import {ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'  ;
import './signup.css'
import SignupMiddle from '../../Redux/signup/signupMiddle'
import signupReducer from '../../Redux/signup/signupReducer'
import {SignupAction} from '../../Redux/signup/signupAction'
import {rootState} from '../../Redux/Reducer'


function Signup(){
    const [emailField, setemailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [nameField, setnameField] = useState('')


   
    const user=useSelector((State:rootState)=>{    console.log("state",State)
    return State.SignupReducer.user})
    const history =useHistory()
    const dispatch=useDispatch()
    const btnclick=()=>{
        toast("success...")
        dispatch<any>(SignupMiddle({email:emailField,password:passwordField,name:nameField}))
        console.log("signup data:-",emailField,passwordField,nameField)
        history.push('/login')
        console.log("Signup",user)
        // }
    }
    const signupemail=(e:any)=>{
        setemailField(e.target.value)
    }
    const signuppassword=(e:any)=>{
        setPasswordField(e.target.value)
    }
    // const {email,password,name}=user
    const signupname=(e:any)=>{
        setnameField(e.target.value)
    }
    const btnlogin =()=>{
        history.push('/login')
    }
        return(
            <div className='container_sign'>
                <form>
                    <b>Signup</b> <br/><br/>
                    Email: <input type="text" value={emailField} onChange={signupemail}/><br/><br/>
                    Password: <input type="password" value={passwordField} onChange={signuppassword}/><br/><br/>
                    Username: <input type="text" value={nameField} onChange={signupname}/><br/><br/>
                    <button type="button" onClick={btnclick}>Signup</button>
                    <button type="button" onClick={btnlogin}>Login</button>

                </form>
            </div>
            )
}
export default Signup
