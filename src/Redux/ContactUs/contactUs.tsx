import axios from 'axios';

function ContactUs(formData:any){
    console.log("formData",formData)
    return function(dispatch:any){
        axios.post(`http://localhost:5000/auth/contact`,formData,{headers: {"Content-Type": "multipart/form-data",} })
        .then(response=>{
            console.log("Axxioscontact",response);
        // dispatch(loginResult(response.data))
        })
        .catch(error => {
            console.log("Error",error);
            return error;
          });
    }
}
export default ContactUs