import { useState } from "react";
import { useHistory ,Link} from "react-router-dom";
import { authData } from "../../Redux/App/actionApp";
import { useDispatch} from 'react-redux';
import {ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'  ;

function Login(){
    const [loginData, setLoginData] = useState({
        txtName:'',
        password:''
    })
    const {txtName,password}= loginData
    let history = useHistory()
    const dispatch =useDispatch()
    const btnClick =() =>{
        if((txtName === 'admin') && (password === 'admin')){
            toast.success("succes")

            sessionStorage.setItem("AuthValue","true")
            dispatch(authData())
            history.push('/')
        }else{
            history.push('/login')
        }
    }
        return(
            <div>
                <form>
                    Name: <input type="text"  onChange={(val)=>setLoginData({...loginData,txtName:val.target.value})} value={txtName}/><br/><br/>
                    Password: <input type="password" onChange={(val)=>setLoginData({...loginData,password:val.target.value})} value={password}/><br/><br/>
                    <button type="button" onClick={btnClick}>Login</button>
                    <Link to="/signup">Signup</Link>
                </form>

            </div>
            )
}
export default Login
