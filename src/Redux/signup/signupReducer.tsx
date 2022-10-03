const initialState ={
    user :[],
}
function EmpFullDetails(State:any = initialState,action:any):any{
    switch(action.type){
        case 'SIGNUP':
            return{
                ...State,
                user : action.payload
            };
        default:
                return State
    }
}

export default EmpFullDetails