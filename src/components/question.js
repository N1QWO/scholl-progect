import React from "react";
import "./question.scss"
import { Link} from "react-router-dom";
import TestInput from './textInput.js'
import TaskInput from './taskinput.js'
import '../App.scss';

function Question(props){
  const reTakeBtn = () =>{
    if(props.quesLeng - 1  == props.n){
      props.setNextBtn('закончить')
    } 
  }
  


  const getReset = () => {
    //сброс для следующего ответа
    props.setAnswer(0)
    props.setFlag(0)
    props.setResult(props.result + props.answer )

    
    reTakeBtn();
    
    // изменение состояния checked
    props.setIsPush(false);
    
    props.setN(props.n + 1)
  }

  if (props.types === "radio") {
   return(
     
        <div className="test-wrapper">
            <h2 className="question-title">{props.questionNumber}<div>{props.question}</div></h2>
            <form>
              <div className="question-inputs">
                <input
                  onClick={(e) => props.getAnswer(e)}
                  className="question-input"  
                  type={props.types}
                  checked={props.isPush}
                  id="q1" 
                  name="q" 
                  value={props.value1}  
                  />
                <label for="q1">{props.var1}</label>
              </div>
              <div className="question-inputs">
                <input 
                  onClick={(e) => props.getAnswer(e)}
                  checked={props.isPush}
                  className="question-input"  
                  type={props.types} 
                  id="q2" 
                  name="q" 
                  value={props.value2}                
                  />
                <label for="q2">{props.var2}</label>
              </div>
              <div className="question-inputs">
                <input
                  onClick={(e) => props.getAnswer(e)}
                  checked={props.isPush}
                  className="question-input"  
                  type={props.types} 
                  id="q3" 
                  name="q" 
                  value={props.value3}              
                  />
                <label for="q3">{props.var3}</label>
              </div>
            
              <div className="question-button">
                  <Link to={props.getLink}>
                    <button 
                      type="submit"
                      onClick={getReset} 
                      className=" btn btn__second question-button-next" 
                      name="link"
                      >{props.nextBtn}</button>
                  </Link>
              </div>
            </form>
            
          </div>
   )}else if (props.types === "text"){
     return(
    <div className="test-wrapper">
    <h2 className="question-title"><span>{props.questionNumber}</span> {props.question}</h2>    
    <div className="question-inputs">
      <TestInput
        valueText={props.valueText}
        arr = {props.arr}
        setResult={props.setResult}
        result={props.result}
        n = {props.n}
        setN = {props.setN}
        nextBtn = {props.nextBtn}
        setNextBtn = {props.setNextBtn}
        quesLeng = {props.quesLeng}
        reTakeBtn = {reTakeBtn}
        getLink ={props.getLink}
        
      />  
    </div>
  </div> 
  )}else{
    return(
      <div><TaskInput
        valueText={props.valueText}
        setResult={props.setResult}
        result={props.result}
        n = {props.n}
        setN = {props.setN}
        nextBtn = {props.nextBtn}
        setNextBtn = {props.setNextBtn}
        quesLeng = {props.quesLeng}
        reTakeBtn = {reTakeBtn}
        getLink ={props.getLink}
        
      /></div>
    )
  }
} 

export default Question;