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
import feedbackEmpIdMiddle from '../../Redux/Feedback/feedbackEmpIdMiddle';
import ReplayView from '../Reply/replayView'




function FeedbackMore(){
    const dispatch=useDispatch()
    const location:any=useLocation()
    const history=useHistory()
    // const feedbackResult = useSelector((state:rootState)=>{
    //     return state.feedbackReducer.getFeedback})
    const feedbackResult = useSelector((state:rootState)=>{
        return state.feedbackReducer.result})
        // const fb_id=[feedbackResult.id]
        // console.log("feedbackResult f_id",fb_id);
    // const replays=useSelector((state:rootState)=>{
    //     return state.replayReducer.fId})
    //     console.log("replays F_more:-",replays,"id");
    const replaysResult=useSelector((state:rootState)=>{
        return state.replayReducer.resultReply})
        // console.log("replays F_more:-",replaysResult);
        const id:any= location.state.id
        const nameEmp=location.state.name
        const f_id =location.state.f_id
        const f_empId =location.state.f_empId
    // console.log("id,nameEmp,f_id,f_empId",id,nameEmp,f_id,f_empId)
    useEffect(()=>{
        // console.log("FeedbackMore");
        // dispatch<any>(replyGet())
        dispatch<any>(feedbackEmpIdMiddle({id:id}))
        // dispatch(replyView({f_id:f_id,f_empId:f_empId}))
    },[])
//     useEffect(()=>{
//         // console.log("FeedbackMore Reply",replays);
//         dispatch(replyView({id:f_id,f_empId:f_empId}))
// // console.log('replays',replays);
//     },[replaysResult])
    return(
        <div className='mainM'>
            <h2 className='heading'>Feedback about {nameEmp}</h2>
            {
                feedbackResult && feedbackResult.map((data:any,index:number)=>{
                    // console.log("$$$",data)
                    if(id == data.emp_id){
                        // console.log("FEEDBACKMORE data.emp_id,data.id",data.emp_id,data.id)
                        // dispatch(replyView({id:data.id,f_empId:data.empId}))
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
                            {/* <div className='replyView'>
                                {
                                    replays && replays.map((replyEmp:any,index:number)=>{
                                        if(data.id === replyEmp.f_id){
                                        return <div key={index} >
                                                <h3>{replyEmp.reply}</h3>
                                            </div>
                                        }
                                    })
                                }
                            </div> */}
                            <ReplayView feedbackEmpId={data.emp_id} feedbackFid={data.id}/>
                        </div>
                    </div>
                        }
                })
            }
        </div>
    )
}
export default FeedbackMore