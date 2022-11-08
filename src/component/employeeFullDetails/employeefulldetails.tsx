import { useSelector , useDispatch } from 'react-redux/es/exports';
import {useEffect} from "react";
import EmpMiddle from '../../Redux/EmployeeFullDetails/empMidle'
import {rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";
import FeedbackView from '../Feedback/feedbackView'
import feedbackGet from '../../Redux/Feedback/feedbackGet'

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
        console.log("empfulldata",empfulldata);
    const feedbackResult = useSelector((state:rootState)=>{
        return state.feedbackReducer.getFeedback})
        console.log("feedbackResult:-",feedbackResult);
                
    const dispatch:any =useDispatch()
    useEffect(()=>{
        dispatch(EmpMiddle(location.state.id))
    },[])
    // const btnclick=()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id}})}
    useEffect(()=>{
        dispatch(feedbackGet())
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
                    <button onClick={()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id,name:empfulldata.name}});console.log("empfulldata.id}",empfulldata.id)}}>Feedback</button>

                    {/* <button onClick={()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id,name:empfulldata.name}});console.log("empfulldata.id}",empfulldata.id)} }>Feedback</button> */}
            </div>
            <div>
                <FeedbackView details={feedbackResult} id_emp={empfulldata.id}/>
            </div>
    </div>
)
}
export default EmployeeFullDetails