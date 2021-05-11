import React from 'react'
import styled from 'styled-components'


const StyledIncome  = styled.div`
width:500px;
min-height:70px;
margin:10px;
display:flex;
align-items:center;
background-color:#f05454;
justify-content:space-between;
flex-direction:row;

`

const Text = styled.h1`
font-size:20px;
padding:0 10px;
background-color:transparent;

color:white;
`
 const StyledActive = styled.div`
 width:auto;
 min-height:70px;
 display:flex;
 align-items:center;
 font-weight:bold;
 color:white;
 justify-content:center;
 padding:0 20px;
 background-color:#30475e;
`



const Income = (props) => {
    return (
        <StyledIncome>
            <Text>{props.description}</Text>
            <StyledActive>{props.price}</StyledActive>
            
        </StyledIncome>
    )
}

export default Income
