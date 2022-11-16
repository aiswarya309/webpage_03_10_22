import feedbackGet from '../../Redux/Feedback/feedbackGet'
import {useEffect} from "react";
import { useSelector , useDispatch } from 'react-redux/es/exports';
import EmpMiddle from '../../Redux/EmployeeFullDetails/empMidle'
import {rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";
import '../FeedbackMore/feedbackMore.css'
import avatar from '../../Assets/Images/dan5276bb68cda93.png'
// import '../Feedback/feedback.css'
// import FormDialog from '../Reply/reply'
// import ReplyComponent  from '../Reply/replyComponent'
import ReplyPopup from '../Reply/reply'
import { Button } from 'react-bootstrap';
import replyGet from '../../Redux/Reply/replyGet'
import replyView from '../../Redux/Reply/replyView'




function FeedbackMore(){
    const dispatch=useDispatch()
    const location:any=useLocation()
    const history=useHistory()
    const feedbackResult = useSelector((state:rootState)=>{
        return state.feedbackReducer.getFeedback})
    const replays=useSelector((state:rootState)=>{
        return state.replayReducer.replay})
        console.log("replays F_more:-",replays);
        const id= location.state.id
        const nameEmp=location.state.name
        const f_id =location.state.f_id
        const f_empId =location.state.f_empId

        // console.log("id feedback more:",id);
        // console.log("location.state.id:-",location.state.id);
                
    useEffect(()=>{
        // console.log("FeedbackMore");
        dispatch<any>(feedbackGet())
        // dispatch<any>(replyGet())
        // dispatch(replyView({f_id:f_id,f_empId:f_empId}))

    },[])
    useEffect(()=>{
        // dispatch<any>(replyGet())
        dispatch(replyView({f_id:f_id,f_empId:f_empId}))

    },[])
    
    return(
        <div className='mainM'>
            <h2 className='heading'>Feedback about {nameEmp}</h2>
            {
                feedbackResult && feedbackResult.map((data:any,index:number)=>{
                    // feedbackResult.sort((a:any,b:any)=>b.id-a.id)
                    // console.log("feedbackResult^^",feedbackResult);
                    const dbid:any=[data.id]
                    // console.log("id##",dbid);
                    if(id == data.emp_id){
                        // console.log("gata##$%^",data);
                        // let empFeedback=[data]
                        // console.log("arrry",arrry[0])
                        // const last=empFeedback[0]
                        // console.log("last",last);
                        // console.log("id in more",data.id);
                        // console.log("feedbackResult^^",feedbackResult);
                        // const dbid:any=[data.id]
                        // console.log("id##",dbid);
                        // console.log("data.id##",data.id);
                        // <p>#####{data.empName}</p>
                    return <div key={index} className='mainM2'><br/>
                        <div className='more'>
                            <div className="imgDivM">
                                    <img className="imgM" src={avatar} alt="The image is not loaded" />
                                    <h3 className="paraM">{data.name}</h3>
                            </div>
                            <div className='mainM3'> 
                            {/* <span><p className='MorePara'>{data.name} </p></span> */}
                            <label>Feedback:</label>
                                <div className='feedback2'> 
                                <p className='moreFeedback'>{data.feedback}</p>
                                </div>
                            </div>
                            <div className='btnReply'>
                            <ReplyPopup idEmp={data.emp_id} f_id={data.id}/>
                            </div>
                            {/* <button onClick={()=>{history.push({pathname:'/replyComponent',state:{id:data.emp_id}})}}>Reply</button> */}
                            {/* <button className='btnMoreReply'>Reply</button> */}
                            <div className='replyView'>
                                {
                                    replays && replays.map((replyEmp:any,index:number)=>{
                                        // console.log("replyEmp.f_id:-",replyEmp.f_id);
                                        // console.log("data.id:-",data.id);
                                        // console.log("replyEmp MAP:-",replyEmp);
                                        
                                        
                                        if(data.id === replyEmp.f_id){

                                            // if(replays.length >5){
                                            //     setDisabled(true)
                                            // }
                                        return <div key={index} >
                                                <h3>{replyEmp.reply}</h3>
                                            </div>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                        }
                })
            }
        </div>
    )
}
export default FeedbackMore