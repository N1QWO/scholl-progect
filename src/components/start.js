import React from "react";
import {Link} from "react-router-dom"
import '../App.scss';

function Start(props){
   
   const TopNum = () => {
      props.setN(props.n + 1)
   }
   
   return(
      <div className="start-wrapper">
         
         <Link to={props.getLink}>
            <input onClick={TopNum} className="start-wrapper btn btn__primary" type="button" value="Начать"/>
         </Link>
      </div>
   )
}
export default Start;