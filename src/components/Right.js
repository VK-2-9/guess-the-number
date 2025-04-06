import {useState} from "react"


function Right(props){
    console.log("checking"+ props.result)

    return(
        <>
        <div className="right">
            {
                props.result?<h1 style={{color:"green"}}>You won</h1>:<h1>Enter a <span style={{color:"red", fontSize:"75px"}}>{props.diff}</span>  number</h1>
            }
                
                
            </div>
        </>
    )
}

export default Right