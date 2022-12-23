import axios from 'axios'
import {empDetails} from '../EmployeeDetails/empAction'
function employeeGet(){
    return function(dispatch:any){
        axios.get(`${process.env.REACT_APP_BACKEND}/auth/employeeGet`)
        .then(res=>{
            console.log("Response from empGet:",res)
            dispatch(empDetails(res.data.result))
        })
        .catch((err)=>{
            console.log("ERROR",err);
        })
    }
}
export default employeeGet