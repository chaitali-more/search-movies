import React from "react";
import 'tachyons';
const  Card = ({name,poster,description,directed_by,url}) => {
        return(
           
            <div className="bg-light-gray dib br3  ma2 animate bw2 shadow-5 tl pa3 w_25">
           <a href={url} target="_blank" rel="noreferrer" className="text-blue"> <img src={poster} alt="meal"  width="100%" height={"400px"} 
           onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU";
  }}></img>            
            <h2>{name}</h2>
            </a>
            <p>Directed By: {directed_by}</p>
            <p className="trim_text">{description}</p>
            <div className="tr f6 blue "><a href={url} target="_blank" rel="noreferrer" >Read More</a></div>
            </div>
        )
}

export default Card;