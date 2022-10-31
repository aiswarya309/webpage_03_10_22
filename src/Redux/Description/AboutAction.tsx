import {ACTION_TYPE,TOKEN} from './ActionType'

export const AboutAction=(result:any)=>{
    // console.log("about_action.tsx result-payload",result)
return{
    type:ACTION_TYPE,
    payload:result
}
}

export const token=(token:any)=>{
    // console.log("about_action.tsx result-payload",result)
return{
    type:TOKEN,
    payload:token
}
}

