import React, {Component} from "react";
const  Scroll = (props) => {
        return(
           <div style={{overflowY:"scroll",height:"500px", border:"3px solid #000"}}>
            {props.children}
           </div>
        )
}

export default Scroll;