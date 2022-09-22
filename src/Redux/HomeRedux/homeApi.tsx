import { homeRedux } from "./actionHome";

function HomeReduxApi(){
    return function(dispatch:any){
        fetch(`${process.env.REACT_APP_MY_API}/image`)
        .then(res=>res.json())
        .then(data=>dispatch(homeRedux(data)))
        .catch(error => {
            return error;
          });
    }
}
export default HomeReduxApi