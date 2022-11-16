import React from "react";
import { Component } from "react";
import '../Description/DescriptionStyle.css'
class NavAbout extends Component{
    render(){
        return(
            <div>
                <h1 className="about"><u>About Us</u></h1>
                <p className="aboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel elementum mi. Praesent efficitur, <br/>
                ligula ut vestibulum interdum, ex nisl pretium dolor, vitae aliquam mi mi eu justo. Aenean ac elit velit.<br/>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
           </div>
        )
    }
}
export default NavAbout



