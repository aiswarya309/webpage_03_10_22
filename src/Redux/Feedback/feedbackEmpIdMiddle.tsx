import axios from "axios"
import {feedbackEmpId} from './feedbackAction'
function feedbackEmpIdMiddle(data:any){
    // console.log("data.id middle fedbakempid:",data.id);
    return function (dispatch:any){
        const token=localStorage.getItem("mytoken")
    axios.get(`http://localhost:5000/auth/feedbackEmpId`,{headers:{'authorization':"Bearer " + token},params:{id:data.id}})
        .then((res)=>{
            // console.log("Res in individl feedbk",res.data.result);
            dispatch(feedbackEmpId(res.data.result))
        })
}
}
export default feedbackEmpIdMiddle