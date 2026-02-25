function Input1({label,inputID,value,setValue}){
    return(
        <>
    <label htmlFor={inputID}>{label}</label>
    <input
     type="number"
     id={inputID} 
     placeholder="unesi Broj"
     value={value}
     onChange={(e)=>setValue(e.target.value)}
    
    />
    </>
    )
}
function Input2({label,inputID,value,setValue}){
    return(
        <>
    <label htmlFor={inputID}>{label}</label>
    <input
     type="number"
     id={inputID} 
     placeholder="unesi Broj"
     value={value}
     onChange={(e)=>setValue(e.target.value)}
    
    />
    </>
    )
}
export{Input1,Input2}