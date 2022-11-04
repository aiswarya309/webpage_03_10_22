type feedbackData={
    name:string,
    employeeName:string,
    feedback:string
}
function FeedbackView({details}:any){
    return( details.map((data:feedbackData,index:number)=>{
        console.log("data:-",data)
      return <div key={index}>
            <p>{data.name}</p>
            <p>{data.employeeName}</p>
            <p>{data.feedback}</p><hr/>
        </div>
    })
    )
}
export default FeedbackView

