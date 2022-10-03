import { useState,useEffect } from "react";
import './login.css'
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
            // toast.success("succes")
            sessionStorage.setItem("AuthValue","true")
            dispatch(authData())
            history.push('/')
        }else{
            history.push('/login')
        }
    }
    const logintextname=(val:any)=>{
        setLoginData({...loginData,txtName:val.target.value})
    }
    const loginpassword=(val:any)=>{
        setLoginData({...loginData,password:val.target.value})
    }
    const btnsignup =()=>{
        history.push('/signup')
    }
    // useEffect(() => {
    //     let isAuth:any = sessionStorage.getItem('AuthValue')
    //     if(isAuth && isAuth !== 'undefined') {
    //        history.push('/')
    //     }
    //  }, [])
        return(
            <div className="container">
                <form>
                    <b>Login</b> <br/><br/>
                    Name: <input type="text"  onChange={logintextname} value={txtName}/><br/><br/>
                    Password: <input type="password" onChange={loginpassword} value={password}/><br/><br/>
                    <button type="button" onClick={btnClick}>Login</button>
                    <button type="button" onClick={btnsignup}>SignUp</button>
                </form>

            </div>
            )
}
export default Login
