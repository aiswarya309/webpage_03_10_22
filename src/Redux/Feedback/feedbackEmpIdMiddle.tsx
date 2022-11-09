import axios from "axios"
function feedbackEmpIdMiddle(data:any){
    console.log("data.id middle fedbakempid:",data.id);
    
return function (dispatch:any){
    // axios.post(`http://localhost:5000/auth/feedbackEmpId`,{id:data.id})

}
}
export default feedbackEmpIdMiddle