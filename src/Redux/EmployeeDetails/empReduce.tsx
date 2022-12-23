import {actionEmp} from '../../type'
import { stateEmp } from '../../type'
const initialState ={
    emp_details :[],
    details_emp :[]
}
function EmpDetails(State:any = initialState,action:actionEmp){
    switch(action.type){
        case 'EMPLOYEE_DETAILS':
            return{
                ...State,
                emp_details : action.payload,
            };
        case 'EMPLOYEE_DATA':
            return{
                ...State,
                details_emp : action.payload
            };
            default:
                return State
    }
}
export default EmpDetails