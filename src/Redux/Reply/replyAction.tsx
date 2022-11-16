import {REPLAY} from './replyType'
export const replyAction= (replyData:any)=>{
    return{
        type:REPLAY,
        payload:replyData
    }
}