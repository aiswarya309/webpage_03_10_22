import {actionhome} from '../../type'
import {stateHome} from '../../type'
const initialstate ={
    home_data : []
}
function HomeApi( State:stateHome = initialstate , action:actionhome):stateHome{
    switch (action.type){
        case 'HOME_REDUX' :
            return {
                home_data : action.payload
            }
        default :
            return State
    }
}
export default HomeApi