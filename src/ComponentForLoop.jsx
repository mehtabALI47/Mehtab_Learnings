const LoopComp = ({data})=>{
    return(
        <div style={{
            border: "solid mediumslateblue",
            margin: "20px",
            padding: "10px",
            width: "700px",
            backgroundColor: "darkslateblue",
            color: "aliceblue",
            borderRadius: "10px",
            fontFamily: "cursive"
          }}>
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.age}</h2>
            <h2>Gender: {data.gender}</h2>
        </div>
    )
}
export default LoopComp