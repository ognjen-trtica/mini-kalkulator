 function Option(operacija,setOperacija){
    return(<>
    <select
    value={operacija}
    onChange={(e)=>setOperacija(e.target.value)}
    >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    </>)
}
export {Option}