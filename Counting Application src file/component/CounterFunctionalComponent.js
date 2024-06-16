
import {useState,useEffect} from 'react';

const CounterFunctionalComponent=()=>{
const [cnt,setcnt]=useState(0);

useEffect(()=>{
    console.log("change count",cnt)
},[cnt])

const increment=()=>{
    setcnt(cnt+1);
    console.log("in increament function", cnt)
}

const decrement=()=>{
    setcnt(cnt>0?cnt-1:0);
}

const resetCounter=()=>{
    setcnt(0);
}

return(
 <div>
 <h3>You clicked {cnt} times</h3>
 <button type="button" name="inc" id="inc" value="inc" onClick={increment}>increment Counter</button>
 &nbsp;&nbsp;

 <button type="button" name="desc" id="desc" value="desc" onClick={decrement}>decrement Counter</button>
&nbsp;&nbsp;

<button type="button" name="reset" id="reset" value="reset" onClick={resetCounter}>reset Counter</button>
&nbsp;&nbsp;
 </div>

)

}
export default CounterFunctionalComponent;