import axios from "axios"
import replyGet from './replyGet'

function replyPost(data:any):any{
    return function(dispatch:any){
        axios.post(`http://localhost:5000/auth/replyPost`,{id:data.id,reply:data.reply,f_id:data.f_id})
        .then((res)=>{
            dispatch(replyGet())
            console.log("replyPostM:-",res);
            
        })
    }
}
export default replyPost