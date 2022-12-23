import {EMPLOYEE_DETAILS,EMPLOYEE_DATA} from './empType'
import {data} from '../../type'

export const empDetails =(emp_details:data)=>{
    return{
        type : EMPLOYEE_DETAILS,
        payload : emp_details
    }

}

export const employeeData=(details:any)=>{
    return{
     type:EMPLOYEE_DATA,
     payload : details
    }
 }