type feedbackData={
    name:string,
    empName:string,
    feedback:string,
    emp_id:number
}
function FeedbackView({details,id_emp}:any){
    
    return( details.map((data:feedbackData,index:number)=>{
        // console.log("feedbackView:-",data);
        // console.log("id_emp:-",id_emp)
        if(id_emp == data.emp_id){
        // console.log("data:-",data)
      return <div key={index}>
            <p>{data.name}</p>
            <p>{data.empName}</p>
            <p>{data.feedback}</p><hr/>
        </div>}
    })
    )
}
export default FeedbackView

