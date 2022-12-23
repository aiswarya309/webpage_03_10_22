import {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux/es/exports';
import './Employee.css'
import EmpAPI from "../../Redux/EmployeeDetails/empAPI";
import employeeGet from '../../Redux/EmployeeDb/employeeGet'
import {rootState} from '../../Redux/Reducer'
import {data} from '../../type'

function Employee(){
    const history=useHistory()
    const empdata = useSelector((State:rootState)=>{
        return State.EmpDetails.emp_details})
    const dispatch:any =useDispatch()
    useEffect(()=>{
        dispatch(employeeGet())
        // dispatch(EmpAPI())
    },[])
    return(
        <div>
            <h1 className="headingEmp2">Employee Details</h1>
            <div className="container">
                {
                    empdata && empdata.map((data:data,index:number)=>{
                        return <div className="child" key={index} onClick={()=> history.push({pathname:'/pageEmployeeFullDetails',state:{id:data.id}})}>
                                <h3>{data.first_name} </h3>
                                <p>ID:{data.id}</p>
                            </div>
                    })
                }
            </div>
        </div>
    )
}
export default Employee