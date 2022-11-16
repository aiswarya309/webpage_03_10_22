import axios from "axios"
// import replyGet from './replyGet'
import {replyAction} from './replyAction'

function replyView(view:any):any{
    return function(dispatch:any){
        const token=localStorage.getItem("mytoken")
        console.log("f_id':view.f_id,'f_empId':view.f_empId",view.f_id);
        
        axios.get(`http://localhost:5000/auth/replyView`,{headers:{'authorization':"Bearer " + token},params:{'f_id':view.f_id,'f_empId':view.f_empId}})
        .then((res)=>{
            dispatch(replyAction(res.data.result))
            console.log("replyView@#$%^&*&^%$#$%^&:-",res.data.result);
            
        })
    }
}
export default replyView