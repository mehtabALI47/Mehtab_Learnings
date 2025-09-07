import LoopComp from "./ComponentForLoop"

function ReuseComponent(){

    const data = [
        {
            id:1,
            name:"Ali",
            age:27,
            gender:"Male"
        },
        {
            id:2,
            name:"Ahmad",
            age:47,
            gender:"Male"
        },
        {
            id:3,
            name:"Somia",
            age:25,
            gender:"Female"
        },
        {
            id:4,
            name:"Maira",
            age:20,
            gender:"Female"
        }
    ]
    return(
        <div>
            <h2>Reuse Component</h2>
            <div>
                {
                    data.map(item=>(
                        <div key={item.id}>
                            <LoopComp data={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ReuseComponent