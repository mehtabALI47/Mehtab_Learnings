import styled from "styled-components";     

function StyleComp(){

    const Header = styled.h2`
    color:red;
    border: 1px solid green;
    margin: 10px;
    padding: 10px;
    `;
    const Para = styled.p`
    color:blue;
    margin: 10px;`
    
    return(
        <div>
            <h1>This is header with H1 tag</h1>
            <Header>This is learning of styled component library in react</Header>
            <Header>This for second time</Header>
            <Para>This is paragraph styled componend for the the learning purpose of react</Para>
        </div>
    )
}
export default StyleComp;