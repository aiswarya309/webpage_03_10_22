import { useState ,useEffect} from "react"
import FeedbackView from "./feedbackView"
import './feedback.css'
export type contentHeader ={
    feedbackName:string,
    feedback:string
}
const dataFronLs = ()=>{
    let data = localStorage.getItem('content')
    if(data){
        return JSON.parse(data)
    }else{
        return [];
    }
}

function Feedback(){
    const [feedbackName,setFeedbackName]=useState<string>('')
    const [feedback,setFeedback]=useState<string>('')
    const [content,setContent]=useState<contentHeader[]>(dataFronLs)
    const feedbackSubmit=()=>{
        let contents:contentHeader={
            feedbackName,
            feedback,
        }
        setContent([...content,contents])
        setFeedbackName('')
        setFeedback('')
    }
    useEffect(()=>{
        localStorage.setItem('content',JSON.stringify(content))
    },[content]);
    
        return(
        <div>
            <h1>Feedback</h1>
             <form>
                   Name <input type="text" onChange={(e)=>setFeedbackName(e.target.value)} value={feedbackName}/><br/><br/>
                   Feedback<textarea onChange={(e)=>setFeedback(e.target.value)} value={feedback}></textarea><br/><br/>
                   <button onClick={feedbackSubmit} type="button">Submit</button>
                </form>
                <div className="feedback">
                    <FeedbackView details={content}/>
                </div>
        </div>
    )
}
export default Feedback