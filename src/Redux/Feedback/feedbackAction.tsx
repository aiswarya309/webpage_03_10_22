import {FEEDBACK} from './FeedbackType'
 export const feedbackAction=(data:any)=>{
    console.log("data in action:-",data)
    return {
        type:FEEDBACK,
        payload:data
    }
 }