import {actionApp} from '../../type'
const initialState={
    Authenticate:false
}

function AppReducer(State = initialState , action:actionApp){
    switch (action.type){
        case 'AUTHDATA' :
            return {
                ...State,
                Authenticate : true
            };
        default:
            return State
    }
}
export default AppReducer