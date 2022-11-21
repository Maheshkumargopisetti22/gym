import "../style/data1.css";
import React from "react";
import img1 from "../media/fit.jpg"
import img2 from "../media/img2.jpg"

const Data = ()=>{
    return(
        <div className="images">
                <img src={img2} className="img2"/>
                <img src={img1} className="img1"/>
        </div>
        
    )
}
export default Data;