import feedbackGet from '../../Redux/Feedback/feedbackGet'
import {useEffect} from "react";
import { useSelector , useDispatch } from 'react-redux/es/exports';
import EmpMiddle from '../../Redux/EmployeeFullDetails/empMidle'
import {rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";

function FeedbackMore(){
    const dispatch=useDispatch()
    const location:any=useLocation()
    const feedbackResult = useSelector((state:rootState)=>{
        return state.feedbackReducer.getFeedback})
        console.log("feedbackResult:-",feedbackResult);
        const id= location.state.id
        // console.log("id feedback more:",id);
        
    console.log("location.state.id:-",location.state.id);
                
    useEffect(()=>{
        console.log("FeedbackMore");
        
        dispatch<any>(feedbackGet())
    },[])
    return(
        <div>
            <p>FeedbackMore</p>
            {
                feedbackResult && feedbackResult.map((data:any,index:number)=>{
                    // console.log();
                    
                    feedbackResult.sort((a:any,b:any)=>b.id-a.id)
                    // console.log("feedbackResult^^",feedbackResult);
                    const dbid:any=[data.id]
                    // console.log("id##",dbid);
                    if(id == data.emp_id){
                        console.log("gata##$%^",data);
                        let empFeedback=[data]
                        
                        // console.log("arrry",arrry[0])
                        const last=empFeedback[0]
                        console.log("last",last);
                        
                        console.log("id in more",data.id);
                        // console.log("feedbackResult^^",feedbackResult);
                        // const dbid:any=[data.id]
                        // console.log("id##",dbid);
                        // console.log("data.id##",data.id);
                    return <div key={index}>
                        <p>{last.feedback}</p>
                        <p>{data.name} :- {data.feedback}</p>
                    </div>
                        }
                })
            }
        </div>
    )
}
export default FeedbackMore