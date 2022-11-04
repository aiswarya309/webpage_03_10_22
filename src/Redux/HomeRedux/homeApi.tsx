import { homeRedux } from "./actionHome";
import axios from 'axios';

function HomeReduxApi(){
    return function(dispatch:any){
        const token=localStorage.getItem("mytoken")
        axios.get(`${process.env.REACT_APP_BACKEND}/auth/slider`,{headers:{'authorization':"Bearer " + token}})
        // axios.get(`${process.env.REACT_APP_BACKEND}/slider`,{headers:{'authorization':"Bearer " + token}})
        .then(res=>{
            dispatch(homeRedux(res.data.result))
            // console.log("response in slider api:-",res.data)
        })
        // fetch(`${process.env.REACT_APP_MY_API}/image`)
        // .then(res=>res.json())
        // .then(data=>dispatch(homeRedux(data)))
        .catch(error => {
            return error;
          });
    }
}
export default HomeReduxApi