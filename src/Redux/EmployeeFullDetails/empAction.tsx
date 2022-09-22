import { EMPLOYEE_FULL_DETAILS } from "./type";

export const employeeFullDetails=(details:any)=>{
   return{
    type:EMPLOYEE_FULL_DETAILS,
    payload : details
   }
}