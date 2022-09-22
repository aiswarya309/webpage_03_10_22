import  { useState,useEffect } from "react";
import './HomeStyle.css'
import { useSelector , useDispatch  } from "react-redux";
import HomeReduxApi from '../../Redux/HomeRedux/homeApi';
import { rootState } from "../../Redux/Reducer";

function Home(){
    let [index,setIndex]=useState(0);
    const image = useSelector((State:rootState)=>{
        return State.HomeApi.home_data
    })
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch<any>(HomeReduxApi())
},[])
  const pre = () => {
    if(index == 0){
        setIndex(image.length - 1)
    }else{
        setIndex(index - 1)
    }
}
  const next = () => {
                if(index >= image.length-1){
                    setIndex(0)
                }else{
                    setIndex(++index)
                }
    } 
    return(
        <div >
            <img src={image[index]} alt="Image is not loaded" id="img1"/> <br/><br/>
            <button onClick={pre}>Previous Image</button>
            <button onClick={next}>Next Image</button>
        </div>
    )
}
export default Home