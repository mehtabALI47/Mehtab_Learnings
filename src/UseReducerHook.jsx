import { useReducer } from "react"

const userData = {
    firstName:"",
    lastName:"",
    country:"",
    city:"",
    sector:"",
    mobile:"",
    age:"",
}

const reducer = (data, action)=>{
return{...data, [action.type]: action.val}
}
function LearnReducerHook(){

    const [state, dispatch] = useReducer(reducer, userData)
    console.log(state);
    return (
        <div>
            <h2>Use Reducer Hook</h2>
            <input type="text" onChange={(e)=>dispatch({type:"firstName", val: e.target.value})} placeholder="please enter first name"/>
            <br/><br/>
            <input type="text" onChange={(e)=>dispatch({type:"lastName", val: e.target.value})} placeholder="please enter last name"/>
            <br/><br/>
            <input type="text" onChange={(e)=>dispatch({type:"country", val: e.target.value})} placeholder="please enter country"/>
            <br/><br/>
            <input type="text" onChange={(e)=>dispatch({type:"city", val: e.target.value})} placeholder="please enter city"/>
            <br/><br/>
            <input type="text" onChange={(e)=>dispatch({type:"sector", val: e.target.value})} placeholder="please enter sector"/>
            <br/><br/>
            <input type="text" onChange={(e)=>dispatch({type:"mobile", val: e.target.value})} placeholder="please enter mobile"/>
            <br/><br/>
            <input type="text" onChange={(e)=>dispatch({type:"age", val: e.target.value})} placeholder="please enter age"/>
       <br/><br/>
       <ul>
        <li>First Name: {state.firstName}</li>
        <li>Last Name: {state.lastName}</li>
        <li>Country: {state.country}</li>
        <li>City: {state.city}</li>
        <li>Sector: {state.sector}</li>
        <li>Mobile: {state.mobile}</li>
        <li>Age: {state.age}</li>
       </ul>
        </div>
    )
}
export default LearnReducerHook