import {actionHeader} from '../../type'
import { stateHeader} from '../../type'
const initialState ={
    data_api:[]
}

function HeaderApi(State:stateHeader = initialState ,action:actionHeader):stateHeader {
    switch(action.type){
        case 'HEADER_REDUX' :
            return{
                ...State,
                data_api : action.payload
            }
        default:
            return State
    }
}
export default HeaderApi