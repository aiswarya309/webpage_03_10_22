import {LOGIN} from './loginType'

export const loginAction=(login)=>{
    return{
        type :'LOGIN',
        payload :login
    }
}