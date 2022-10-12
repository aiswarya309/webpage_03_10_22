const initialState ={
    details_emp :[],
}
function EmpFullDetails(State:any = initialState,action:any):any{
    switch(action.type){
        case 'EMPLOYEE_FULL_DETAILS':
            return{
                ...State,
                details_emp : action.payload
            };
        default:
                return State
    }
}

export default EmpFullDetails