import{AUTHDATA_FALSE} from './typeApp'
import {actionApp} from '../../type'
const initialState={
    Authenticate:false
}

function AppReducer(State = initialState , action:actionApp){
    // console.log("AppReducer Authenticate");
    
    switch (action.type){
        case 'AUTHDATA' :
            return {
                
                ...State,
                Authenticate : true
            };
            case 'AUTHDATA_FALSE' :
                return {
                    ...State,
                    Authenticate : false
                };
        default:
            return State
    }
}
export default AppReducer