function Input1({value,setValue,label,inputID}){
    return(
        <>
        <label htmlFor={inputID}>{label}</label>
        <input
         type="number"
         placeholder="unesi broj"
         id={inputID}
         value={value}
         onChange={(e)=>setValue(e.target.value)}
         />
        </>
    )
}

function Input2({value,setValue,label,inputID}){
    return(
        <>
        <label htmlFor={inputID}>{label}</label>
        <input
         type="number"
         placeholder="unesi broj"
         id={inputID}
         value={value}
         onChange={(e)=>setValue(e.target.value)}
         />
        </>
    )
}

export{Input1,Input2}