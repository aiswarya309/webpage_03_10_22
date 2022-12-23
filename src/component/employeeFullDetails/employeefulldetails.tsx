import { useSelector , useDispatch } from 'react-redux/es/exports';
import {useEffect} from "react";
import EmpMiddle from '../../Redux/EmployeeFullDetails/empMidle'
import {rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";
import FeedbackView from '../Feedback/feedbackView'
import feedbackGet from '../../Redux/Feedback/feedbackGet'
import './employeeFullDetails.css'
import EmpData from '../../Redux/EmployeeDetails/employee'

type newType={
    name:string,
    id:number,
    place:string,
    state:string,
    pin:number
}

function EmployeeFullDetails(){
    const history=useHistory()
    const dispatch:any =useDispatch()
    const location:any = useLocation();
    const empId:any=location.state.id;
    const empfulldata = useSelector((State:rootState)=>{
        return State.EmpDetails.details_emp})
        console.log("empfulldata",empfulldata[0]);
    const feedbackResult = useSelector((state:rootState)=>{
        return state.feedbackReducer.getFeedback})
        console.log("feedbackResult:-",feedbackResult);
                
    useEffect(()=>{
        dispatch(EmpData({id:empId}))
    },[])
    // const btnclick=()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id}})}
    // useEffect(()=>{
    //     dispatch(feedbackGet())
    // },[])
return(
    <div>
        <h1 className='dataHeading'>Employee Data</h1>
            <div className='dataField'>
            {
                    empfulldata.map((data:any,index:number)=>{
                      
                      return <div key={index}>
                            <p>{data.first_name}</p>
                            <p>EmpID :  {data.id}</p>
                            <p>{data.jobTitle}</p>
                            {/* <p>{data.state}</p> */}
                            <p>{data.country}</p>
                            <button onClick={()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id,name:empfulldata.name}});console.log("empfulldata.id}",empfulldata.id)}}>Feedback</button>
                        </div>
                        }
                    )
            }
                    {/* <h3><u>{empfulldata.first_name}</u></h3>
                    <p>EmpID : {empfulldata[0].id}</p>
                    <p>{empfulldata.job_title}</p>
                    <p>{empfulldata.state}</p>
                    <p>{empfulldata.country}</p>
                    <button onClick={()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id,name:empfulldata.name}});console.log("empfulldata.id}",empfulldata.id)}}>Feedback</button> */}

                    {/* <button onClick={()=>{history.push({pathname:'/feedback',state:{id:empfulldata.id,name:empfulldata.name}});console.log("empfulldata.id}",empfulldata.id)} }>Feedback</button> */}
            </div>
            {/* <div>
                <FeedbackView details={feedbackResult} id_emp={empfulldata.id}/>
            </div> */}
    </div>
)
}
export default EmployeeFullDetails