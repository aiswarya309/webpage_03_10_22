type feedbackData={
    feedbackName:string,
    feedback:string
}
function FeedbackView({details}:any){
    return( details.map((data:feedbackData,index:number)=>{
      return <div key={index}>
            <p>{data.feedbackName}</p>
            <p>{data.feedback}</p><hr/>
        </div>
    })
    )
}
export default FeedbackView

