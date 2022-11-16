import  { useState,useEffect } from "react";
import './HomeStyle.css'
import { useSelector , useDispatch  } from "react-redux";
import HomeReduxApi from '../../Redux/HomeRedux/homeApi';
import { rootState } from "../../Redux/Reducer";

function Home(){
    let [index,setIndex]=useState(0);
    const images = useSelector((State:rootState)=>{
        return State.HomeApi.home_data
    })
    // console.log("image slider:-",images);
    // const {id,image}=image
    const dispatch = useDispatch()
    useEffect(()=>{
    dispatch<any>(HomeReduxApi())
    },[])
    const url="http://localhost:5000/slider/"
    // const envUrl=process.env.SLIDER
    // console.log("envUrl:-",envUrl);
    // console.log("url:-",url);
    let image=images.map((img:any)=> url +img.image)
    // console.log("**********img",image)
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
            <button className="buttonSlider" onClick={pre}>Previous Image</button>
            <button className="buttonSlider" onClick={next}>Next Image</button><br/><br/>
        </div>
    )
}
export default Home