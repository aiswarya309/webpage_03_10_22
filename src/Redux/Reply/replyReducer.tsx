import {REPLAY,REPLAYS} from './replyType'
const initialState={
    reply:[],
    resultReply:[]
    // replyEmp:[{
    //     reply:[],
    //     fId:''
    // }]
}
function replayReducer(state:any=initialState,action:any){
    switch (action.type) {
        case REPLAY:
            console.log("action.payload")
            return{
                ...state,
                reply:[...state.reply,action.payload]
                // reply:[...state.reply,...action.payload]
            }
        case REPLAYS:
            // console.log("resultReply",action.payload)
            return{...state,resultReply:action.payload}
        default:
            return state ;
    }
}
export default replayReducer

// import {REPLAY,REPLAYS} from './replyType'
// const initialState={
//     replay:[],
//     resultReply:[]
// }
// function replayReducer(state:any=initialState,action:any){
//     switch (action.type) {
//         case REPLAY:
//             console.log("re",action.payload)

//             return{...state,replay:action.payload}
//         case REPLAYS:
//             // console.log("resultReply",action.payload)
//             return{...state,resultReply:action.payload}
//         default:
//             return state ;
//     }
// }
// export default replayReducer

// feedbackId,result