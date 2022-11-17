import React from "react";

const Input = ( {...rest} ) => {
  
  return(
    <React.Fragment>
       <input {...rest}/>
    </React.Fragment>
  )
}

export default Input;