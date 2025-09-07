import { useEffect } from "react";

const PropsSideEffect=({Count,Data})=>{

    function print(){
        console.log('Learning Props Side Effects')
    }

    useEffect(()=>{
        print();
    }, [Data])

    return(
        <div>
            <h2>Counter: {Count}</h2>
            <h2>Data: {Data}</h2>
        </div>
    )
}
export default PropsSideEffect