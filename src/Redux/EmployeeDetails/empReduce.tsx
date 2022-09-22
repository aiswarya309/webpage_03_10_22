import {actionEmp} from '../../type'
import { stateEmp } from '../../type'
const initialState ={
    emp_details :[],
}
function EmpDetails(State:stateEmp = initialState,action:actionEmp){
    switch(action.type){
        case 'EMPLOYEE_DETAILS':
            return{
                ...State,
                emp_details : action.payload,
            };
            default:
                return State
    }
}
export default EmpDetails