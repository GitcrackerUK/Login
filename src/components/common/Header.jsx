import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'components/common/Button'

const HeaderWrapper = styled.header`
height:60px;
width:100%;
box-sizing:border-box;
display:flex;
padding:0 16px;
position:fixed;
top:0px;
background-color:#eeeeee;
padding:20px;
`
const StLink = styled(Link)`
text-decoration:none;
margin:0px 10px;
font-family:'Lato', sans-serif;
font-weight:500;
color:green;
`

export default function Header() {
    return (
        <HeaderWrapper>
            <StLink  to='/'>
               <Button Large >Home</Button>
           </StLink>
            <StLink to='/login'>
               <Button Large >Login</Button>
           </StLink>
        </HeaderWrapper>
    )
}
