import { useState,useEffect } from "react";
import './login.css'
import { useHistory ,Link} from "react-router-dom";
import { authData } from "../../Redux/App/actionApp";
import { useDispatch, useSelector} from 'react-redux';
import {ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'  ;
import LignupMiddle from '../../Redux/Login/loginMiddle'
import LoginReducer from '../../Redux/Login/loginMiddle'
import {rootState} from '../../Redux/Reducer'
import AppReducer from '../../Redux/App/reducerApp'

function Login(){
    let history = useHistory()
    const dispatch =useDispatch()
    //  useEffect(() => {
    //     let isAuth:any = sessionStorage.getItem('AuthValue')
    //     if(isAuth) {
    //        history.push('/')
    //     }
    //  }, [])
    // useEffect(()=>{
    //     localStorage.clear()
    // },[])
    let auth:any=useSelector((State:rootState)=>{
    return State.AppReducer.Authenticate})
    // console.log("AUTH in login.tsx",auth)
    const [loginData, setLoginData] = useState({
        txtName:'',
        password:''
    })
    // let [aishu,setaishu]=useState('')
    const {txtName,password}= loginData
    const btnClick =(e:any)=>{
        // console.log("LOGIN.tsx localstorage btn",localStorage.getItem("mytoken"))
        // e.priventDefault()
        if(txtName.length >5 && password.length >5){
            // dispatch<any>(authData)
            dispatch<any>(LignupMiddle({email:txtName,password:password,nav:history}))
            // sessionStorage.setItem("AuthValue",auth)
            // console.log("login.tsx auth:-",auth);
            
            // console.log("login.tsx session get",sessionStorage.getItem("AuthValue"));
        }
        // dispatch<any>(LignupMiddle({email:txtName,password:password}))
        // const status=data_lgn.success
        // console.log("status",status);
        // if(status === true){
        //     sessionStorage.setItem("AuthValue","true")
        //     history.push('/')
        //     dispatch(authData())
        //     // setaishu("uuuuuww") 
        //     // console.log("aishu",aishu)
        // }
        // else{
        //     history.push('/login')
        // }
        // if((txtName === 'admin') && (password === 'admin')){
            // sessionStorage.setItem("AuthValue","true")
            // dispatch(authData())
            // dispatch<any>(LignupMiddle({email:txtName,password:password,navi:history}))
            // history.push('/')
        // }else{
        //     history.push('/login')
        // }
    }
    // console.log("AUTH IN LGN:-",auth)
    const logintextname=(val:any)=>{
        setLoginData({...loginData,txtName:val.target.value})
    }
    const loginpassword=(val:any)=>{
        setLoginData({...loginData,password:val.target.value})
    }
    const btnsignup =()=>{
        history.push('/signup')
    }
   
        return(
            <div className="container_lgn">
                <form >
                    <b>Login</b> <br/><br/>
                    Name: <input className="txt" type="text"  onChange={logintextname} value={txtName}/><br/><br/>
                    Password: <input className="txt" type="password" onChange={loginpassword} value={password}/><br/><br/>
                    <button className="btnLogin_lgn" type="button" onClick={btnClick}>Login</button>
                    <button className="btnLogin_lgn" type="button" onClick={btnsignup}>SignUp</button>
                </form>

            </div>
            )
}
export default Login
