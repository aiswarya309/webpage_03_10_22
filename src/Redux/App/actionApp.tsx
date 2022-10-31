import { AUTHDATA,AUTHDATA_FALSE } from "./typeApp";
export const authData = ()=>{
    // console.log("Action Authenticate authData")
    return {
        type : AUTHDATA
    }
}
export const authFalse = ()=>{
    return {
        type : 'AUTHDATA_FALSE'
    }
}