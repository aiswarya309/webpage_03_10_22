import {useState} from "react";
import './contact'
import './ContactStyle.css'

function Contact(){
    const [list , setList]=useState({
        firsrName:'',
        phon:'',
        place:'',
        email:''
    })
    const{firsrName,phon,place,email} =list
    const submit =()=>{
        localStorage.setItem('contact',JSON.stringify(list));
        setList({
            firsrName:'',
            phon:'',
            place:'',
            email:''
        })
    }

    return(
            <div >
                <div><h2 className="contactHeading">Contact Us</h2></div>
                <div className="contact">
                    <form className="label"> 
                    Name: <input type="text" onChange={(val)=>setList({...list,firsrName:val.target.value})} value={firsrName}/><br/><br/>
                    Phno: <input type="text" onChange={(val)=>setList({...list,phon:val.target.value})} value={phon}/><br/><br/>
                    Place: <input type="text" onChange={(val)=>setList({...list,place:val.target.value})} value={place}/><br/><br/>
                    email: <input type="text" onChange={(val)=>setList({...list,email:val.target.value})} value={email}/><br/><br/>
                    <button onClick={submit} type="button" >Submit</button>
                    </form>
                </div>
            </div>
    )
}
export default Contact

