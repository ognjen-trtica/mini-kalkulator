import { useState } from "react";
import { Input1,Input2 } from "./Inputi";

export default function Main(){
    const[num1,setNum1]=useState("")
    const[num2,setNum2]=useState("")
    const[error,setError]=useState("")
    const[operacija,setOperacija]=useState()
    const[rezultat,setRezultat]=useState()
    const[list,setList]=useState([])

    const a = parseFloat(num1)
    const b = parseFloat(num2)

    let res;


    // const rez ={
    //     id:Date.now(),
    //     broj : res
    // }

    function Izracunaj(){
        if(num1==="" || num2==="")
        {setError(alert("Nisi uneo oba broja"))
            setRezultat(null)
            return
        }

        switch(operacija){
            case"+":
                res=a+b
                break
            case"-":
                res=a-b
                break
            case"*":
                res=a*b
                break
            case"/":
            if(b===0)
            {setError(alert("Ne mozes deliti sa nula"))
             setRezultat(null)
             return
            }
                res=a/b
                break
            default:
                {setError(alert("Niste uneli operaciju"))
                    return
                }
        }

        setRezultat(res)
        setError("")
        setList(prev=>[...prev,{ id: Date.now(), broj: res }])
    }

    return(
        <>
        <div style={{border:"2px solid black", margin:"250px"}}>
        <Input1
            label="Broj 1"
            value={num1}
            setValue={setNum1}
            inputID="input1ID"
        />
        <br />
        <Input2 
            label="Broj 2"
            value={num2}
            setValue={setNum2}
            inputID="input2ID"
        />

         <select 
        value={operacija}
        onChange={(e)=>setOperacija(e.target.value)}
        >
            <option value="">Unesi</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <button onClick={Izracunaj}>Izracunaj</button>
        </div>
        {error && alert(<p style={{color:"red"}}>{error}</p>)}
        <ul>{list.map(item=>(<li key={item.id}>{item.broj}{<button onClick={()=>setList(list.filter(el=>item.id!==el.id))}>Obrisi</button>}</li>))}</ul>

        </>
    )
}
