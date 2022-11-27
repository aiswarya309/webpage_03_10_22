import {useState,useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";
import EmpAPI from "../../Redux/EmployeeDetails/empAPI";
// import feedbackEmpIdMiddle from '../../Redux/Feedback/feedbackEmpIdMiddle'
import feedbackGet from '../../Redux/Feedback/feedbackGet'
import './feedback.css'
import FeedbackPopup from "../FeebackAdd/feedbackPopup";
import avatar from '../../Assets/Images/dan5276bb68cda93.png'
import FeedbackAdd from '../FeebackAdd/feedbackAdd'

function Feedback(){
    const history =useHistory()
    const dispatch=useDispatch()
    const empData=useSelector((state:rootState)=>{
        return state.EmpDetails.emp_details})
    const feedbackResult = useSelector((state:rootState)=>{
        return state.feedbackReducer.getFeedback})
        // console.log("feedbackResult ###:-",feedbackResult);
    
        // const btnMore=()=>{
    //     history.push('/pageFeedbackMore')
    // }
    // const btnAdd=()=>{
    //     history.push('/pageFeedbackAdd')

    // }
    // console.log("data.id feedback:-",data.id);
    useEffect(()=>{
        dispatch<any>(EmpAPI())
        dispatch<any>(feedbackGet())
    },[])
        return(
            <div className="employee">
                <div className="childd">
                {
                    empData && empData.map((data:any,index:number)=>{
                        // feedbackResult.sort((a:any,b:any)=>b.id-a.id)
                        let last:any=[]
                        feedbackResult && feedbackResult.map((result:any,index:any)=>{
                            // const results=result
                            // console.log("RESULT****",result);
                            
                            if(data.id == result.emp_id){
                                // let feedbackId=result.id
                                // console.log("feedbackId",feedbackId);
                                let empFeedback=[result]
                                last=empFeedback[0]
                                // last =feedbackResult.slice(-1)
                                // console.log("last",last);
                                // console.log("feedbackResult data.id",result.id)
                            }
                        })
                       
                        return<div key={index} className="child2">        
                            <div  className="child1">
                                <div className="imgDiv">
                                <img className="img" src={avatar} alt="The image is not loaded" />
                                    <h3 className="para">{data.name}</h3>
                                </div>
                                    <p className="paraId">EmpID  :   {data.id}</p>
                                    <p className="paraFeedback">{last.feedback}</p>
                                    <div className="btnMoreAdd">
                                    <button className="button1" onClick={()=>{history.push({pathname:'/pageFeedbackMore',state:{id:data.id,name:data.name,f_id:last.id,f_empId:last.emp_id}});
                                    }}>MORE FEEDBACK</button>
                                    <FeedbackPopup className="button1">
                                        <FeedbackAdd id={data.id} emp={data.name}/>
                                    </FeedbackPopup>
                                    </div>
                                    {/* <button className="button1" onClick={()=>{history.push({pathname:'/pageFeedbackAdd',state:{id:data.id,name:data.name}});console.log("data.id",data.id);}}>Add Feedback</button> */}
                                </div>
                        </div>
                        })
                    }
                    </div>
            </div>
        )
}

export default Feedback

// import {useState,useEffect } from "react"
// import './feedback.css'
// import FeedbackView from './feedbackView'
// import {useSelector,useDispatch} from 'react-redux'
// import { rootState} from '../../Redux/Reducer'
// import { useLocation ,useHistory} from "react-router-dom";
// import feedbackMiddle from '../../Redux/Feedback/feedbackMiddle'
// import {feedbackAction} from '../../Redux/Feedback/feedbackAction'
// import feedbackGet from '../../Redux/Feedback/feedbackGet'
// import {data} from '../../type'

// // import EmpFullDetails from '../EmployeeDetails/Employee'
// type typeState={
//     name :string;
//     employeeName :string;
//     feedback:string
// }
// const getFeedback:any=()=>{
//     const data=localStorage.getItem('content')
//     if (data){
//         return JSON.parse(data)
//     }
//     else{
//         return []
//     }
// }
// function Feedback(){
//     const history=useHistory()
//     const dispatch=useDispatch()
//     const location:any=useLocation();
//     const empData=useSelector((state:rootState)=>{
//         return state.EmpDetails.emp_details})
//         console.log("empData feedback:-",empData);
        
//     const feedbackResult = useSelector((state:rootState)=>{
//         return state.feedbackReducer.getFeedback})
//         console.log("feedbackResult:-",feedbackResult);
        
//     const [name , setName]=useState('')
//     const [employeeName , setEmployeeName]=useState('')
//     const [empId,setEmpId]=useState('')
//     // console.log("location.state.name:-",location.state.name);
//     const [feedback , setFeedback]=useState('')
//     const [store,setStore]=useState<typeState[]>(getFeedback)
//     console.log("empData:-",empData);
    
//     const btnClick=()=>{
//         // dispatch<any>(feedbackMiddle({id:empId,name:name,empName:employeeName,feedback:feedback}))
//         dispatch<any>(feedbackMiddle({id:empId,name:name,empName:employeeName,feedback:feedback}))
//         history.push('/pageemployee')
//         setName('')
//         setEmployeeName(' ')
//         setFeedback('')
//         // setEmpId("null")
//     }
//     useEffect(()=>{
//         console.log("jjjj");
//         console.log("employeeName>",employeeName);
//         // console.log("location.state.name:-",location.state.name);
//         //history.push('/pageemployee')
//         dispatch<any>(feedbackGet())
//         // setEmployeeName(location.state.name)
//         // setEmpId(location.state.id)
//         if(location.state.name && location.state.id){
//             setEmployeeName(location.state.name)
//             setEmpId(location.state.id)
//         }else{
//             // history.push('/feedback')
//             setEmployeeName('')
//             setEmpId('')
//         }
//     },[])
//     // useEffect(()=>{
//     //     setEmployeeName(empData.name)
//     // },[empData.name])
//     // useEffect(()=>{
//     //     // console.log("STORE IN useeffect:-",store)
//     //     localStorage.setItem('content',JSON.stringify(store))
//     // },[store])
// return(
//     <div >
//         <div >
//             <h2>Feedback</h2>
//             Name<input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}/><br/><br/>
//             Employee<input type="text" onChange={(e)=>{setEmployeeName(e.target.value)}} value={employeeName}/><br/><br/>
//             Feedback<input type="text" onChange={(e)=>{setFeedback(e.target.value)}} value={feedback}/><br/><br/>
//             <button onClick={btnClick}>Submit</button>
//         </div>
//         <div className="feedback_view">
//             <p>lll</p>
//         {
//                     empData && empData.map((data:data,index:number)=>{
//                         return <div key={index} >
//                                 <h3>{data.name}</h3>
//                                 <p>ID:{data.id}</p>
//                                 <div>
//                                     <p>opop</p>
//                                 </div>
//                                 // <button>More</button><button>Add</button>
//                             </div>
//                     })
//                 }
//         </div>
//     </div>
// )
// }
// export default Feedback