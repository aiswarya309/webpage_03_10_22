type feedbackData={
    name:string,
    empName:string,
    feedback:string
}
function FeedbackView({details}:any){
    return( details.map((data:feedbackData,index:number)=>{
        console.log("data:-",data)
      return <div key={index}>
            <p>{data.name}</p>
            <p>{data.empName}</p>
            <p>{data.feedback}</p><hr/>
        </div>
    })
    )
}
export default FeedbackView

