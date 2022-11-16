import { useState ,useEffect} from "react"
import { StringLiteralType } from "typescript"
import FeedbackView from "../Feedback/feedbackView"
import {useSelector,useDispatch} from 'react-redux'
import { useLocation ,useHistory} from "react-router-dom";
import replyPost from '../../Redux/Reply/replyPost'
import replyGet from '../../Redux/Reply/replyGet'
import {rootState} from '../../Redux/Reducer'
import {replyAction} from '../../Redux/Reply/replyAction'
import { toast } from "react-toastify"
import { isDisabled } from "@testing-library/user-event/dist/utils";


// import './feedback.css'
// export type contentHeader ={
//     reply:string
// }
export type typeReply={
    reply:string,
    idReply:number

}
// const dataFronLs = ()=>{
//     let data = localStorage.getItem('reply')
//     if(data){
//         return JSON.parse(data)
//     }else{
//         return [];
//     }
// }
function ReplyComponent(){
    const dispatch:any =useDispatch()
    const location:any=useLocation();
    const [isDisabled, setDisabled] = useState(false);
    const idReply=location.state.id
    console.log("id in reply:--",idReply);
    const replays=useSelector((state:rootState)=>{
        return state.replayReducer.replay})
    // const replayData=replays.result
    console.log("replays useSelector:",replays);
    
    const [reply,setReply]=useState<string | any>('')
    // const [feedback,setFeedback]=useState<string>('')
    // const [replyLS,setContent]=useState<typeReply[]>(dataFronLs)
    const replySubmit=()=>{
        dispatch(replyPost({id:idReply,reply:reply}))
        // if(replays.length >5){
        //     toast("Replay added")
        // }
        // else{
        //         toast("Replay added")
        // }
        setReply('')
    }
    useEffect(()=>{
        dispatch(replyGet())
    },[]);
        return(
        <div>
            <h1>Reply</h1>
             <form>
                   <input type="text" onChange={(e)=>setReply(e.target.value)} value={reply}/><br/><br/>
                   {/* Feedback<textarea onChange={(e)=>setFeedback(e.target.value)} value={feedback}></textarea><br/><br/> */}
                   {/* <button onClick={replySubmit} type="button" disabled={isDisabled ?true :false}>Reply</button> */}
                   <button onClick={replySubmit} type="button">Reply</button>
            </form>
            <div>
                {
                    replays && replays.map((data:any,index:number)=>{
                        if(idReply === data.emp_id){
                            // if(replays.length >5){
                            //     setDisabled(true)
                            // }
                        return <div key={index} >
                                <h3>{data.reply}</h3>
                            </div>
                        }
                    })
                  }
            </div>
        </div>
    )
}
export default ReplyComponent
