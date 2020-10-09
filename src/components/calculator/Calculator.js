import React from 'react';
import './calculator.css';

function App() {

  const [currentResult, setCurrentResult] = React.useState(0);
  const [currentOperator, setCurrentOperator] = React.useState(null);
  const [inProgress, setInProgress] = React.useState(false);

  const inpRef= React.useRef();

  const numberClicked = (number) =>{
    // check if its empty
    if (!inpRef.current.value){
        if (number !== "."){
          inpRef.current.value = number;
        }
      }
      else{
        if(number!=="."){
          inpRef.current.value += number;
        }
        else if (number === "." && inpRef.current.value.indexOf(".") === -1) {
          inpRef.current.value += number;
        }
      }
  }

  const operatorClicked = (operator) =>{
    if (!inpRef.current.value){
      return 0;
    }
    if (currentOperator){
          calculate();
      }
      setCurrentResult(inpRef.current.value);
      inpRef.current.placeholder = inpRef.current.value + operator
      inpRef.current.value="";
      setCurrentOperator(operator);
  }

  const calculate = () => {
    switch (currentOperator){
      case "+" :
        inpRef.current.value = parseFloat(currentResult) + parseFloat(inpRef.current.value);
        break;
      case "-" :
        inpRef.current.value = parseFloat(currentResult) - parseFloat(inpRef.current.value);
        break;
      case "x" :
        inpRef.current.value = parseFloat(currentResult) * parseFloat(inpRef.current.value);
        break;
      case "/" :
        inpRef.current.value = parseFloat(currentResult) / parseFloat(inpRef.current.value);
        break;
      default:
        alert("Please enter a number and an operator");
        break;
    }
    setCurrentOperator(null);
    setInProgress(false);
  }

  const clear = () =>{
    inpRef.current.value="";
    inpRef.current.placeholder = "";
    setCurrentResult(0);
    setCurrentOperator(null);
  }
  return (
    <div className="container">
      <div className="calculator">
        <div className="box">
          <input type="text" className="calculator-input" ref={inpRef} disabled/>
          <button className="clear_btn" onClick= {()=>clear()} style={{ width:"50%", marginTop:"10px", fontSize:"2rem", color:"black", backgroundColor:"white",outline:"none",borderRadius:"20px" }}>Clear</button>
          </div>
          <div className="holders">
            <div className="number_holder">
              {[1,2,3,4,5,6,7,8,9,0].map(number=>(
                <button className="number" onClick={()=>numberClicked(number)}>{number}</button>
              ))}
              <button className="number" onClick={()=>numberClicked(".")}>.</button>
              <button className="operator" onClick={()=>calculate()}>=</button>

            </div>
          <div className="operator_holder">
              <button className="operator" onClick={()=>operatorClicked("+")}>+</button>
              <button className="operator" onClick={()=>operatorClicked("-")}>-</button>
              <button className="operator" onClick={()=>operatorClicked("/")}>/</button>
              <button className="operator" onClick={()=>operatorClicked("x")}>x</button>


          </div>

          </div>
      </div>


    </div>
  );
}

export default App;
