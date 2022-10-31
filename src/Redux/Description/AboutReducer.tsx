import {ACTION_TYPE,TOKEN} from './ActionType'
const initialState ={
    about :[],
    token:''
}
function AboutDetails(State:any = initialState,action:any):any{
    // console.log("about_reducer.tsx IN")
    switch(action.type){
        case ACTION_TYPE:
            return{
                ...State,
                about : action.payload
            };
        case TOKEN:
            return{
                ...State,
                token : action.payload
            };
        default:
            return State
    }
}

export default AboutDetails