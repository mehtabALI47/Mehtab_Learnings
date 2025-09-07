import { useState } from "react"
import PropsSideEffect from "./PropsSideEffect2"

function PropsSideEffects(){
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Counter</button>
            <button onClick={()=>setData(data + 1)}>Data</button>
            <PropsSideEffect Count={count} Data={data} />

        </div>
    )
}
export default PropsSideEffects