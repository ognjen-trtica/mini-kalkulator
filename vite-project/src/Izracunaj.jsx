import { Operation } from "./Operacije";
import { MiniKalkulator } from "/Users/Moj Laptop/Desktop/Projekat1/vite-project/src/App";

function Izracunaj({number1,number2,setError,setRezultat,setList}){

    if(number1==="" || number2==="")
    {setError("Nisi uneo oba broja")
        setRezultat(null)
    setList(prev=>[...prev,rez])
        return(
            <>
            <Operation
            num1 = {number1}
            num2 = {number2}
            setError = {setError}
            />
            
            </>
        )
    }
}

export {Izracunaj}