import React from "react";
import {NavLink } from "react-router-dom";

function TaskInput(props) {
   
   const [myValue, setMyValue] = React.useState('');
   const [variableA , setVariableA ] = React.useState(0);
   const [variableB , setVariableB ] = React.useState(0);
   const [flag, setFlag] = React.useState(0)

   
   

   React.useEffect(() => {
      setVariableA(Math.floor(Math.random() * (100 - 10) + 10))
      setVariableB(Math.floor(Math.random() * (100 - 10) + 10))
   }, [flag]);

   const OnChangeHandler = (e) => {
      setMyValue(e.currentTarget.value)
   }
   
   // console.log(variableA + variableB)

   const OnCheckAnswer = () => {
      const answer = variableA + variableB;

      if( answer == myValue){
         props.setResult(props.result + 1)
      }

      props.reTakeBtn()
      setMyValue('')
      setFlag(!flag)

      props.setN(props.n + 1)
    }
 
      return(
         <div> 
            <h1> Задача</h1>
            <p> было {variableA} яблок к ним добавили {variableB} сколько яблок стало?</p>
            <form>
               <input 
                  onChange={OnChangeHandler}
                  value={myValue} 
               />
               <NavLink to={props.getLink}>
                  <button onClick={OnCheckAnswer}>{props.nextBtn}</button>
               </NavLink>
            </form>
         </div>
      )
   
}

export default TaskInput;