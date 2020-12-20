import React, {useState} from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
height:60px;
width:100%;
box-sizing:border-box;
display:flex;
padding:0 16px;
position:fixed;
top:0px;
background-image: linear-gradient(to right, #f8049c, #fdd54f);
border-bottom:3px solid #fdd54f;
`
const StLink = styled(Link)`
padding:4px 8px;
display:block;
text-align:center;
box-sizing:border-box;
margin:auto 0px ;
text-decoration:none;
color:black;
opacity:0.6;
`
const Menu = styled.nav`
display:${p=>p.open?"block":"none"};
position:absolute;
top:60px;
left:0px;
width:100%;
padding:8px;
box-sizing:border-box;
height:initial;
background:white;
border-bottom:3px solid #fdd54f;
@media(min-width:768px){
background:none;
display:flex;
position:relative;
border-bottom:none;
margin:auto 0 auto auto;
left:initial;
top:initial;
width:initial;
}
`
const MobileIcon = styled.div`
margin:auto 0px auto auto;
width:25px;
min-width:25px;
padding:5px;
>div{
    height:3px;
    background:black;
    margin:5px 0;
    width:100%
}
@media(min-width:768px){
    display:none
}
` 
const Active = {
    opacity: 1,
};

export default function Header() {
    const [menuOpen, setMenu] = useState(false);
    return (
        <HeaderWrapper>
            <MobileIcon onClick={()=>setMenu(s=> !s)}>
                <div></div>
                <div></div>
                <div></div>
            </MobileIcon>
            <Menu open={menuOpen}>     {/* state passed to component, can be used in styled component to render based on condition */}
         
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