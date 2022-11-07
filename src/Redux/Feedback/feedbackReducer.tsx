import { FEEDBACK } from "./FeedbackType";
const initialState={
    getFeedback:[]
}
function feedbackReducer(state:any=initialState,action:any){
switch(action.type){
    case FEEDBACK:
        return{
        ...state,
        getFeedback:action.payload
    }
    default:
        return state
}
}

export default feedbackReducer