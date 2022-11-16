import axios from "axios";
import {replyAction} from './replyAction'
function replyGet(){
    console.log("replyGet");
    return function(dispatch:any){
        // console.log("replyAxios");

        // const token=localStorage.getItem("mytoken")
        // axios.get(`http://localhost:5000/auth/replyGet`,{headers:{'authorization':"Bearer " + token}})
        // .then((res)=>{
        //     console.log("replyget data:-",res.data);
        //     dispatch(replyAction(res.data.result))
        // })
    }
}

export default replyGet