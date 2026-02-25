import { useState } from "react"
import {a,b} from "./MiniKalkulator"
function Izracunaj(){
    const[operacija,setOperacija]=useState()

    let rez;
  switch(operacija){
    case "+":
        rez = a + b
        break
    case "-":
        rez = a - b
        break
    case "*":
        rez = a * b
        break
    case "/":
        rez = a / b
        break

    default: return
}
}