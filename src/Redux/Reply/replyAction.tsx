import {REPLAY,REPLAYS} from './replyType'
export const replyAction= (data:any)=>{
    // console.log("replyData action:",data)
    return{
        type:REPLAY,
        payload:data
    }
}
export const replysGet= (replys:any)=>{
    return{
        type:REPLAYS,
        payload:replys
    }
}