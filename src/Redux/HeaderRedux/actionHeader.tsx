import { HEADER_REDUX } from './typeHeader'
import {headerPayload} from '../../type'

export const header_redux=(header_api:headerPayload)=>{
    return{
        type : HEADER_REDUX,
        payload : header_api
    }
}