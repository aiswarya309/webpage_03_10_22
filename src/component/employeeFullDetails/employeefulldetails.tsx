import { useSelector , useDispatch } from 'react-redux/es/exports';
import {useEffect} from "react";
import EmpMiddle from '../../Redux/EmployeeFullDetails/empMidle'
import {rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";
type newType={
    name:string,
    id:number,
    place:string,
    state:string,
    pin:number
}

function EmployeeFullDetails(){
    const history=useHistory()
    const location:any = useLocation();
    const empfulldata = useSelector((State:rootState)=>{
        return State.EmpFullDetails.details_emp})
    const dispatch:any =useDispatch()
    useEffect(()=>{
        dispatch(EmpMiddle(location.state.id))
    },[])
    // const btnclick=()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id}})}

return(
    <div>
        <h1>Employee Data</h1>
            <div>
                    <h3>{empfulldata.name}</h3>
                    <p>{empfulldata.id}</p>
                    <p>{empfulldata.place}</p>
                    <p>{empfulldata.state}</p>
                    <p>{empfulldata.pin}</p>
                    <button onClick={()=>{history.push({pathname:'/feedback',state:{name:empfulldata.name}});console.log("empfulldata.id}",empfulldata.id)} }>Feedback</button>
            </div>
    </div>
)
}
export default EmployeeFullDetails