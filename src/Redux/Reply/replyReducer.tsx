import {REPLAY} from './replyType'
const initialState={
    replay:[]
}
function replayReducer(state:any=initialState,action:any){
    switch (action.type) {
        case REPLAY:
            return{
                ...state,
                replay:action.payload
            }
    
        default:
            return state ;
    }
}
export default replayReducer