import axios from 'axios'
import {employeeData} from './empAction'
function employeeGet(empId:any){
    return function(dispatch:any){
        axios.get(`${process.env.REACT_APP_BACKEND}/auth/empData`,{params:{id:empId.id}})
        .then(res=>{
            console.log("Response from empGet:",res)
            dispatch(employeeData(res.data.result))
        })
        .catch((err)=>{
            console.log("ERROR",err);
        })
    }
}
export default employeeGet