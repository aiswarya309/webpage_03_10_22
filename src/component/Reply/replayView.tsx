import { useSelector , useDispatch } from 'react-redux/es/exports';
import {rootState} from '../../Redux/Reducer'
import replyGet from '../../Redux/Reply/replyGet'
import replyView from '../../Redux/Reply/replyView'
import {useEffect, useState} from "react";
import './reply.css'
// import ImageRemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';

function ReplayView({feedbackFid,feedbackEmpId}:any){
    // console.log("replyEmpId,replyFid",feedbackFid,feedbackEmpId);
    const [empReply, setReply]=useState([])
    const dispatch=useDispatch()
    const replayData=useSelector((state:rootState)=>{
        return state.replayReducer.reply})
    const allReply=useSelector((state:rootState)=>{
        return state.replayReducer.resultReply})

    console.log("replayview component :-",replayData);
        // let result;
        // const replays=replayData.map((item:any)=>{
        //     if(item.feedbackId ==feedbackFid){
        //         console.log('ssss',item.reply)
        //         setReply(item.reply)
        //         // return item.reply
        //     }
        // })
        // console.log("replay**s",replays);
        
        // let replays=replayData.filter((data:any)=>{
        //     return data.feedbackId == feedbackFid
        // })
        // .map((replyMap:any)=>{
        //     return replyMap.reply
        // })
        // console.log("replaysFilter",replays);
        // const replyobj=replays[1].reply
        // console.log("replyobj",replyobj)
        // const replaysMap=replays.map((mapD:any,index:number)=>{
        //     return mapD.reply
        // })
        // const replyFilter=replays.reply
        // console.log("replaysMap",replaysMap);
        useEffect(()=>{
            replayData.map((item:any)=>{
                if(item.feedbackId ==feedbackFid){
                    console.log('ssss',item.reply)
                    setReply(item.reply)
                    // return item.reply
                }
            })
        },[replayData])
        useEffect(()=>{
                dispatch<any>(replyView({id:feedbackFid,f_empId:feedbackEmpId}))
        },[allReply])
   
    return (
        <div className='replyView'>
            {/* <h2>Reply view</h2> */}
            <>{
                empReply && empReply.map((item:any,index:number)=>{
                    return(
                    <div key={index}>
                        <>{console.log("item.reply,",item.reply)}</>
                        <p>{item.reply}</p>
                    </div>)
                })
            }</>
            
             {/* {
                replays && replays.reply.map((replyEmp:any,index:number)=>{
                    // replyEmp.f_id
                    // console.log("replyEmp",replyEmp.f_id)
                    // const  findIndex=replyEmp.findIndex((id:any)=>id==1);
                    // console.log('findIndex',findIndex);
                     
                    // if(feedbackFid === replyEmp.f_id){
                        // const re = [replyEmp.reply];
                        // re.slice(-2)
                        // console.log('rewwww',re);
                        
                    return <div key={index} >
                            <h3>{replyEmp.reply}</h3>
                        </div>
                    // }
                })
            } */}
        </div>
    )
}
export default ReplayView