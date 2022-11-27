import axios from "axios"
import feedbackGet from './feedbackGet'
function feedbackMiddle(data:any){
    // console.log("data:-",data);
    
    return function(dispatch:any){
        const id=data.id
        // console.log("sid",id);
        
        axios.post(`http://localhost:5000/auth/feedbackPost`,{id:data.id,name:data.name,empName:data.empName,feedback:data.feedback})
        .then(res=>{
            dispatch(feedbackGet())
            // console.log("res",res)
        })
        .catch(err=>{
            // console.log("err")
        })
    }
}
export default feedbackMiddle