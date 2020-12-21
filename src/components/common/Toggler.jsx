import React from 'react'
import styled from 'styled-components'

const TogglerWrapper = styled.div`
width:50px;
min-width:50px;
height:25px;
border-radius:25px;
border:1px solid #666;
margin:auto;
display:flex;
background-image:linear-gradient(to bottom, ${ p=> p.theme.PrimaryColor}, ${
    p =>p.theme.SecondaryColor});
`
const Notch = styled.div`
height:21px;
width:21px;
border:1px solid #666;
margin-top:1px;
background:white;
border-radius:50%;
transition:transform 0.1s linear;
transform:translate(${p=>p.isActive?"26px":"1px"});
`


function Toggler({isActive,onToggle}) {
    return (
        <TogglerWrapper onClick={onToggle}>
            <Notch isActive={isActive}></Notch>


        </TogglerWrapper>
    )
}


export default Toggler