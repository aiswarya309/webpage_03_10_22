import {useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
function Signup(){
    const [signup , setsignup]=useState({
            email :'',
            password:'',
            name:''
    })
    const history =useHistory()
    const {email,password,name} =signup
    const btnclick=()=>{
        axios.post('http://localhost:5000/auth/signup',{email,password,name})
        history.push('/login')
        console.log("Signup",email,password,name)
    }
    const signupset=(e:any)=>{
        setsignup({...signup,email:e.target.value})
    }
        return(
            <div>
                <form>
                    Email: <input type="text" value={email} onChange={signupset}/><br/><br/>
                    Password: <input type="password" value={password} onChange={(e)=>{setsignup({...signup,password:e.target.value})}}/><br/><br/>
                    Username: <input type="text" value={name} onChange={(e)=>{setsignup({...signup,name:e.target.value})}}/><br/><br/>
                    <button type="button" onClick={btnclick}>Signup</button>
                    <button type="button" onClick={()=>history.push('/login')}>Login</button>

                </form>
            </div>
            )
}
export default Signup
