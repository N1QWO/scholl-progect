import React from "react";
import {Link } from 'react-router-dom';


function Result(props){
   return(
      <div className="result-wrapper">
        <h2 className="result-title">right answer</h2>
        <div className="result-count">{props.result }</div>
        <Link to="/">
            <input onClick={props.getResult} 
                   className="result-button" 
                   type="button" 
                   value="restart">
            </input>
         </Link>
        
      </div>
   )
}

export default Result;