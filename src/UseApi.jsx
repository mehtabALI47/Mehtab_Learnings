import { Suspense, use } from "react";

 const data = fetch('https://dummyjson.com/users').then((resp)=>resp.json());


export default function LearnUseApi(){
    return(
<div>
    <h1>Learning Use Api in React</h1>
    <Suspense fallback="Loading..."><Users udetails={data}/></Suspense>
</div>
    )
}

const Users = ({udetails})=>{
    var data = use(udetails);
    console.log(data)
    return(
        <div>
        <h1>Use Api</h1>
        {
            data?.users?.map((item)=>(
                <h2>{item.firstName}</h2>
            ))
        }
        </div>
    )
}