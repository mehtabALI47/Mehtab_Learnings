function Maploopjsx(){

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
            <h2>KPS Employess</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=> (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Maploopjsx