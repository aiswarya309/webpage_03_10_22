import React from "react";
import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer'
import { rootState } from "../Redux/Reducer";
import LoginReducer from '../Redux/Login/loginReducer'
import {useEffect} from "react";

type privateRoute={
    component:React.ElementType,
    path?:string,
    exact?:boolean
}

const PrivateRoute =({component: Component,...rest }:privateRoute) =>{
    // console.log("localStorage inside private route", localStorage.getItem("mytoken"));
    // console.log("private route TOKEN", localStorage.getItem("mytoken"));
    
    const Authenticate = useSelector((State:rootState)=>{
        return State.AppReducer.Authenticate
      })
    const token = useSelector((State:rootState)=>{
    return State.LoginReducer.token
    })
    // console.log("token private:_",token)
    // useEffect(()=>{
        if(token == null){
            <Redirect to="/login" />
            // console.log("NO TKN")
        }else{
            // console.log("TKN")

        }
    // },[token])
    // console.log("TOKEN privatrt::--",token);
    
      const local=localStorage.getItem("AuthValue")
    //   console.log("prvtroot localStorage:-",local)
    //   if()

    return(
        <div>
            <Header/>
            <Route {...rest} render ={(props:any) =>{
                // console.log("SESSION PRIVATEROUTE",localStorage.getItem("AuthValue"));

                if(localStorage.getItem("AuthValue")) return < Component {...props} />
                if(!localStorage.getItem("AuthValue")) return <Redirect to="/login" />
                // console.log("SESSION PRIVATEROUTE",sessionStorage.getItem("AuthValue"));
                
                }}/>
            <Footer/>
        </div>
    )
}
export default PrivateRoute  