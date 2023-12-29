import { useRef } from "react"

const Useref =()=>{
    const getName=useRef(null)
    const btnHandler=()=>{
        getName.current.value='1000';
        getName.current.style.background='skyblue';
        getName.current.style.color='red';
    }
    return(
        <>
        <input type="text" ref={getName}/>
        <button onClick={btnHandler}>Click</button>
        </>
    )
}
export default Useref