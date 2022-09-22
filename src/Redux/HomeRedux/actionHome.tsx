import { HOME_REDUX } from './typeHome'
import {homePayload} from '../../type'

export const homeRedux =(home_api:homePayload)=>{
    return{
        type : HOME_REDUX,
        payload : home_api

    }
}