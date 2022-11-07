import axios from 'axios';
import {feedbackAction} from './feedbackAction'
function feedbackGet(){
    return function(dispatch:any){
        const token=localStorage.getItem("mytoken")

        axios.get(`${process.env.REACT_APP_BACKEND}/auth/feedbackGet`,{headers:{'authorization':"Bearer " + token}})
        .then(res=>{
            dispatch(feedbackAction(res.data.result))
            console.log("res F_get:-",res.data.result)
        })
        .catch(err=>{
            console.log("err:-",err);
            
        })
    }
}
export default feedbackGet