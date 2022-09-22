import axios from 'axios'
import{ empDetails} from './empAction'

function EmpAPI(){
    return function(dispatch:any){
        axios.get(`${process.env.REACT_APP_MY_API}/employeeDetails`)
        .then(response=>{
            dispatch(empDetails(response.data))
        })
        .catch(error => {
            return error;
          });
    }
}
export default EmpAPI