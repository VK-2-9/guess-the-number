import Left from "./Left";
import Right from "./Right";
import { useState } from "react";

function Bottom(props) {
      


      const [input,setinput]=useState("")
      const [diff,setdiff]=useState("")
      const [result,setresult]=useState(false)

      const handleinput=(e)=>{
          setinput(e.target.value)
      }

      const check=()=>{
          if(props.random==input){
          console.log("yes")
          console.log(props.random)
          setdiff("")
          setresult(true) 
          console.log(result) 

          }
          else{
              console.log("no")
              setresult(false) 
              console.log(props.random)
              if(input>props.random){
                setdiff("Lesser ")
            }
            else{
              setdiff("Higher") 
            }

          }

          
      }

  return (
    <div className="bottom">
      <Left random={props.random} input={input} handleinput={handleinput} check={check} />

      <Right diff={diff} result={result}/>
    </div>
  );
}

export default Bottom;
