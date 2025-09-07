import { useState } from "react"

function RadioAndDropDown(){

    const [Gender, setGender] = useState("")
    const [City, setCity] = useState("")
    return(
        <div>
            <div>
                <h2>Radio Button in React</h2>
                <br/>
                <h2>Select Gender</h2>
                
                <input type="radio" name="gender" id="male" value="Male" onChange={(e)=>setGender(e.target.value)}/>
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" value="Female" onChange={(e)=>setGender(e.target.value)}/>
                <label htmlFor="female">Female</label>
                <br/>
                <h3>Selected Gender: {Gender}</h3>
            </div>
            <br/>
            <div>
                <h2>Drop Down in React</h2>
                
                <h2>Select City</h2>
                <select onChange={(e)=>setCity(e.target.value)}>
                    <option value="">--Select City--</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Faisalabad">Faisalabad</option>
                </select>
                <br/>
                <h3>Select city: {City}</h3>
            </div>
        </div>
    )
}
export default RadioAndDropDown