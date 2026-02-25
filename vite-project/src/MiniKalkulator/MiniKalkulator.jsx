import { useState } from "react";
import { Input1,Input2 } from "./Inputi";
export default function MiniKalkulator2(a,b){

    const[num1,setNum1]=useState()
    const[num2,setNum2]=useState()
    const[resultate,setResultate]=useState()
    const[error,setError]=useState("")
    const[list,setList]=useState([])
    const[operacija,setOperacija]=useState("_")

    a = parseFloat(num1)
    b = parseFloat(num2)

    return(
        <>
        <Input1
         value={num1}
         setValue={setNum1}
         label="Broj 1"
         inputID="inpu1"
         />
        <Input2
         value={num2}
         setValue={setNum2}
         label="Broj 2"
         inputID="input2"
         />
        </>
    )
}
