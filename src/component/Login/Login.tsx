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



function Login(){
    let history = useHistory()
    const dispatch =useDispatch()
    //  useEffect(() => {
    //     let isAuth:any = sessionStorage.getItem('AuthValue')
    //     if(isAuth) {
    //        history.push('/')
    //     }
    //  }, [])
    // const data_lgn:any=useSelector((State:rootState)=>State.LoginReducer.result)
    const [loginData, setLoginData] = useState({
        txtName:'',
        password:''
    })
    // let [aishu,setaishu]=useState('')
    const {txtName,password}= loginData
    const btnClick =()=>{
        sessionStorage.setItem("AuthValue","true")
            dispatch(authData())
            dispatch<any>(LignupMiddle({email:txtName,password:password,nav:history}))


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
