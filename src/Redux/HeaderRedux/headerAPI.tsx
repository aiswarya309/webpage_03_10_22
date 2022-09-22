import { header_redux} from './actionHeader'
import axios from 'axios'

function HeaderApi():any{
    return function(dispatch:any){
        axios.get(`${process.env.REACT_APP_MY_API}/navLinks`)
        .then((response:any) =>{ dispatch(header_redux(response.data))})
        .catch(error => {
            return error;
          });
    }
}
export default HeaderApi