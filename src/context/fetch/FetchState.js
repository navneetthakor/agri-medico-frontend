import React, { useState, useEffect } from 'react'
import fetchContext from "./fetchContext";

const FetchState = (props)=>{

    const initialFetchItems = {}
    const [result, setResult] = useState(initialFetchItems)
    
    const updateResult = (response)=>{
        setResult(response)
    }
    
    return (
        <fetchContext.Provider value={{ result, updateResult }}> {/* here we created an object where state value is state and update value is update. Similarly we can send many other functions via this anywhere in our app structure */}  {/* same as {state: state, update: update} */}
          {props.children}
        </fetchContext.Provider>
      )
}

export default FetchState