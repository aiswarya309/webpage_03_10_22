import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authData } from "../../Redux/App/actionApp";
import { useDispatch} from 'react-redux';

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
                    Password: <input type="text" onChange={(val)=>setLoginData({...loginData,password:val.target.value})} value={password}/><br/><br/>
                    <button type="button" onClick={btnClick}>Login</button>
                </form>
            </div>
            )
}
export default Login
