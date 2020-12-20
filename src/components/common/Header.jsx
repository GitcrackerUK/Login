import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
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

`
const Menu = styled.nav`
display:block;
position:absolute;
top:60px;
left:0px;
width:100%;
padding:8px;
box-sizing:border-box;

@media(min-width:768px){
display:flex;
position:relative;
border-bottom:none;
margin:auto 0 auto auto;
left:initial;
top:initial;
width:initial;
}
`
const Active = {
    opacity: 1,
};

export default function Header() {

    return (
        <HeaderWrapper>
            <Menu>
                <StLink exact to='/login' activeStyle={Active} >
                    Login
                </StLink>
                <StLink exact to='/' activeStyle={Active}>
                    Home
                </StLink>
            </Menu>
        </HeaderWrapper>
    )
}
