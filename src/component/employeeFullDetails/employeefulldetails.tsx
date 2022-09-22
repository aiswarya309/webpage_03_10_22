import { useSelector , useDispatch } from 'react-redux/es/exports';
import {useEffect} from "react";
import EmpMiddle from '../../Redux/EmployeeFullDetails/empMidle'
import {rootState} from '../../Redux/Reducer'
import { useLocation } from "react-router-dom";
type newType={
    name:string,
    id:number,
    place:string,
    state:string,
    pin:number
}

function EmployeeFullDetails(){
    const location:any = useLocation();
    const empfulldata = useSelector((State:rootState)=>{
        return State.EmpFullDetails.details_emp})
    const dispatch:any =useDispatch()
    useEffect(()=>{
        dispatch(EmpMiddle(location.state.id))
    },[])

return(
    <div>
        <h1>Employee Data</h1>
            <div>
                 <h3>{empfulldata.name}</h3>
                                        <p>{empfulldata.id}</p>
                                        <p>{empfulldata.place}</p>
                                        <p>{empfulldata.state}</p>
                                        <p>{empfulldata.pin}</p>
            </div>
    </div>
)
}
export default EmployeeFullDetails