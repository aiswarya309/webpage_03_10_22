import {useState,useEffect } from "react"
import '../Feedback/feedback.css'
import FeedbackView from '../Feedback/feedbackView'
import {useSelector,useDispatch} from 'react-redux'
import { rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";
import feedbackMiddle from '../../Redux/Feedback/feedbackMiddle'
import {feedbackAction} from '../../Redux/Feedback/feedbackAction'
import feedbackGet from '../../Redux/Feedback/feedbackGet'
import 'react-toastify/dist/ReactToastify.css'  ;
import { toast } from "react-toastify"

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
function FeedbackAdd(){
    const dispatch=useDispatch()
    const location:any=useLocation();
    const history:any=useHistory()
    const empData=useSelector((state:rootState)=>{
        return state.EmpFullDetails.details_emp
    })
    const feedbackResult = useSelector((state:rootState)=>{
        return state.feedbackReducer.getFeedback})
        console.log("feedbackResult:-",feedbackResult);
        
    const [name , setName]=useState('')
    const [employeeName , setEmployeeName]=useState(location.state.name)
    const [empId,setEmpId]=useState(location.state.id)
    // console.log("location.state.name:-",location.state.name);
    const [feedback , setFeedback]=useState('')
    const [store,setStore]=useState<typeState[]>(getFeedback)
    // console.log("empData:-",empData);
    
    const btnClick=()=>{
        dispatch<any>(feedbackMiddle({id:empId,name:name,empName:employeeName,feedback:feedback}))
        // let stateObject:typeState={
        //     name,
        //     employeeName,
        //     feedback
        // }
        // setStore([...store,stateObject])
        // console.log("empData.id:-",empId)

        // console.log("Store:-",store)
        setName('')
        setEmployeeName(' ')
        setFeedback('')
        toast("Feedback Added")
        history.push('/feedback')
    }
    useEffect(()=>{
        dispatch<any>(feedbackGet())

    },[])
    // useEffect(()=>{
    //     setEmployeeName(empData.name)
    // },[empData.name])
    // useEffect(()=>{
    //     // console.log("STORE IN useeffect:-",store)
    //     localStorage.setItem('content',JSON.stringify(store))
    // },[store])
return(
    <div >
        <div className="container_feedback">
            <h2>Feedback</h2>
            Name<input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/><br/><br/>
            Employee<input type="text" onChange={(e)=>{setEmployeeName(e.target.value)}} value={employeeName}/><br/><br/>
            Feedback<input type="text" onChange={(e)=>{setFeedback(e.target.value)}} value={feedback}/><br/><br/>
            <button onClick={btnClick}>Submit</button>
        </div>
        
    </div>
)
}
export default FeedbackAdd
