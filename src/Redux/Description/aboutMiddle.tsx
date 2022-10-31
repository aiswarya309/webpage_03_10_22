import axios from 'axios';
import header from '../../component/Header/header';
import {AboutAction} from './AboutAction';
// import { useDispatch, useSelector} from 'react-redux';
import {authFalse} from '../../Redux/App/actionApp';
// import { useHistory } from 'react-router-dom'
import {tockenChange} from '../../Redux/Login/loginAction'





function AboutMiddle():any{
    // console.log("about moddle IN ");
    // const dispatch=useDispatch()
    // const history=useHistory()
    
    return function(dispatch:any){
        // setTimeout(()=>{
            const token=localStorage.getItem("mytoken")
            console.log(" #######aboutmiddle.tsx localStorage.getItem...",token)
            axios.get(`${process.env.REACT_APP_BACKEND}/auth/about`,{headers:{'authorization':"Bearer " + token}})
        .then(response=>{
            // console.log("RESPONSE.DATA ABOUTMIDDLE",response.data);
            dispatch(AboutAction(response.data))
            const status=response.data.success

            if(status == false){
				localStorage.setItem("AuthValue","false")
				console.log(" *************Description.tsx status == false")
				// localStorage.removeItem("mytoken")
				localStorage.clear()
                dispatch(tockenChange())

				// history.push('/login')
				dispatch(authFalse())
				// sessionStorage.setItem("AuthValue","false")
				}


        })
        .catch(error => {
            console.log(" about_middle.tsx error in catch",error)
            return error;
          });
        // },1000)

        
        // axios.get(`${process.env.REACT_APP_BACKEND}/auth/about`,{headers:{'authorization':"Bearer " + localStorage.getItem("token")}})
        // .then(response=>{
        //     // console.log("about_middle.tsx  response",response);
        //     dispatch(AboutAction(response.data))
        //     // console.log("Response .config>-", response.config.headers);
        //     // console.log("about_middle.tsx  Response .data >-", response.data);

        //     const status=response.data.success
        //     // console.log("about_middle.tsx Result in :-",status)
        //     // const status=
        //     // if(status === false){
        //     //     console.log(" Description.tsx status == false")
        //     //     localStorage.clear()
        //     //     history.push('/login')
        //     //     dispatch<any>(authFalse)
        //     //     // sessionStorage.setItem("AuthValue","false")
        //     // }
            
        // })
        // .catch(error => {
        //     console.log(" about_middle.tsx error in catch",error)
        //     return error;
        //   });
    }
    
}
export default AboutMiddle
