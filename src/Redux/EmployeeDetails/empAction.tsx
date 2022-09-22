import {EMPLOYEE_DETAILS} from './empType'
import {data} from '../../type'

export const empDetails =(emp_details:data)=>{
    return{
        type : EMPLOYEE_DETAILS,
        payload : emp_details
    }

}