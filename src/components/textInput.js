import React from "react";
import {NavLink } from "react-router-dom";
import './question.scss';



class TestInput extends React.Component {
   state = {
     myValue: '',
    
   }
  


   onChangeHandler = (e) => {
     this.setState({ myValue: e.currentTarget.value })
   }

   onCheckAnswer = () => {
      let trueAnswer = this.props.valueText

      if (this.state.myValue.toLowerCase() === trueAnswer){  
         this.props.setResult(this.props.result + 1)
        }       
        this.props.reTakeBtn()
        this.setState({ myValue: '' })

        this.props.setN(this.props.n + 1)
        
    }


   render() {
     return (
        <div className="text-ans">
           <input
         className='test-input'
         onChange={this.onChangeHandler}
         value={this.state.myValue} 
         placeholder='введите значение' />
         <NavLink to={this.props.getLink}>
            <button className="btn btn__second" onClick={this.onCheckAnswer}>{this.props.nextBtn}</button>
         </NavLink>
         
        </div>
     )
   }
 }

 export default TestInput;