import { useState } from "react"

function AddUsers(){
    const [name, setUserName] = useState('');
    const [age, setUserAge] = useState('');
    const url = "http://localhost:5000/Users";

    const saveUserInfo = async ()=>{
        console.log(name, age);
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify({name, age})
        })
        if (response.status == 201){
            alert('User Added Succesfully')
        }
        else{
            alert('Something went wrong')
        }
    }

    return(
        <>
        <h2>Add New User</h2>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setUserName(e.target.value)}/>
        <br/><br/>
        <input type="text" placeholder="Enter Age" onChange={(e)=>setUserAge(e.target.value)}/>
        <br/><br/>
        <button onClick={saveUserInfo}>Save</button>
        </>
    )
}
export default AddUsers