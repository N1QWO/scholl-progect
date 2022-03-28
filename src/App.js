import React from 'react'
import {useState} from 'react'
import Start from './components/start';
import Question from './components/question';
import Result from './components/result';
import store from './api/questionMock';



import { Route,Routes } from 'react-router-dom';
import './App.scss';


function App() {



  const [array, SetArray] = React.useState([1])

  const [answer, setAnswer] = useState(0);
  const [flag, setFlag] = useState(0);
  const [result, setResult] = useState(0);
  const [isPush, setIsPush] = useState(true)
  const [n, setN] = React.useState(0)

  const [nextBtn ,setNextBtn] = React.useState('продолжить')


  const [reArray, SetReArray] = React.useState(0)

  console.log(n)

  function getAnswer(event) {
    //проверка input
    if (event.target.value === 'yes') {

      if (flag === 0) {
        setAnswer(answer + 1);
        setFlag(flag + 1);
      } else {
        setAnswer(answer);
      }
    } else {
      if (flag !== 0) {
        setAnswer(answer - 1);
        setFlag(flag - 1);
      } else {
        setAnswer(answer);
      }
    }
    // изменение состояния checked
    setIsPush(null);
  }
  


  const getResult = () => {
    // сброс для рестарта 
    setAnswer(0)
    setFlag(0)
    setResult(0)
    SetArray([1])
    setN(0)
    SetReArray(!reArray)
    setNextBtn('продолжить')
  }

  
  const getLink = () => {
    return "/" + array[n]
  
  }

  React.useEffect(() => {
  
    const arr = []
    const min = 1;
    const max = store.questions.length + 1;
    async function f1(){
      const numberR = await Promise.resolve(min + Math.floor(Math.random() * (max - min)))   
      return numberR
    }
    
  
    async function wrap(){  
      while(arr.length < store.questions.length){
        let rand = await f1();
        
        if (arr.includes(rand)){}else{arr.push(rand)}
      } 
      if(arr.length == store.questions.length){
        arr.push("result")
      }
      
      SetArray(arr)
      
    }
  
    wrap();
  }, [reArray]);

  


  let questionsArray = store.questions.map((el) => 
    <Route path={el.path} element={
      <Question
        questionNumber={el.questionNumber}
        question={el.question}
        types={el.types}
        var1={el.var1}
        var2={el.var2}
        var3={el.var3}
        value1={el.value1}
        value2={el.value2}
        value3={el.value3}
        valueText={el.valueText}
        path={el.path}
        result={result}
        getAnswer={getAnswer}  
        answer= {answer}
        setFlag ={setFlag}
        setResult={setResult}
        setAnswer = {setAnswer}
        isPush={isPush}
        setIsPush = {setIsPush}
        array = {array}
        quesLeng = {store.questions.length}
        n={n}
        setN ={setN}
        nextBtn ={nextBtn}
        setNextBtn= {setNextBtn}
        getLink= {getLink()}
      />
    }/>
      
  )
 
  return (
    
        <div className="App">

              <h1 className="test-title">Тестирование по теме:""</h1>   
              <div className='main'>
              {/* {array} */}
              <Routes>
                <Route path="/" element={<Start getLink={getLink()} n={n} setN ={setN} />}/>          
                {questionsArray}         
                <Route path="result" element={<Result result={result} getResult={getResult}/>}/>
              </Routes>  

              </div>
               
        </div>
      
    
  );
}

export default App;
