import { useState } from "react"

function Searchbar(props){
  


    return(
        <>
        <label>Search</label>
    <input type="text" value={props.nom} onChange={props.inputHandler}>
    
    </input>
        </>
    )
}
export default Searchbar;