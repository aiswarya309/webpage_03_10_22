import {useState,useEffect } from "react"
import FeedbackView from './feedbackView'
import {useSelector} from 'react-redux'
import { rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";

// import EmpFullDetails from '../EmployeeDetails/Employee'
type typeState={
    name :string;
    employeeName :string;
    feedback:string
}
const getFeedback:any=()=>{
    const data=localStorage.getItem('content')
    if (data){
        return JSON.parse(data)
    }
    else{
        return []
    }
}
function Feedback(){
    const location:any=useLocation();
    const empData=useSelector((state:rootState)=>{
        return state.EmpFullDetails.details_emp
    })
    const [name , setName]=useState('')
    const [employeeName , setEmployeeName]=useState(location.state.name)
    console.log("location.state.name:-",location.state.name);
    const [feedback , setFeedback]=useState('')
    const [store,setStore]=useState<typeState[]>(getFeedback)
    console.log("empData:-",empData);
    
    const btnClick=()=>{
        let stateObject:typeState={
            name,
            employeeName,
            feedback
        }
        setStore([...store,stateObject])
        console.log("Store:-",store)
        setName('')
        setEmployeeName(' ')
        setFeedback('')
    }
    // useEffect(()=>{
    //     setEmployeeName(empData.name)
    // },[empData.name])
    useEffect(()=>{
        console.log("STORE IN useeffect:-",store)
        localStorage.setItem('content',JSON.stringify(store))
    },[store])
return(
    <div>
        <h2>Feedback</h2>
        Name<input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/><br/><br/>
        Employee<input type="text" onChange={(e)=>{setEmployeeName(e.target.value)}} value={employeeName}/><br/><br/>
        Feedback<input type="text" onChange={(e)=>{setFeedback(e.target.value)}} value={feedback}/><br/><br/>
        <button onClick={btnClick}>Submit</button>
        <div>
            <FeedbackView details={store}/>
        </div>
    </div>
)
}
export default Feedback