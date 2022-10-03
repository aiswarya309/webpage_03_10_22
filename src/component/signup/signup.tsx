import {useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'  ;
import './signup.css'
function Signup(){
    const [signup , setsignup]=useState({
            email :'',
            password:'',
            name:''
    })
    const history =useHistory()
    const {email,password,name} =signup
    const btnclick=()=>{
        // if(email === "" && password === " " && name === " "){
        //     toast("Fill the field")
        //     history.push('/signup')
        // }else{
        axios.post('http://localhost:5000/auth/signup',{email,password,name})
        toast("success...")
        history.push('/login')
        console.log("Signup",email,password,name)
        // }
    }
    const signupemail=(e:any)=>{
        setsignup({...signup,email:e.target.value})
    }
    const signuppassword=(e:any)=>{
        setsignup({...signup,password:e.target.value})
    }
    const signupname=(e:any)=>{
        setsignup({...signup,name:e.target.value})
    }
    const btnlogin =()=>{
        history.push('/login')
    }
        return(
            <div className='container'>
                <form>
                    <b>Signup</b> <br/><br/>
                    Email: <input type="text" value={email} onChange={signupemail}/><br/><br/>
                    Password: <input type="password" value={password} onChange={signuppassword}/><br/><br/>
                    Username: <input type="text" value={name} onChange={signupname}/><br/><br/>
                    <button type="button" onClick={btnclick}>Signup</button>
                    <button type="button" onClick={btnlogin}>Login</button>

                </form>
            </div>
            )
}
export default Signup
