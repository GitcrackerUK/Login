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
background:black;
`
const Notch = styled.div`
height:21px;
width:21px;
border:1px solid #666;
margin-top:1px;
background:white;
border-radius:50%;
transition:transform 0.1s linear;
`


function Toggler({isActive}) {
    return (
        <TogglerWrapper>
            <Notch isActive={isActive}></Notch>


        </TogglerWrapper>
    )
}


export default Toggler