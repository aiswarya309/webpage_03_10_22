import { useHistory } from 'react-router-dom'
import icon from '../../Assets/Images/icon.png';
import './HeaderStyle.css'
import { useEffect } from "react";
import { connect } from "react-redux";
import HeaderApi from "../../Redux/HeaderRedux/headerAPI";
import {rootState} from '../../Redux/Reducer'
import { Dispatch } from 'redux'
import { actionHeader} from '../../type'
import Login from '../Login/Login';
// import {rootState} from '../../Redux/Reducer'
import AppReducer from '../../Redux/App/reducerApp'
import { useDispatch, useSelector} from 'react-redux';
import {authFalse} from '../../Redux/App/actionApp'

type navData={
	name:string,
	path:string
}

function Header(props:any){
	// console.log("Header.js")
	let history =useHistory()
	let dispatch=useDispatch()
	useEffect(()=>{
		props.HeaderDispatch()
	},[]);
	const auth:any=useSelector((State:rootState)=>{
		return State.AppReducer.Authenticate})
	// console.log("auth in headdr component",auth);
	
    return (
        <header className="common">
			<div className="container">
				<nav className="nav">
					<div className="first-img">
						<img src={icon} alt="The image is not loaded" onClick={()=>history.push('/')}/>
						<h1>{props.navData.name}</h1>
					</div>
					<h1>Amet</h1>
					<ul>
						{
							props.navData && props.navData.map((obj:navData,index:number)=>{
							return <li className='name' key={index} onClick={()=>{history.push(obj.path);if(obj.name === 'Logout'){ dispatch(authFalse());localStorage.setItem("AuthValue","false");history.push({pathname:'/login'});localStorage.removeItem("mytoken")}}}>{obj.name}</li> 
							})
						}
						
					</ul>
				</nav>
			</div>
		</header>
    );
}
const mapStateToProps = (State:rootState)=>{
	return{ 
		navData :State.HeaderApi.data_api
	} 
}
const mapDispatchToProps = (dispatch:Dispatch<actionHeader>)=>{
	return{
		HeaderDispatch: ()=>dispatch(HeaderApi())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)


