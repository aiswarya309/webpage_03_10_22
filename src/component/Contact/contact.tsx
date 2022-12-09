import {useState,useRef} from "react";
import './contact'
import './ContactStyle.css'
import { useDispatch, useSelector} from 'react-redux';
import ContactUs from '../../Redux/ContactUs/contactUs'
// import { isNonNullExpression } from "typescript";
import {ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'  ;
interface contact{
    resume:File
}

function Contact(){
    const dispatch =useDispatch()
    const [firsrName,setFirsrName]=useState('')
    const [phon,setPhon]=useState('')
    const [place,setPlace]=useState('')
    const [email,setEmail]=useState('')
    const [resume, setResume] = useState<any>('');
    const ref = useRef<any>();
    // const resume=useRef(null)

    // const [list , setList]=useState<any>({
    //     firsrName:'',
    //     phon:'',
    //     place:'',         
    //     email:'',
    //     resume:
    // })
    // const{firsrName,phon,place,email,resume} =list
    const submit =(e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=>{
        console.log("RESYMSHGSGSG",resume)
        // resume.current.click();
        const formData=new FormData()
        formData.append("firsrName",firsrName)
        formData.append("phon",phon)
        formData.append("place",place)
        formData.append("email",email)
        formData.append("resume",resume)
        console.log("formData in contactform", formData )
        dispatch<any>(ContactUs(formData))
        toast("Contact Added")
        ref.current.value = "";
        setFirsrName('')
        setPhon('')
        setPlace('')
        setEmail('')
        // setResume("null")
      
    }
    const fileUpload=(event: React.ChangeEvent<HTMLInputElement>)=>{
       const fileList=event.target.files
    //    if(!fileList) return;
    //    console.log("fileList[0]",fileList);
    //       setResume(fileList[0])
          if((!fileList) || (fileList[0].size >=5120000)){
                toast("size limit is 5mb")
                //   alert("size is exceeded")
               }else{
                console.log("fileList[0]",fileList);
                setResume(fileList[0])
                
       }
       
    }

    return(
            <div >
                <div><h2 className="contactHeading">Contact Us</h2></div>
                <div className="contact">
                    <form className="label"> 
                    Name: <input type="text" onChange={(e)=>setFirsrName(e.target.value)} value={firsrName}/><br/><br/>
                    Phno: <input type="text" onChange={(e)=>setPhon(e.target.value)} value={phon}/><br/><br/>
                    Place: <input type="text" onChange={(e)=>setPlace(e.target.value)} value={place}/><br/><br/>
                    email: <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/><br/><br/>
                    file: <input type="file" onChange={fileUpload} accept=".jpg,.pdf,.png" ref={ref} /><br/><br/>
                    <button onClick={submit} type="button">Submit</button>
                    </form>
                </div>
            </div>
    )
}
export default Contact

