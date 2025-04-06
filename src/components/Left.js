import {useState} from "react"
function Left(props){

   

    return(
      
        < >
            <div className="left">
                <input type="number" onChange={props.handleinput} value={props.input}></input>
                <button onClick={props.check}>Check</button>
            </div>
        </>   
       )
}

export default Left