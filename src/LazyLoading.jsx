import { lazy, Suspense, useState } from "react"
//import Clock from "./Clock";
const ClockComponent = lazy(()=> import('./Clock'))
function LearnLazyLoading(){
    const [load, setLoad] = useState(false);
    return(
        <div>
            <h1>Lazy Loading</h1>
            { load ? <Suspense fallback="Loading..."><ClockComponent/></Suspense> : null }
            <button onClick={()=>setLoad(true)}>Load Clock Component</button>
        </div>
    )
}
export default LearnLazyLoading