import {useState,useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { rootState} from '../../Redux/Reducer'
import { useLocation ,useHistory} from "react-router-dom";
import EmpAPI from "../../Redux/EmployeeDetails/empAPI";



function Feedback(){
    const history =useHistory()
    const dispatch=useDispatch()
    const empData=useSelector((state:rootState)=>{
        return state.EmpDetails.emp_details})
        console.log("empData feedback:-",empData);
    // const btnMore=()=>{
    //     history.push('/pageFeedbackMore')
    // }
    // const btnAdd=()=>{
    //     history.push('/pageFeedbackAdd')

    // }
    // console.log("data.id feedback:-",data.id);
    useEffect(()=>{
        dispatch<any>(EmpAPI())
    },[])
        return(
            <div>
                {
                    
                    empData && empData.map((data:any,index:number)=>{

                       return <div key={index} >
                                <h3>{data.name}</h3>
                                <p>ID:{data.id}</p>
                               {/* <div> */}
                                 <p>opop</p>
                                {/* </div> */}
                                
                                 <button onClick={()=>{history.push({pathname:'/pageFeedbackMore',state:{id:data.id}});console.log("data.id",data.id);
                                 }}>More</button><button onClick={()=>{history.push({pathname:'/pageFeedbackAdd',state:{id:data.id,name:data.name}});console.log("data.id",data.id);}}>Add</button>
                             </div>
                    })
                }
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