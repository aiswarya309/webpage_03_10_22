import React from "react";
import {useEffect} from "react";
import { useSelector , useDispatch } from 'react-redux/es/exports';
import AboutMiddle from '../../Redux/Description/aboutMiddle'
import { rootState } from "../../Redux/Reducer";
import { useHistory ,Link,Redirect} from "react-router-dom";
// import {authFalse} from '../../Redux/App/actionApp'
// import { Redirect } from "react-router-dom";
import './DescriptionStyle.css'

// import AboutDetails from '../../Redux/Description/AboutReducer'
function Details(){
	const dispatch= useDispatch()
	const history=useHistory()
	
	const about = useSelector((State:rootState)=>{
        return State.AboutDetails.about})
		// console.log("Description.tsx about ::--",about)

		// console.log(" Description.tsxabout.success ::--",about.success)
		const status=about.success
		// console.log("status in description@@@@@@@@@@@ >-",status);
		
		const data=about.result
		// const isSuccess=about.success
		// if(about.success){
		// 	console.log("Abouttttt",about.success)
		// 	if(!(about.success)){
		// 		console.log("REDIRECTING");

		// 		history.push('/login')

		// 	}
		// }
		useEffect(()=>{
			// console.log("*************description.tsx useeffect");
			dispatch<any>(AboutMiddle())
			// if(status == false){
			// 	localStorage.setItem("AuthValue","false")
			// 	console.log(" *************Description.tsx status == false")
			// 	// localStorage.removeItem("mytoken")
			// 	localStorage.clear()
			// 	history.push('/login')
			// 	dispatch<any>(authFalse())
			// 	// sessionStorage.setItem("AuthValue","false")
			// 	}
		},[])
		
		// console.log("Dscription::--",data)


    return(
    <section className="common">

	<div className="section-two">
		
			{
				data && data.map((value:any,index:any)=>{
					return <div key={index}>
						<h2 className="about">{value.title}</h2>
						<p className="aboutPara">{value.content}</p>
					</div>
				})
				
			}		
			{/* <h2>Details</h2>
			<p>
				Lorem ipsum dolor amet, consectetur adipiscing elit. Phasellus ut magna turpis. Proin non fringilla nisi. Suspendisse malesuada felis id nibh<br/>
			ullamcorper vulputate. Nam commodo dolor eu sem feugiat, id hendrerit nunc vestibulum. Quisque scelerisque elementum sem, id lobortis arcu pellentesque sit.<br/>
			lacinia lobortis aliquet. Quisque pharetra arcu eget tortor malesuada faucibus. Praesent tempor lobortis facilisis. Phasellus et mattis tellus. Duis consectetur augue<br/>
			lacus, quis fringilla risus varius eget. Integer ut est sollicitudin, pulvinar est non, consectetur elit.
			</p> */}
	</div>
</section>
    )
}

export default Details