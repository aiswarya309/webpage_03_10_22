import {LOGIN , LOGIN_RESULT} from './loginType'

export const loginAction=(login:any)=>{
    console.log("ACRION DATA:--",login)
    return{
        type :'LOGIN',
        payload :login
    }
}
export const loginResult=(result:any|null)=>{
    // console.log("ACRION DATA:--",login)
    return{
        type :'LOGIN_RESULT',
        payload :result
    }
}