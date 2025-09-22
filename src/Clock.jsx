import { useState } from "react";
import { useEffect } from "react";

function Clock() {
    const [clockcolor, setColor] = useState("green")
    const [Time, setTime] = useState("0");

    function test(){
        console.log('if useEffect hook is not used then this function is called in after every second becasue on every second state is updated and when state is update then function is re-rendered (side effect of states hook)')
    }
    useEffect(() => {
        test();

        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
          }, 1000); //setInterval is js function which is called after specific interval like in this case after 1 sec it is called
     
        }, []); // Empty dependency array: run once on mount

  return (
    <div style={{ padding: "20px" }}>
      <h2>Clock</h2>
      <select onChange={(e)=>setColor(e.target.value)}>
        <option value={"green"}>Green</option>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"yellow"}>Yellow</option>
        <option value={"pink"}>Pink</option>
      </select>
      <div style={{backgroundColor:"black", color:clockcolor}}>
        <h1 style={{padding:'10px'}}>{Time}</h1>
      </div>
    </div>
  );
}
export default Clock;
