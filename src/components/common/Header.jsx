import React, {useState,useContext } from 'react';
import styled,{ ThemeContext } from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import Toggler from 'components/common/Toggler';

const HeaderWrapper = styled.header`
height:60px;
width:100%;
box-sizing:border-box;
display:flex;
padding:0 16px;
position:fixed;
top:0px;
background-image: linear-gradient(to right,${p=>p.theme.PrimaryColor}, ${p=>p.theme.SecondaryColor});
border-bottom:3px solid ${p=>p.theme.SecondaryColor};
`
const StLink = styled(Link)`
padding:4px 8px;
display:block;
text-align:center;
box-sizing:border-box;
margin:auto 0px ;
text-decoration:none;
color:${p=>p.theme.TextColor};
opacity:0.6;
font-size:18px;
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
background:${p=>p.theme.BodyColor};
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
    border-radius:40%;
    height:3px;
    background:${p=>p.theme.TextColor};
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
    const {id, setTheme} = useContext(ThemeContext);

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
                <Toggler isActive={ id ==="light"} onToggle={setTheme}/>
            </Menu>
        </HeaderWrapper>
    )
}
