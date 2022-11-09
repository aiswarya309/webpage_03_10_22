import {FEEDBACK,FEEDBACK_EMPID} from './FeedbackType'
 export const feedbackAction=(data:any)=>{
    // console.log("data in action:-",data)
    return {
        type:FEEDBACK,
        payload:data
    }
 }
 export const feedbackEmpId=(result:any)=>{
    return {
        type :FEEDBACK_EMPID,
        payload:result
    }
 }