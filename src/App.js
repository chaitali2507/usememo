import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from "react";
import Useref from './Useref';

function App() {
  const [count,setcount]=useState(0);
  const [item,setitem]=useState(0);

  const memoHook=useMemo(()=>{
    console.log('CNT='+(count*10));
    return count*count;
  },[count])
  
  return (
    <>
    <h2>count:{count}</h2>
    <h2>item:{item}</h2>
    <h2>useMemo:{memoHook}</h2>
    <button onClick={()=>setcount(count+1)}>Count Update</button>
    <button onClick={()=>setitem(item+1)}>Item Update</button><br/><br/>
    =====useRef======<br/>
    <Useref/>
    </>
    
  );
}

export default App;
