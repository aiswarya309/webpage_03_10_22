import axios from 'axios'
import {employeeFullDetails} from './empAction'

function EmpMiddle(location:any){
    return function(dispatch:any){
        axios.get(`${process.env.REACT_APP_MY_API}/employeeFullDetails/`+location)
        .then(response=>{
        dispatch(employeeFullDetails(response.data))
        })
        .catch(error => {
            return error;
          });
    }
}
export default EmpMiddle