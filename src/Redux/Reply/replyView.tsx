import axios from "axios"
// import replyGet from './replyGet'
import {replyAction} from './replyAction'

function replyView(view:any):any{
    return function(dispatch:any){
        const token=localStorage.getItem("mytoken")
        // console.log("f_id':view.f_id,'f_empId':view.f_empId",view.id,view.f_empId);
        const feedbackId=view.id
        
        axios.get(`http://localhost:5000/auth/replyView`,{headers:{'authorization':"Bearer " + token},params:{'f_id':view.id,'f_empId':view.f_empId}})
        .then((res)=>{
            const result=res.data.result
            // console.log("reply middle:::--",result);
            
            dispatch(replyAction({reply:result,feedbackId:feedbackId}))
            // console.log("replyView@#$%^&*&^%$#$%^&:-",res.data.result);
            
        })
    }
}
export default replyView