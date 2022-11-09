import { FEEDBACK,FEEDBACK_EMPID } from "./FeedbackType";
const initialState={
    getFeedback:[],
    result:{}
}
function feedbackReducer(state:any=initialState,action:any){
switch(action.type){
    case FEEDBACK:
        return{
        ...state,
        getFeedback:action.payload
    }
    case FEEDBACK_EMPID:
        return{
            ...state,
            result:action.payload
        }

    default:
        return state
}
}

export default feedbackReducer