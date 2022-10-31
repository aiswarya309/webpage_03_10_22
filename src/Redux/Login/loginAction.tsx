import {LOGIN , TOKEN,TOKEN_CHNAGE} from './loginType'


export const loginAction=(login:any)=>{
    console.log("ACRION DATA:--",login)
    return{
        type :'LOGIN',
        payload :{login }
    }
}
export const loginResult=(token:any|null)=>{
    // console.log("ACRION DATA:--",login)
    return{
        type :TOKEN,
        payload :token
    }
}
export const tockenChange=()=>{
    // console.log("ACRION DATA:--",login)
    return{
        type :TOKEN_CHNAGE,
    }
}