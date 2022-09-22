import React from "react";
import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer'
import { rootState } from "../Redux/Reducer";
type privateRoute={
    component:React.ElementType,
    path?:string,
    exact?:boolean
}

const PrivateRoute =({component: Component,...rest }:privateRoute) =>{
    const Authenticate = useSelector((State:rootState)=>{
        return State.AppReducer.Authenticate
      })
    return(
        <div>
            <Header/>
            <Route {...rest} render ={(props:any) =>{
                if(sessionStorage.getItem("AuthValue")) return < Component {...props} />
                if(!sessionStorage.getItem("AuthValue")) return <Redirect to="/login" />
                }}/>
            <Footer/>
        </div>
    )
}
export default PrivateRoute  